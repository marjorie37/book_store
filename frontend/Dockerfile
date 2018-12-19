FROM node:11.4.0-alpine

RUN mkdir -p /srv/app/docker-bookstore-frontend

WORKDIR /srv/app/docker-bookstore-frontend

COPY package.json /srv/app/docker-bookstore-frontend
COPY package-lock.json /srv/app/docker-bookstore-frontend

RUN npm install

COPY . /srv/app/docker-bookstore-frontend


CMD ["npm", "start"]