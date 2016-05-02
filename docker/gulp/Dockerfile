FROM node

WORKDIR /usr/src/app

RUN npm install --global gulp-cli \
 && npm install

ENTRYPOINT gulp watch
