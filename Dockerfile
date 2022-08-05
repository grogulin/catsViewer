# FROM node:ubuntu
# FROM --platform=linux/amd64 ubuntu
FROM --platform=linux/amd64 node:12.18.1
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./    
COPY start.sh ./  
RUN npm i

# add app
COPY . ./
# start app
# CMD start.sh
# CMD ["npm", "start"]
CMD ["pm2", "start", "app.js"]
