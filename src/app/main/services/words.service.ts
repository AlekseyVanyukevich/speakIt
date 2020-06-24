import { RequestService } from 'src/app/shared/services/request.service';
import { Observable } from 'rxjs';
import { Word } from '../models/word.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WordsService {
    baseUrl: string = 'https://localhost:44334/api/words';
    constructor(
        private requestService: RequestService
    ) {}
 
    getLevelWords(level: number): Observable<Word[]> {
        return this.requestService.get<Word[]>(`${this.baseUrl}/${level}`);
    }
}