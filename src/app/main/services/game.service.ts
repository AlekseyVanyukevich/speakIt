import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GameService {
    private maxLevels: number = 6;
    private currentLevel: BehaviorSubject<number> = new BehaviorSubject(0);

    getCurrentLevel(): Observable<number> {
        return this.currentLevel;
    }

    setCurrentLevel(level: number): void {
        this.currentLevel.next(level);
    }

    getMaxLevels(): number {
        return this.maxLevels;
    }
}