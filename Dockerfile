FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source, but its better to copy the specific folder and files needed
COPY . .

# Set NODE_ENV
ENV NODE_ENV production
EXPOSE 3000
CMD [ "node", "app.js" ]