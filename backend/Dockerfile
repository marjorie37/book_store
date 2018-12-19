FROM node:11.4.0-alpine

RUN mkdir -p /srv/app/docker-bookstore-backend
WORKDIR /srv/app/docker-bookstore-backend

COPY package.json /srv/app/docker-bookstore-backend
COPY package-lock.json /srv/app/docker-bookstore-backend

RUN npm install

COPY . /srv/app/docker-bookstore-backend

EXPOSE 3000

CMD ["npm", "start"]