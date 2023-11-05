# Use the official Node.js runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Angular CLI
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Build the Angular app
RUN ng build 

# Expose port 80 for the Angular app
EXPOSE 80

# Run the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
