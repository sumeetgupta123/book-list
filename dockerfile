FROM node:12.14.1-alpine as node
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=node /app/dist/books-list /usr/share/nginx/html