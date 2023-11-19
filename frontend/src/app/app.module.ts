import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './components/Chat/chat-input/chat-input.component';
import { ChatDisplayComponent } from './components/Chat/chat-display/chat-display.component';
import { SaveDialogComponent } from './components/Settings/save-dialog/save-dialog.component';
import { SettingsFormComponent } from './components/Settings/settings-form/settings-form.component';
import { LoginPageComponent } from './components/Login/login-page/login-page.component';
import { ChatPageComponent } from './components/Chat/chat-page/chat-page.component';
import { NewAccountPageComponent } from './components/NewAccount/new-account-page/new-account-page.component';
import { NewAccountFormComponent } from './components/NewAccount/new-account-form/new-account-form.component';
import { SettingsPageComponent } from './components/Settings/settings-page/settings-page.component';
import { ChatsListComponent } from './components/Chat/chats-list/chats-list.component';
import { LoginFormComponent } from './components/Login/login-form/login-form.component';
import { ExportDialogComponent } from './components/Settings/export-dialog/export-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatDisplayComponent,
    SaveDialogComponent,
    SettingsFormComponent,
    LoginPageComponent,
    ChatPageComponent,
    NewAccountPageComponent,
    NewAccountFormComponent,
    SettingsPageComponent,
    ChatsListComponent,
    LoginFormComponent,
    ExportDialogComponent
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
