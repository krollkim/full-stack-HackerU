import { Controller,  Post, Body, Get, Put, Delete, Param, ParseIntPipe} from "@nestjs/common";
import { contact } from "./contact.entity";
import { contactService } from "./contact.service";


@Controller("contact")
export class contactsController {

    @Post()
    async addForm(@Body() item: contact){
        return await this.contactService.addForm(item);
    }

    @Get("/list")
    async getAllList(){
        return await this.contactService.getList();
    } 

    @Put("contact/:id/complete")
        async complete(@Param('id', new ParseIntPipe()) contactId: number){
            await this.contactService.complete(contactId)
        }
    @Put("contact/:id/undo")
        async undo(@Param('id', new ParseIntPipe()) contactId: number){
            await this.contactService.undo(contactId);
        }

    @Delete(":id")
    async removeClient(@Param('id', new ParseIntPipe()) contactId: number) {
        return await this.contactService.dataBaseRemove(contactId);
    }
    constructor(private contactService:contactService){

    }
}