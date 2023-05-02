FROM nginx:1.21-alpine
RUN apk update && apk add nodejs npm
WORKDIR /app
COPY ./muze-me/www /app
RUN npm install
RUN npm run build --prod
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80