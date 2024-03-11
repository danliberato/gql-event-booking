FROM node:20.11-buster as builder

WORKDIR /workdir

RUN apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache openssl curl && \
    rm -rf /var/cache/apk/*

COPY package.json npm.lock tsconfig.json tsconfig.build.json magidoc.mjs ./

RUN npm install

COPY src/ src/

RUN npm build

RUN rm -f ~/.npmrc

#FROM node:18.18-alpine3.18 as production
FROM node:20.11-buster as production

ENV TZ=UTC

WORKDIR /app

COPY --from=builder /workdir/node_modules node_modules
COPY --from=builder /workdir/package.json package.json
COPY --from=builder /workdir/yarn.lock yarn.lock
COPY --from=builder /workdir/dist dist
COPY --from=builder /workdir/src src
COPY --from=builder /workdir/prisma prisma

EXPOSE 4000

CMD ["yarn", "start:prod"]