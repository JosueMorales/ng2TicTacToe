import {Component} from '@angular/core';

@Component({
    selector: 't-board',
    templateUrl: 'app/components/t-board/tpl/t-board.html'

})

export class Board{
    
    constructor(){
        this.start();
    }
    board:Array<any>;
    winner:any;
    draw: any;
    currentPlayer:boolean; //true = X and false = O
    private _currentPlayerLabel:string;
    size:number = 3;

    get currentPlayerLabel() : string {
         if(this.currentPlayer)
        return 'X';
      //  return '<img sp
        return 'O';
        //return '<img src="app/images/ic_O.svg" alt="O">';
    }
    start(){
        this.board = [];
        this.winner = false;
        this.draw = false;
        this.currentPlayer = true;
    }
    play(x:number, y:number, currentPlayer:boolean){
        if(currentPlayer)
            this.board[x][y] = 'X';
        else
            this.board[x][y] = 'O';
        this.checkGame();
        this.currentPlayer = !this.currentPlayer;
    }
    checkGame(){
        let size = this.board.length;
        let vMatch = () => {
            let match = true;
            for(let y=0; y<size; y++){
                match = true;
                for(let x=0; x<size; x++){
                    if(this.board[x][y] !== this.board[0][y]){
                        match = false;
                        break;
                    }
                }
                if(match) return true;   
            }
            return false;
        };
        let hMatch = () => {
            let match = true;
            for(let x=0; x<size; x++){
                match = true;
                for(let y=0; y<size; y++){
                    if(this.board[x][y] !== this.board[x][0]){
                        match = false;
                        break;
                    }
                }
                if(match) return true;   
            }
            return false;
        };
        let xMatch = () =>{
            let match = true;
            for(let i=0; i<size; i++){
                if(this.board[i][i] !== this.board[0][0]){
                    match = false;
                    break;
                }
            }
            if(match) return true;
            for(let i=0; i<size; i++){
                if(this.board[i][(size-1) - i] !== this.board[0][size-1])
                    return false;
            }
            return true;
        };
        let draw = () => {
            return this.board.every(elm => elm.reduce((a, b) => !a ? a : b) !== null)
        };

        if(vMatch() || hMatch() || xMatch()){
            this.winner.winner = this.currentPlayerLabel;
        }else if(draw()){
            this.draw = true;
        }

    }
}