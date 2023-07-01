#!/bin/bash
cd ~
sudo docker stop ionic-todolist || true
sudo docker image rm ahmadoubamba/ionic-todolist 
sudo docker pull ahmadoubamba/ionic-todolist:latest
sudo docker-compose -p ionic-todolist up -d