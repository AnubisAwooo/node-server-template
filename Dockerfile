FROM node:slim

RUN npm install -g pnpm

WORKDIR /app

COPY ./tsconfig.json /app/
COPY ./package.json /app/

RUN pnpm i

COPY ./src/ /app/src/

EXPOSE 8080

VOLUME ["/app/logs"]

CMD pnpm run start
