FROM node:14-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN ls

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM node:14

# WORKDIR /app

# COPY ["package.json", "package-lock.json", "./"]

# RUN npm install 

# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]
