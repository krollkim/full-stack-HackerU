import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task, TaskStatuses } from "./tasks.entity";

@Injectable()
export class TasksService {


   async getTasks(){
        return await this.rep.find({where: {isDeleted: false}})
    }

    async addtask(task: Task){
        task.id = null;
        task.createTime = new Date();
        task.status = TaskStatuses.open;

        return await this.rep.save(task);
    }

    updateTask(Task: Task){
        return this.rep.save(Task);
    }

    async statusChange(taskId: number, status: TaskStatuses){
        const item = await this.rep.findOne({where: {id: taskId}});

        if (item){
            item.status = status;
            this.rep.save(item);
        }
    }

    removeTask(id: number){
        return this.rep.delete(id);
    }

   

    constructor(
        @InjectRepository(Task)
        private rep: Repository<Task>
    ) { }
}
