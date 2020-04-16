FROM node:10
WORKDIR ./src/app
COPY package*.json ./
COPY ./src/app/*   ./
RUN npm install
RUN apt-get update; apt-get install -y vim tmux

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 8080
CMD ["node", "server.js" ]
