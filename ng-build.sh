#!/usr/bin/env bash

if [ -d ../MEAN-Stack-Server-Summer-2019/public ]; then
  rm -r ../MEAN-Stack-Server-Summer-2019/public
fi

# Make sure there is nothing to commit on the server folder before running the line below
ng build --prod --output-path=dist/public && mv dist/public ../MEAN-Stack-Server-Summer-2019 && cd ../MEAN-Stack-Server-Summer-2019 && git add --all && git commit -m "Update public/" && git push && git push heroku master

exit 0
