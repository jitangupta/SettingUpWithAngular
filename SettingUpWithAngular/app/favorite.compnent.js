"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthorComponent = (function () {
    function AuthorComponent() {
        this.isFavorite = false;
        this.change = new core_1.EventEmitter();
    }
    AuthorComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        this.change.emit({
            newValue: this.isFavorite
        });
    };
    return AuthorComponent;
}());
__decorate([
    core_1.Input('is-Favorite'),
    __metadata("design:type", Object)
], AuthorComponent.prototype, "isFavorite", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AuthorComponent.prototype, "change", void 0);
AuthorComponent = __decorate([
    core_1.Component({
        selector: 'favorite',
        templateUrl: 'app/favorite.template.html',
        styles: ["\n                .glyphicon-star{\n                    color:orange;\n                }\n            "]
    })
], AuthorComponent);
exports.AuthorComponent = AuthorComponent;
//# sourceMappingURL=favorite.compnent.js.map