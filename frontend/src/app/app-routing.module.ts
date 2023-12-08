import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/Login/login-page/login-page.component';
import { NewAccountPageComponent } from './components/NewAccount/new-account-page/new-account-page.component';
import { ChatPageComponent } from './components/Chat/chat-page/chat-page.component';
import { SettingsPageComponent } from './components/Settings/settings-page/settings-page.component';
import { Page404Component } from './components/StatusPages/page404/page404.component';
import { Page403Component } from './components/StatusPages/page403/page403.component';
import { HistoryPageComponent } from './components/History/history-page/history-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
  { path: 'login', component: LoginPageComponent },
  { path: 'new-account', component: NewAccountPageComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: '403', component: Page403Component},
  { path: '**', component: Page404Component }
  // Define additional routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
