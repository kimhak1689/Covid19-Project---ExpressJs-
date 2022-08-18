FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 3001
CMD yarn start