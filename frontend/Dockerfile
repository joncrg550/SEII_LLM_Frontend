# Stage 1: Build the Angular app
FROM node:20 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:1.21-alpine

# Copy the built app from the previous stage to the Nginx folder
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Replace the default Nginx configuration with the one for Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
