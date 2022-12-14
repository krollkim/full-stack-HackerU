import { Controller, Get, Put, Delete, Param, Post, ParseIntPipe, Body } from "@nestjs/common";
import { Task, TaskStatuses } from "./tasks.entity";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

@Get()
async getTasks(){
   return this.taskService.getTasks();
}

@Post()
    async addtask(@Body() item:Task){
        return await this.taskService.addtask(item);
    }

@Put(":taskId/status/:statusId")
async statusChange(
    @Param('taskId', new ParseIntPipe()) taskId: number,
    @Param('statusId', new ParseIntPipe()) status: TaskStatuses) {
        
    return this.taskService.statusChange(taskId, status);
}

@Put()
async updateClient(@Body() item: Task){
        return await this.taskService.updateTask(item);
}

@Delete(":id")
async removeClient(@Param('id', new ParseIntPipe()) clientId: number) {
    return await this.taskService.removeTask(clientId);
}

    constructor(private taskService: TasksService) { }
}
