import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RequestService } from './services/request.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    LoaderComponent
  ],
  providers: [RequestService]
})
export class SharedModule { }
