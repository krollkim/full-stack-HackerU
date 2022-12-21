import { Controller, Get, Put, Delete, Param, Post, ParseIntPipe, Body } from "@nestjs/common";
import { Task, TaskStatuses , LevelTypes} from "./tasks.entity";
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

@Put(":taskId/UrLevel/:levelId")
async changePriority(
    @Param('taskId', new ParseIntPipe()) taskId: number,
    @Param('levelId', new ParseIntPipe()) levelId: LevelTypes) {
        
    return this.taskService.changePriority(taskId, levelId);
}

@Delete(":id")
async removeClient(@Param('id', new ParseIntPipe()) taskId: number) {
    return this.taskService.removeTask(taskId);
}

    constructor(private taskService: TasksService) { }
}
