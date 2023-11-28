# Use the official PostgreSQL image as a parent image
FROM postgres:14

# Set environment variables for PostgreSQL
ENV POSTGRES_DB SEII_LLM_Frontend
#ENV POSTGRES_USER chatUser
ENV POSTGRES_PASSWORD chatPassword123 #factor out to secret file

# Copy the SQL initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/
