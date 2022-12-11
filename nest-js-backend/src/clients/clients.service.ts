import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./clients.entity";

@Injectable()
export class ClientsService {

    getAll(){
        return this.rep.find()
    }

    addClient(client: Client){
        client.id = null;
        client.createTime = new Date();

        return this.rep.save(client);
    }

    updateClient(client: Client){
        return this.rep.save(client);
    }
    async complete(id: number){
        const item = await this.rep.findOne({where: {id}});
        item.isFavorite = true;
        this.rep.save(item);
    }

    async undo(id: number){
        const item = await this.rep.findOne({where: {id}});
        item.isFavorite = false;
        this.rep.save(item);
    }


    dataBaseRemove(id: number){
        return this.rep.delete(id);
    }

    constructor(
    @InjectRepository(Client)
    private rep: Repository<Client>
    ) { }
}