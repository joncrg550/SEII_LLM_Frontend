
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
}

//TODO add logic for retrieving storing and retrieving chats and user settings on the database
