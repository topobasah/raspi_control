"use strict";
var http = require("http");
var express = require("express");

var app = express();

var path = require("path");

const port = 3000;

var server = http.createServer(app);

const {spawn} = require("child_process");
const {exec} =require("child_process");

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get('/start', function(req, res){
//	exec('sudo systemctl start raspininja.service', function(error, stdout, stderr) {
	exec('sh /home/vdo/raspi_control/./start-raspi.sh', function(error, stdout, stderr) {
		if (error) {
			console.log(error);
		} else {
			console.log(stdout);
			res.redirect('/');
		}
	});
});

app.get('/start-save', function(req, res){
//      exec('sudo systemctl start raspininja.service', function(error, stdout, stderr) {
        exec('sh /home/vdo/raspi_control/./start-save.sh', function(error, stdout, stderr) {
                if (error) {
                        console.log(error);
                } else {
                        console.log(stdout);
                        res.redirect('/');
                }
        });
});

app.get('/night', function(req, res){
//      exec('sudo systemctl start raspininja.service', function(error, stdout, stderr) {
        exec('sh /home/vdo/raspi_control/./night-start.sh', function(error, stdout, stderr) {
                if (error) {
                        console.log(error);
                } else {
                        console.log(stdout);
                        res.redirect('/');
                }
        });
});

app.get('/night-save', function(req, res){
//      exec('sudo systemctl start raspininja.service', function(error, stdout, stderr) {
        exec('sh /home/vdo/raspi_control/./night-save.sh', function(error, stdout, stderr) {
                if (error) {
                        console.log(error);
                } else {
                        console.log(stdout);
                        res.redirect('/');
                }
        });
});

app.get('/restart', function(req, res){
	exec('sudo systemctl restart raspininja.service', function(error, stdout, stderr) {
		if (error) {
			console.log(error)
		} else {
			console.log(stdout);
			res.redirect('/');
		}
	});
});

app.get('/stop', function(req, res){
//	exec('sudo systemctl stop raspininja.service', function(error, stdout, stderr) {
	exec('sh /home/vdo/raspi_control/./stop-raspi.sh', function(error, stdout, stderr) {
		console.log(stdout);
		res.redirect('/');
	});
});

app.get('/reboot', function(req, res){
	exec('sudo reboot', function(error, stdout, stderr) {
		console.log(stdout);
		res.redirect('https://cobaterus.com');
	});
});

app.get('/shutdown', function(req, res){
	exec('sudo shutdown -h now', function(error, stdout, stderr){
		console.log(stdout);
		res.redirect('https://cobaterus.com');
	});
});

app.get('/pub', function(req, res){
	exec('sh /home/vdo/raspi_control/./pub.sh', function(error, stdout, stderr) {
		if (error) {
			console.log(error);
		} else {
			console.log(stdout);
			res.redirect('/');
		}
	});
});

server.listen(port, () => {
	app.use('/', express.static(path.join(__dirname, './serve/')));
	console.log(`Server running on port ${port}`);
});
