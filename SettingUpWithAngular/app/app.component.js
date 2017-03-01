"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var courses_component_1 = require("./courses.component");
var favorite_compnent_1 = require("./favorite.compnent");
var like_component_1 = require("./like.component");
var voter_component_1 = require("./voter.component");
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            title: "This is a title",
            isFavorite: true,
            totalLikes: 10,
            totalVotes: 15
        };
    }
    AppComponent.prototype.onLikeChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First Angular 2 App</h1>\n                <like [totalLikes]=\"post.totalLikes\" (change)=\"onLikeChange($event)\"></like>\n                <favorite [is-Favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n                <voter [totalVotes]=\"post.totalVotes\"></voter>\n    ",
        directives: [courses_component_1.CoursesComponent, favorite_compnent_1.AuthorComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map