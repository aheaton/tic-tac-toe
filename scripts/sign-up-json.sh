#!/bin/bash

# put this in console to test request: EMAIL="alicia@test.com" PASSWORD="test" PASSWORD="test" sh scripts/sign-up-json.sh
#And this was the response: {"user":{"id":879,"email":"alicia@test.com"}}

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"{$PASSWORD}"'",
      "password_confirmation": "'"{$PASSWORD}"'"
    }
  }'

echo
