FROM node:16.13.1-alpine

RUN apk --no-cache add dumb-init
RUN mkdir -p /usr/app/src
WORKDIR /usr/app/src
COPY --chown=node:node ./package*.json ./
RUN yarn install
COPY --chown=node:node . .