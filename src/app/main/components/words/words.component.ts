import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { GameService } from '../../services/game.service';
import { WordsService } from '../../services/words.service';
import { Word } from '../../models/word.model';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit, OnDestroy {

  public isStarted: boolean;
  public words: Word[];
  public wordsSub: Subscription;
  private gameStateSub: Subscription;
  @ViewChildren('audio') audioInputs: QueryList<ElementRef<HTMLAudioElement>>;


  constructor(
    private gameService: GameService,
    private wordsService: WordsService
  ) { }

  ngOnInit(): void {
    this.wordsSub = this.gameService.getCurrentLevel()
      .pipe(
        mergeMap((level: number) => this.wordsService.getLevelWords(level))
      )
      .subscribe((words: Word[]) => this.words = words);

    this.gameStateSub = this.gameService.isGameStarted()
        .subscribe((isStarted: boolean) => {
          this.isStarted = isStarted;
        });
  }

  ngOnDestroy(): void {
    if (this.gameStateSub) {
      this.gameStateSub.unsubscribe();
    }
    if (this.wordsSub) {
      this.wordsSub.unsubscribe();
    }
  }

  onSelectWord(word: Word): void {
    if (this.isStarted) {
      return;
    }
    this.setCheckedWord(word);
    this.wordsService.setSelectedWord(word);
    const index = this.words.findIndex((w: Word) => w.id === word.id);
    this.playAudio(index);
  }

  private playAudio(index: number): void {
    const audioInputRef = this.audioInputs.toArray()[index];
    audioInputRef.nativeElement.play();
  }

  setCheckedWord(word): void {;
    this.words.forEach((w: Word, i: number) => {
      if (w.id === word.id) {
        w.isChecked = true;
      }
      else {
        w.isChecked = false;
      }
    });
  }
}
