import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task, TaskStatuses, LevelTypes } from "./tasks.entity";

@Injectable()
export class TasksService {


   async getTasks(){
        return await this.rep.find({where: {isDeleted: false}})
    }

    async addtask(newTask: Task){
        if(!newTask.task){
            throw new HttpException("which task are you talking about?", HttpStatus.BAD_REQUEST);
        }

        newTask.id = null;
        newTask.createTime = new Date();
        newTask.status = TaskStatuses.open;

        return await this.rep.save(newTask);
    }

    async statusChange(taskId: number, status: TaskStatuses){
        const item = await this.rep.findOne({where: {id: taskId}});

        if (item){
            item.status = status;
            this.rep.save(item);
        }
    }
    async changePriority(taskId: number, levelId: LevelTypes){
        const item = await this.rep.findOne({where: {id: taskId}});

        if (item){
            item.level = levelId;
            this.rep.save(item);
        }
    }

   async removeTask(taskId: number){
        const item = await this.rep.findOne({where: {id: taskId}});

        if (item){
            item.isDeleted = true;
            this.rep.save(item);
        }
    }

   

    constructor(
        @InjectRepository(Task)
        private rep: Repository<Task>
    ) { }
}
