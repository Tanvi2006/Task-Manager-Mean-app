import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.scss']
})
export class EditTasksComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router) { }

  taskId: string;
  listId: string;
  ngOnInit(): void {
    this.route.params.subscribe(
    (params: Params) => {
      this.taskId = params.taskId;
      this.listId = params.listId;
    })
  }

  updateTask(title: string){
    this.taskService.updateTask(this.listId, this.taskId,title).subscribe((res: any) => {
    this.router.navigate(['/lists',this.listId]);
    console.log(res);
    console.log("updated successfully");
  })
}

}
