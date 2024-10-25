FROM python:3.9.13-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    curl \
    bash \
    dash \
    netcat \
    && rm -rf /var/lib/apt/lists/* 

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY ./wait_for_db.sh /app/
RUN chmod +x /app/wait_for_db.sh

COPY . /app/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

EXPOSE 8000
