"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskStatuses = exports.Task = void 0;
var typeorm_1 = require("typeorm");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Task.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], Task.prototype, "createTime");
    __decorate([
        (0, typeorm_1.Column)()
    ], Task.prototype, "task");
    __decorate([
        (0, typeorm_1.Column)({ type: 'int' })
    ], Task.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', "default": false })
    ], Task.prototype, "isDeleted");
    Task = __decorate([
        (0, typeorm_1.Entity)('tasks')
    ], Task);
    return Task;
}());
exports.Task = Task;
var TaskStatuses;
(function (TaskStatuses) {
    TaskStatuses[TaskStatuses["open"] = 0] = "open";
    TaskStatuses[TaskStatuses["inProgress"] = 1] = "inProgress";
    TaskStatuses[TaskStatuses["complete"] = 2] = "complete";
})(TaskStatuses = exports.TaskStatuses || (exports.TaskStatuses = {}));
