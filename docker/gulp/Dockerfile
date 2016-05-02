FROM node

WORKDIR /usr/src/app

RUN cd /usr/src/app \
 && npm install --global gulp-cli \
 && npm install

ENTRYPOINT gulp watch
