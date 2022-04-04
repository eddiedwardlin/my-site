FROM node:16
WORKDIR
COPY package.json .
RUN npm update
RUN npm install
COPY ..
EXPOSE 3000
COPY tsconfig.json .
CMD npm start