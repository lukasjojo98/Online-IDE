FROM python:3.11-slim

WORKDIR /app

# Install Java and other needed packages
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk && \
    apt-get clean

# Copy and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app code
COPY . .

EXPOSE 5000

CMD ["python", "main.py"]