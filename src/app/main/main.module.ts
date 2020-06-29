import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.model';
import { WordsService } from './services/words.service';
import { LevelComponent } from './components/level/level.component';
import { RangePipe } from './pipes/range.pipe';
import { MainComponent } from './main.component';
import { GameService } from './services/game.service';
import { WordsComponent } from './components/words/words.component';
import { FormComponent } from './components/form/form.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BytesMediaPipe } from './pipes/bytes-media.pipe';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
    declarations: [
        MainComponent,
        RangePipe,
        LevelComponent,
        WordsComponent,
        FormComponent,
        ButtonsComponent,
        BytesMediaPipe,
        ResultsComponent
    ],
    imports: [
        SharedModule,
        MainRoutingModule
    ],
    providers: [
        WordsService, 
        GameService
    ]
})
export class MainModule {}