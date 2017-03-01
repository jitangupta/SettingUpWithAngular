import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'voter',
    template: `
        <div class="voter">
            <i class="glyphicon glyphicon-menu-up btn-vote"
               [class.active]="myVote==1"
               (click)="onPositive()">
            </i>
            <span>{{totalVotes+myVote}}</span>
            <i class="glyphicon glyphicon-menu-down btn-vote"
               [class.active]="myVote==-1"
               (click)="onNegative()">
            </i>
        </div>
    `,
    styles: [`
        .voter{
            width:20px;
            text-align:center;
            color:#999;
        }
        .btn-vote{
            font-size:1.2em;
            cursor:pointer;
        }
        .glyphicon.active{
            font-weight:bold;
            color:orange;
        }
    `]
})
export class VoterComponent {
    @Input() myVote = 0;
    @Input() totalVotes = 0;

    @Output() vote = new EventEmitter();

    onPositive() {
        if (this.myVote == 1)
            return;
        this.myVote++;

        this.vote.emit({ newVote: this.myVote });
    }

    onNegative() {
        if (this.myVote == -1)
            return;
        this.myVote--;

        this.vote.emit({ newVote: this.myVote });
    }
}