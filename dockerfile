# Base Node.js image to use.
FROM node:11-alpine

# Install app dependencies.
COPY package.json package-lock.json ./
RUN npm i

# Copy our app.
COPY . $APP_DIR

# Transpile the .ts to .js
RUN npm build

# Starts the service.
CMD npm start
