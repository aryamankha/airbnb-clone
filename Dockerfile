FROM node:16-alpine

WORKDIR /app

COPY package.json .

CMD npm install && npm run dev 

EXPOSE 3005

