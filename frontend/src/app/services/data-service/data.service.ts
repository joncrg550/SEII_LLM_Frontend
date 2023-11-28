import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8888'; 

  constructor(private http: HttpClient) {}

  public addUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/users/add`, body);
  }

  public getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }

  public updateUser(userId: number, username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.put<any>(`${this.apiUrl}/users/${userId}`, body);
  }

  public deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);
  }

  public verifyCredentials(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/users/verify`, body);
  }

  public addChatToUser(userId: number, chatContent: string[]): Observable<any> {
    const body = { user_id: userId, chat_content: chatContent };
    return this.http.post<any>(`${this.apiUrl}/chats/add`, body);
  }

  public updateChat(chatId: number, newChatContent: string[]): Observable<any> {
    const body = { new_chat_content: newChatContent };
    return this.http.put<any>(`${this.apiUrl}/chats/${chatId}`, body);
  }

  public getChatById(chatId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/chats/${chatId}`);
  }

  public getChatsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chats/user/${userId}`);
  }

  public setUserSettings(userId: number, darkMode: boolean, temperature: number, typingSpeed: number): Observable<any> {
    const body = { user_id: userId, dark_mode: darkMode, temperature, typing_speed: typingSpeed };
    return this.http.post<any>(`${this.apiUrl}/user_settings/add`, body);
  }

  public getUserSettings(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user_settings/${userId}`);
  }

  public setDarkMode(userId: number, darkMode: boolean): Observable<any> {
    const body = { dark_mode: darkMode };
    return this.http.put<any>(`${this.apiUrl}/user_settings/dark_mode/${userId}`, body);
  }

  public getDarkMode(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user_settings/dark_mode/${userId}`);
  }

  public setTemperature(userId: number, temperature: number): Observable<any> {
    const body = { temperature };
    return this.http.put<any>(`${this.apiUrl}/user_settings/temperature/${userId}`, body);
  }

  public getTemperature(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user_settings/temperature/${userId}`);
  }

  public setTypingSpeed(userId: number, typingSpeed: number): Observable<any> {
    const body = { typing_speed: typingSpeed };
    return this.http.put<any>(`${this.apiUrl}/user_settings/typing_speed/${userId}`, body);
  }

  public getTypingSpeed(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user_settings/typing_speed/${userId}`);
  }
}
