import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { Observable, Subscription } from 'rxjs';
import { Word } from '../../models/word.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  public selectedWord$: Observable<Word>;
  public isStarted: boolean;
  public gameStateSub: Subscription;
  constructor(
    private wordsService: WordsService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.selectedWord$ = this.wordsService.getSelectedWord();

    this.gameStateSub = this.gameService.isGameStarted()
      .subscribe((isStarted: boolean) => {
        this.isStarted = isStarted;
      });
  }

  ngOnDestroy() {
    if (this.gameStateSub) {
      this.gameStateSub.unsubscribe();
    }
  }
}
