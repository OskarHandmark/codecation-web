FROM node:9-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm rebuild
RUN npm install
RUN npm run build

EXPOSE 5000

CMD  ./node_modules/.bin/serve -s build