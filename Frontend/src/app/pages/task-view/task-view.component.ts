import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];
  selectedListId: string;
  constructor(private taskService: TaskService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if(params.listId){
          this.selectedListId = params.listId;
          this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          })
        }else{
          this.tasks = undefined;
        }   
    })

    this.taskService.getList().subscribe((lists: List[]) => {
      this.lists = lists;
    })
  }

  onTaskClick(task: Task){
    // we want to set the task complated
    this.taskService.complete(task).subscribe(() =>{
    // the task has been set to completed successfully
    console.log("completed successfully");
    task.completed = !task.completed;
    })
  }

  onDeleteList(){
    this.taskService.delete(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
        console.log(res);
    });
  }

  onDeleteTaskClick(id: string){
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
      console.log(res);
      console.log("tasks is deleted");
      this.tasks = this.tasks.filter(val => val._id !== id);
    })
  }

}
