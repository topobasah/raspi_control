#!/bin/bash

echo "stopping raspininja..."
#sudo kill -9 `cat save_pid.txt`
sudo pkill -9 -f publish.py
sleep 2
echo "raspininja stopped"
exit
