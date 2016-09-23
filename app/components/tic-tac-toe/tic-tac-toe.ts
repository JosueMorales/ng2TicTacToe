import {Component} from '@angular/core';
import {Board} from '../t-board/t-board';

@Component({
    selector: "tic-tac-toe",
    template: '<t-board></t-board>',
    directives: [Board]
})

export class TicTacToe{}