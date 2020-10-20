import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getList(){
    return this.webReqService.get('lists');
  }
  createList(title: string){
    // we want to send a web request to create a list
    return this.webReqService.post('lists', {title});
  }

  getTasks(listId: string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
  createTask(title: string, listId: string){
    // we want to send a web request to create a task
    return this.webReqService.post(`lists/${listId}/tasks`, {title});
  }

  complete(task: Task){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }

  delete(id: string){
    return this.webReqService.delete(`lists/${id}`);
  }

  update(id: string, title: string){
    // we want to send a web request to create a list
    return this.webReqService.patch(`lists/${id}`, {title});
  }

  deleteTask(listId: string, id: string){
    return this.webReqService.delete(`lists/${listId}/tasks/${id}`);
  }

  updateTask(listId: string, taskId: string, title: string){
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, {title});
  }

  constructor(private webReqService: WebRequestService) { }
}
