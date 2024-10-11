# # Stage 0
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# RUN npm run build
# # Stage 1
# FROM node:latest
# COPY --from=build-stage /app/ /usr/src
# WORKDIR /usr/src/
# RUN npm install -g serve
# EXPOSE 3000
# CMD ["serve", "-s", "build", "-l", "3000"]

# => Build container
# from 是从某个基础镜像开始
FROM node:21-alpine3.18 as builder 

# 当前目录
WORKDIR /app

RUN apk update && apk add --no-cache python3 py3-pip make git build-base perl 
# RUN npm uninstall node-sass && npm install node-sass --sass-binary-name=linux-x64-57

COPY package*.json /app/

RUN npm cache clean --force

# copy 当前全部文件
COPY . .

ENV GENERATE_SOURCEMAP=false
RUN npm install
RUN npm run build


# => Run container
FROM nginx:1.20-alpine

# Nginx config
ARG ENV_TYPE=ST
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /app/dist /usr/share/nginx/html/
EXPOSE 3000
# Add bash
RUN apk add --no-cache bash

# Start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]