FROM nginx

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs
RUN npm install -g @ionic/cli
COPY ./muze-me /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN ionic build --prod
RUN cp -R /usr/src/app/www/* /usr/share/nginx/html

EXPOSE 80
