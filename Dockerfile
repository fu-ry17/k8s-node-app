FROM node:20-alpine

WORKDIR /app

RUN npm i -g pnpm@latest

COPY package*.json .

RUN pnpm install

COPY . .

RUN pnpm build

CMD [ "pnpm", "start" ]
