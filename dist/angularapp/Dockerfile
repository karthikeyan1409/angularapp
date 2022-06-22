FROM node

WORKDIR /angularapp

COPY . .
RUN npm install -g http-server

EXPOSE 9999
ENTRYPOINT ["http-server", "--port", "9999"]