-- Create the database for users, chats, and settings
CREATE DATABASE SEII_LLM_Frontend;


-- Connect to the newly created database
\c SEII_LLM_Frontend;

-- Create a table for users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(100) NOT NULL
);

-- Create a table for chats
CREATE TABLE chats (
    chat_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    chat_content TEXT[]
);

-- Create a table for user settings
CREATE TABLE user_settings (
    user_id INT REFERENCES users(user_id),
    temperature INT CHECK (temperature >= 1 AND temperature <= 5),
    typing_speed INT CHECK (typing_speed >= 1 AND typing_speed <= 5),
    PRIMARY KEY (user_id)
);
