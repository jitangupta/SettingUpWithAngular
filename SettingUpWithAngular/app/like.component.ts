import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'like',
    template: `
            <i class="glyphicon glyphicon-heart"
               [class.active]="isLiked"
               (click)="onClick()">
            </i>
            <span>{{totalLikes}}</span>
         `,
    styles: [`
            .glyphicon-heart{
                color:#ccc;
            }
                .glyphicon-heart.active{
                    color:deeppink;
                }
            .glyphicon:hover{
                cursor:pointer;
            }
        `]
})
export class LikeComponent {
    @Input() isLiked = false;
    @Input() totalLikes = 0;
    @Output() change = new EventEmitter();

    onClick() {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
        this.change.emit({ newValue: this.isLiked });
    }
}