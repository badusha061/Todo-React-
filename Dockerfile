FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY package.json . 

RUN npm install 


COPY . .

RUN npm run build

RUN npm install -g serve   

EXPOSE 5173

CMD [ "serve" , "-s" , "build" ]
