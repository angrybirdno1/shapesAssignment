#! /bin/bash

node printPattern.js -s rectangle -p filled -d 5,5
echo ' '
node printPattern.js -s triangle -p filled -d 5,5
echo ' '
node printPattern.js -s diamond -p filled -d 5,5
echo ' '

node printPattern.js -s rectangle -p hollow -d 5,5
echo ' '
node printPattern.js -s triangle -p hollow -d 5,5
echo ' '
node printPattern.js -s diamond -p hollow -d 5,5
echo ' '

node printPattern.js -s rectangle -p alternating -d 5,5
echo ' '
node printPattern.js -s triangle -p alternating -d 5,5
echo ' '
node printPattern.js -s diamond -p alternating -d 5,5
echo ' '

node printPattern.js -s rectangle -p interlaced -d 5,5
echo ' '
node printPattern.js -s triangle -p interlaced -d 5,5
echo ' '
node printPattern.js -s diamond -p interlaced -d 5,5
echo ' '

node printPattern.js -s rectangle -p angled -d 5,5
echo ' '
node printPattern.js -s triangle -p angled -d 5,5
echo ' '
node printPattern.js -s diamond -p angled -d 5,5
echo ' '
