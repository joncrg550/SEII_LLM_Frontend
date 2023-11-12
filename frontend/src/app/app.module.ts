import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './components/example-component/example-component.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatDisplayComponent } from './components/chat-display/chat-display.component';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ChatInputComponent,
    ChatDisplayComponent,
    SaveDialogComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
