import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.model';
import { WordsService } from './services/words.service';

@NgModule({
    imports: [
        SharedModule,
        MainRoutingModule
    ],
    providers: [WordsService]
})
export class MainModule {}