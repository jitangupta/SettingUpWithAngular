import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './favorite.compnent';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <like [totalLikes]="post.totalLikes" (change)="onLikeChange($event)"></like>
                <favorite [is-Favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <voter [totalVotes]="post.totalVotes"></voter>
    `,
    directives: [CoursesComponent, AuthorComponent, LikeComponent, VoterComponent]
})
export class AppComponent {
    post = {
        title: "This is a title",
        isFavorite: true,
        totalLikes: 10,
        totalVotes: 15
    }

    onLikeChange($event) {
        console.log($event);
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}
