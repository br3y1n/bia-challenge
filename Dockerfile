FROM node:22

WORKDIR /app

COPY . .

RUN yarn  && yarn sync:envs --withCountryTarget=api && yarn build

EXPOSE 3000

CMD ["yarn", "start"]
