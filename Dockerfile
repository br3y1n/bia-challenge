FROM node:20

ENV NEXT_PUBLIC_API="https://restcountries.com/v3.1"

WORKDIR /app

COPY . .

RUN yarn  && yarn build

EXPOSE 3000

CMD ["yarn", "start"]