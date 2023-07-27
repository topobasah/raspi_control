#!/bin/bash

echo "stopping PID if exist..."
#sudo kill -9 `cat save_pid.txt`
sudo pkill -9 -f publish.py
sleep 1
echo "starting raspininja and Publish it to Public without saving the record ..."
nohup python3 /home/vdo/raspberry_ninja/publish.py --streamid zero02 --rpicam --width 1280 --height 720 --noqos --nored --noaudio --awb 1 --bright 53 --exposure 1 --server wss://wss.cobaterus.com:443 > /home/vdo/raspi_control/raspi.log 2>&1 & echo $! > /home/vdo/raspi_control/save_pid.txt
sleep 2
echo "raspininja started"

exit
