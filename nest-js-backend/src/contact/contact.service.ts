import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { contact } from "./contact.entity";

@Injectable()
export class contactService {

    async addForm(form: contact){
        return await this.rep.save(form);
    }

    async getList(){
        return await this.rep.find()
    }

    async complete(id: number){
        const item = await this.rep.findOne({where: {id}});
        item.isCompleted = true;
        this.rep.save(item);
    }

    async undo(id: number){
        const item = await this.rep.findOne({where: {id}});
        item.isCompleted = false;
        this.rep.save(item);
    }

    async dataBaseRemove(id: number){
        return await this.rep.delete(id);
    }
    constructor(
        @InjectRepository(contact)
        private rep: Repository<contact>
        ) { }
}