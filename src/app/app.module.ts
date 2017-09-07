import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RandomColorService } from './random-color.service';
import { AppComponent } from './app.component';
import { MandalaDirective } from './mandala.directive';

@NgModule({
  declarations: [
    AppComponent,
    MandalaDirective
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RandomColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
