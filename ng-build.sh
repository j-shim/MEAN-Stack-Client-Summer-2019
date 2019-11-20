#!/usr/bin/env bash

if [ -d ../MEAN-Stack-Server-Summer-2019/public ]; then
  rm -r ../MEAN-Stack-Server-Summer-2019/public
fi

ng build --prod --output-path=dist/public && mv dist/public ../MEAN-Stack-Server-Summer-2019

exit 0
