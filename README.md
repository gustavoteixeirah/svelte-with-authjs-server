ORIGIN=http://localhost:5173 NODE_ENV=development APP_ENV=local node  ./src/server.js


https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/


https://opentelemetry.io/docs/instrumentation/js/exporters/


docker run --rm \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 9411:9411 \
  jaegertracing/all-in-one:latest
