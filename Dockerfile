# Utiliser une image de base Node pour construire les assets React
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Utiliser une image de base Python pour l'application Django
FROM python:3.8
WORKDIR /djangoapp
COPY --from=build-stage /app/build /djangoapp/reactapp/build
COPY requirements.txt /djangoapp/
RUN pip install -r requirements.txt
COPY . /djangoapp/

# Configurer les commandes pour démarrer l'application Django
CMD ["gunicorn", "-b", "0.0.0.0:8000", "myproject.wsgi:application"]
