#!/bin/bash

echo "restarting raspininja ..."
sudo kill -9 `cat /home/vdo/raspi_control/save_pid.txt`
sleep 2
sh /home/vdo/raspi_control/./start-raspi.sh
sleep 3
echo "raspininja is started."

exit
