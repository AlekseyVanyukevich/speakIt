import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit, OnDestroy {

  maxLevels: number;
  currentLevel: number;
  currentLevelSub: Subscription;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.maxLevels = this.gameService.getMaxLevels();

    this.currentLevelSub = this.gameService.getCurrentLevel()
      .subscribe((level: number) => {
        this.currentLevel = level;
      });

  }

  onSelectLevel(level: number) {
    if (this.currentLevel !== level) {
      this.gameService.setCurrentLevel(level);
    }
  }

  ngOnDestroy(): void {
    if (this.currentLevelSub) {
      this.currentLevelSub.unsubscribe();
    }
  }
}
