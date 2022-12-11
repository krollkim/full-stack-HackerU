import { Controller, Delete, Get, Post, Put, Param, ParseIntPipe, Body } from "@nestjs/common";
import { Client } from "./clients.entity";
import { ClientsService } from "./clients.service";

@Controller("clients")
export class ClientsController {

    @Get()
    getClients(){
        return this.clientsService.getAll();
    }

    @Post()
    addClient(@Body() item: Client){
        return this.clientsService.addClient(item);
    }

    @Put()
    updateClient(@Body() item: Client){
        return this.clientsService.updateClient(item);
    }

    @Put(":id/Favorite")
    async complete(@Param('id', new ParseIntPipe()) clientId: number){
        await this.clientsService.complete(clientId)
    }
@Put(":id/unFavorite")
    async undo(@Param('id', new ParseIntPipe()) clientId: number){
        await this.clientsService.undo(clientId);
    }

    
    @Delete(":id")
    async removeClient(@Param('id', new ParseIntPipe()) clientId: number) {
        return await this.clientsService.dataBaseRemove(clientId);
    }

    constructor(private clientsService:ClientsService){

    }
}