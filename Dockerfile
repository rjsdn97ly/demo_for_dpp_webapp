FROM node:18
 
WORKDIR /svelte-app
 
COPY . .

RUN npm install
 
RUN npm run build
 
EXPOSE 3000

CMD ["node", "build"]