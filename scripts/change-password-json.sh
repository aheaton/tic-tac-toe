#!/bin/bash

# ID=24 OLDPW=alicia NEWPW=heaton TOKEN=BAhJIiUxMzM0OWUzYWU4YjEwMjBjZjcwYTE5N2YyM2Y1MDNhYgY6BkVG--7d4697939166e77b4a158f0279fa5d2bb00b5bda sh scripts/change-password-json.sh

API="${API_ORIGIN:-http://httpbin.org}"
URL_PATH="/patch?id=${ID}"
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "passwords": {
      "old": "'"{$OLDPW}"'",
      "new": "'"{$NEWPW}"'"
    }
  }'

echo
