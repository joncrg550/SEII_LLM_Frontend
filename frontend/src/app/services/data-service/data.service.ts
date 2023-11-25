
import { Injectable } from '@angular/core';
import * as pgPromise from 'pg-promise';
import * as crypto from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pgp: any;
  private connection: any;

  constructor() {
    this.pgp = pgPromise();
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    const config = {
      host: 'localhost',
      port: 5432,
      database: 'SEII_LLM_Frontend',
      user: 'chatUser',
      password: 'chatPassword123!'
    };

    this.connection = this.pgp(config);

    try {
      await this.connection.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }

  public async addUser(username: string, password: string): Promise<number> {
    const hashedPassword = this.hashPassword(password);

    try {
      const result = await this.connection.one(
        'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING user_id',
        [username, hashedPassword]
      );
      return result.user_id;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }

  public async getUserById(userId: number): Promise<any> {
    try {
      const result = await this.connection.oneOrNone(
        'SELECT * FROM users WHERE user_id = $1',
        [userId]
      );
      return result;
    } catch (error) {
      console.error('Error retrieving user:', error);
      throw error;
    }
  }

  public async updateUser(userId: number, username: string, password: string): Promise<void> {
    const hashedPassword = this.hashPassword(password);

    try {
      await this.connection.none(
        'UPDATE users SET username = $1, password_hash = $2 WHERE user_id = $3',
        [username, hashedPassword, userId]
      );
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  private hashPassword(password: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }

  public async addChatToUser(userId: number, chatContent: string[]): Promise<number> {
    try {
      const result = await this.connection.one(
        'INSERT INTO chats (user_id, chat_content) VALUES ($1, $2) RETURNING chat_id',
        [userId, chatContent]
      );
      return result.chat_id;
    } catch (error) {
      console.error('Error adding chat to user:', error);
      throw error;
    }
  }

  public async updateChat(chatId: number, newChatContent: string[]): Promise<void> {
    try {
      await this.connection.none(
        'UPDATE chats SET chat_content = $1 WHERE chat_id = $2',
        [newChatContent, chatId]
      );
    } catch (error) {
      console.error('Error updating chat:', error);
      throw error;
    }
  }

  public async getChatById(chatId: number): Promise<any> {
    try {
      const result = await this.connection.oneOrNone(
        'SELECT * FROM chats WHERE chat_id = $1',
        [chatId]
      );
      return result;
    } catch (error) {
      console.error('Error retrieving chat:', error);
      throw error;
    }
  }

  public async getChatsByUser(userId: number): Promise<any[]> {
    try {
      const result = await this.connection.manyOrNone(
        'SELECT * FROM chats WHERE user_id = $1',
        [userId]
      );
      return result;
    } catch (error) {
      console.error('Error retrieving chats for user:', error);
      throw error;
    }
  }

  public async setUserSettings(userId: number, darkMode: boolean, temperature: number, typingSpeed: number): Promise<void> {
    try {
      await this.connection.none(
        'INSERT INTO user_settings (user_id, dark_mode, temperature, typing_speed) VALUES ($1, $2, $3, $4) ' +
        'ON CONFLICT (user_id) DO UPDATE SET dark_mode = $2, temperature = $3, typing_speed = $4',
        [userId, darkMode, temperature, typingSpeed]
      );
    } catch (error) {
      console.error('Error setting user settings:', error);
      throw error;
    }
  }

  public async getUserSettings(userId: number): Promise<any> {
    try {
      const result = await this.connection.oneOrNone(
        'SELECT * FROM user_settings WHERE user_id = $1',
        [userId]
      );
      return result;
    } catch (error) {
      console.error('Error retrieving user settings:', error);
      throw error;
    }
  }

  public async setDarkMode(userId: number, darkMode: boolean): Promise<void> {
    try {
      await this.connection.none(
        'INSERT INTO user_settings (user_id, dark_mode) VALUES ($1, $2) ' +
        'ON CONFLICT (user_id) DO UPDATE SET dark_mode = $2',
        [userId, darkMode]
      );
    } catch (error) {
      console.error('Error setting dark mode:', error);
      throw error;
    }
  }

  public async getDarkMode(userId: number): Promise<boolean> {
    try {
      const result = await this.connection.oneOrNone(
        'SELECT dark_mode FROM user_settings WHERE user_id = $1',
        [userId]
      );
      return result ? result.dark_mode : false;
    } catch (error) {
      console.error('Error retrieving dark mode:', error);
      throw error;
    }
  }

  public async setTemperature(userId: number, temperature: number): Promise<void> {
    try {
      await this.connection.none(
        'INSERT INTO user_settings (user_id, temperature) VALUES ($1, $2) ' +
        'ON CONFLICT (user_id) DO UPDATE SET temperature = $2',
        [userId, temperature]
      );
    } catch (error) {
      console.error('Error setting temperature:', error);
      throw error;
    }
  }

  public async getTemperature(userId: number): Promise<number> {
    try {
      const result = await this.connection.oneOrNone(
        'SELECT temperature FROM user_settings WHERE user_id = $1',
        [userId]
      );
      return result ? result.temperature : 1; // Assuming default value of 1
    } catch (error) {
      console.error('Error retrieving temperature:', error);
      throw error;
    }
  }

  public async setTypingSpeed(userId: number, typingSpeed: number): Promise<void> {
    try {
      await this.connection.none(
        'INSERT INTO user_settings (user_id, typing_speed) VALUES ($1, $2) ' +
        'ON CONFLICT (user_id) DO UPDATE SET typing_speed = $2',
        [userId, typingSpeed]
      );
    } catch (error) {
      console.error('Error setting typing speed:', error);
      throw error;
    }
  }

  public async getTypingSpeed(userId: number): Promise<number> {
    try {
      const result = await this.connection.oneOrNone(
        'SELECT typing_speed FROM user_settings WHERE user_id = $1',
        [userId]
      );
      return result ? result.typing_speed : 1; // Assuming default value of 1
    } catch (error) {
      console.error('Error retrieving typing speed:', error);
      throw error;
    }
  }

}

