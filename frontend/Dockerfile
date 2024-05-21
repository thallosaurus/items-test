FROM node:latest as build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

CMD ["yarn", "dev"]