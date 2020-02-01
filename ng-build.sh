#!/usr/bin/env bash

# if [ -d ../MEAN-Stack-Server-Summer-2019/public ]; then
#   rm -r ../MEAN-Stack-Server-Summer-2019/public
# fi

# # Make sure there is nothing to commit on the server folder before running the line below
# ng build --prod --output-path=dist/public && mv dist/public ../MEAN-Stack-Server-Summer-2019 && cd ../MEAN-Stack-Server-Summer-2019 && git add --all && git commit -m "Update public/" && git push && git push heroku master



# The script above is used for deploying to Heroku

# The script below is used for deploying to AWS EC2

if [ -d dist/mean-client ]; then
  echo "Removing ./dist/mean-client ..."
  rm -r dist/mean-client
fi

ng build --prod
# Copy html file for naver.com search
cp src/naver0f52cb6e62bd6cace71789ba5293e137.html dist/mean-client
echo "Next step: Run awsscp ..."