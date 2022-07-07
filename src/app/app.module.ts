import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConfigReaderWriterService } from './config-reader-writer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfigReaderWriterComponent } from './config-reader-writer/config-reader-writer.component';

@NgModule({
  declarations: [
    AppComponent,
   ConfigReaderWriterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigReaderWriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
