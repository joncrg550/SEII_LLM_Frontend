# Use the official PostgreSQL image as a parent image
FROM postgres:14

# Set environment variables for PostgreSQL
ENV POSTGRES_DB mydb
ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mypassword

# Copy the SQL initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/
