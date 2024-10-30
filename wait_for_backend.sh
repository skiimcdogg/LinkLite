# start-nginx.sh
#!/bin/sh
# Attendre que le backend soit prêt
until nc -z -v -w30 backend 8000
do
  echo "En attente du backend..."
  sleep 5
done

echo "Backend prêt, démarrage de Nginx"
nginx -g 'daemon off;'
