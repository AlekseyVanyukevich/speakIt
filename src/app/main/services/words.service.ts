import { RequestService } from 'src/app/shared/services/request.service';
import { Observable, Subject } from 'rxjs';
import { Word } from '../models/word.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WordsService {
    baseUrl: string = 'https://localhost:44334/api/words';

    private selectedWord: Subject<Word> = new Subject<Word>();
    constructor(
        private requestService: RequestService
    ) {}
 
    getLevelWords(level: number): Observable<Word[]> {
        return this.requestService.get<Word[]>(`${this.baseUrl}/${level}`);
    }

    setSelectedWord(word: Word): void {
        this.selectedWord.next(word);
    }
    
    getSelectedWord(): Observable<Word> {
        return this.selectedWord;
    }
}