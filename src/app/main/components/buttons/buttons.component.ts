import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  isGameStarted$: Observable<boolean>;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.isGameStarted$ = this.gameService.isGameStarted();
  }

  onStart() {
    this.gameService.startGame();
  }

  onResults() {

  }

  onRestart() {
    
  }
}
