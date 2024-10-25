#!/bin/bash

DB_HOST=${POSTGRES_HOST:-db}
DB_PORT=${POSTGRES_PORT:-5432}

echo "Waiting for PostgreSQL at $DB_HOST:$POSTGRES_PORT..."

while ! nc -z $DB_HOST $POSTGRES_PORT; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

echo "PostgreSQL is up - executing command"
exec "$@"