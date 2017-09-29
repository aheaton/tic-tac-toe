API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/${ID}}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{"game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    :over": "'"${OVER}"'"
  }
}'

echo

ID= TOKEN="BAhJIiU4NWZlN2FkZGZiMDFmYmZlMjM0ZWZiMjIxNTI4YThiYgY6BkVG--07533e7d8acf18344d7f477011cb798d3d8d9d10" INDEX=0 VALUE="x" OVER=false sh scripts/update-game-json.sh
