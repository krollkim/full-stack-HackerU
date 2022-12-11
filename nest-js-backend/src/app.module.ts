import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { Client } from './clients/clients.entity';
import { ClientsService } from './clients/clients.service';
import { contactsController } from './contact/contact.controller';
import { contact } from './contact/contact.entity';
import { contactService } from './contact/contact.service';
import { TasksController } from './tasks/tasks.controller';
import { Task } from './tasks/tasks.entity';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'full-stack',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    logging: true,
  }),
  TypeOrmModule.forFeature([Client, contact, Task]),
  
],
  controllers: [
    AppController,
    ClientsController,
    contactsController,
    TasksController],
  providers: [
    AppService,
    ClientsService,
    contactService,
    TasksService],
})
export class AppModule {}
