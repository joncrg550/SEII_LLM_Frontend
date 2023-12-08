import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './components/Chat/chat-input/chat-input.component';
import { ChatDisplayComponent } from './components/Chat/chat-display/chat-display.component';
import { SettingsFormComponent } from './components/Settings/settings-form/settings-form.component';
import { LoginPageComponent } from './components/Login/login-page/login-page.component';
import { ChatPageComponent } from './components/Chat/chat-page/chat-page.component';
import { NewAccountPageComponent } from './components/NewAccount/new-account-page/new-account-page.component';
import { NewAccountFormComponent } from './components/NewAccount/new-account-form/new-account-form.component';
import { SettingsPageComponent } from './components/Settings/settings-page/settings-page.component';
import { LoginFormComponent } from './components/Login/login-form/login-form.component';
import { ExportDialogComponent } from './components/History/export-dialog/export-dialog.component';
import { Page404Component } from './components/StatusPages/page404/page404.component';
import { Page403Component } from './components/StatusPages/page403/page403.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryPageComponent } from './components/History/history-page/history-page.component';
import { HistoryDisplayComponent } from './components/History/history-display/history-display.component';
import { ChatSelectorComponent } from './components/History/chat-selector/chat-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatDisplayComponent,
    SettingsFormComponent,
    LoginPageComponent,
    ChatPageComponent,
    NewAccountPageComponent,
    NewAccountFormComponent,
    SettingsPageComponent,
    LoginFormComponent,
    ExportDialogComponent,
    Page404Component,
    Page403Component,
    HistoryPageComponent,
    HistoryDisplayComponent,
    ChatSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
