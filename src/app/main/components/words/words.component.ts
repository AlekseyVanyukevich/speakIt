import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { GameService } from '../../services/game.service';
import { WordsService } from '../../services/words.service';
import { Word } from '../../models/word.model';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words$: Observable<Word[]>;
  constructor(
    private gameService: GameService,
    private wordsService: WordsService
  ) { }

  ngOnInit(): void {
    this.words$ = this.gameService.getCurrentLevel()
      .pipe(
        mergeMap((level: number) => this.wordsService.getLevelWords(level))
      )
  }

}
