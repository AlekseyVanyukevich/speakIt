import { Component, OnInit } from '@angular/core';
import { WordsService } from './services/words.service';
import { Observable } from 'rxjs';


import { Word } from './models/word.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  words$: Observable<Word[]>;
  currentLevel: number;
  constructor(
    private wordsService: WordsService
  ) { 
    this.currentLevel = 0;
  }

  ngOnInit(): void {
    this.words$ = this.wordsService.getLevelWords(this.currentLevel);
  }

}
