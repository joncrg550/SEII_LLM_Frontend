# Use the official NGINX image as a parent image
FROM nginx

# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom NGINX configuration file to the container
COPY default.conf /etc/nginx/conf.d/

# Expose ports
EXPOSE 80
EXPOSE 443