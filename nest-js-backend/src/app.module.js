"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var clients_controller_1 = require("./clients/clients.controller");
var clients_entity_1 = require("./clients/clients.entity");
var clients_service_1 = require("./clients/clients.service");
var contact_controller_1 = require("./contact/contact.controller");
var contact_entity_1 = require("./contact/contact.entity");
var contact_service_1 = require("./contact/contact.service");
var tasks_controller_1 = require("./tasks/tasks.controller");
var tasks_entity_1 = require("./tasks/tasks.entity");
var tasks_service_1 = require("./tasks/tasks.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
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
                    logging: true
                }),
                typeorm_1.TypeOrmModule.forFeature([clients_entity_1.Client, contact_entity_1.contact, tasks_entity_1.Task]),
            ],
            controllers: [
                app_controller_1.AppController,
                clients_controller_1.ClientsController,
                contact_controller_1.contactsController,
                tasks_controller_1.TasksController
            ],
            providers: [
                app_service_1.AppService,
                clients_service_1.ClientsService,
                contact_service_1.contactService,
                tasks_service_1.TasksService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
