# Use the official Python image
FROM python:3.9

# Set working directory in the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the Flask application source code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 8888

# Command to run the Flask application
CMD ["python", "app.py"]
