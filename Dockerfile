FROM node:14-alpine
RUN npm install --global npm@6.14.4
RUN apk add git
