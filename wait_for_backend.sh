echo "Attente initiale de 20 secondes pour stabiliser le réseau Docker..."
sleep 10

until nc -z -v -w30 backend 8000
do
  echo "En attente du backend..."
  sleep 5
done

echo "Backend prêt, démarrage de Nginx"
nginx -g 'daemon off;'
