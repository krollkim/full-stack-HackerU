"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.contact = void 0;
var typeorm_1 = require("typeorm");
var contact = /** @class */ (function () {
    function contact() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], contact.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 40 })
    ], contact.prototype, "fullName");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], contact.prototype, "createTime");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 15 })
    ], contact.prototype, "phone");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 40 })
    ], contact.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 150 })
    ], contact.prototype, "content");
    __decorate([
        (0, typeorm_1.Column)()
    ], contact.prototype, "satisfaction");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', "default": false })
    ], contact.prototype, "isCompleted");
    contact = __decorate([
        (0, typeorm_1.Entity)("contacts")
    ], contact);
    return contact;
}());
exports.contact = contact;
