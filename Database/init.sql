-- Create a sample table
CREATE TABLE IF NOT EXISTS mytable (
    id serial PRIMARY KEY,
    name VARCHAR (255) NOT NULL
);

-- Insert some sample data
INSERT INTO mytable (name) VALUES
('John'),
('Jane'),
('Alice');
