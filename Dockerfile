FROM node:16.14.2  as build
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force && npm config get proxy && npm config rm proxy && npm config rm https-proxy && npm config set registry http://registry.npmjs.org/
RUN npm install
COPY . .
RUN npm run build
ENV NG_CLI_ANALYTICS=false
COPY . .
EXPOSE 80
# CMD ["npm","run","prod"]

FROM nginx:latest
COPY --from=build /app/www /usr/share/nginx/html
