#! /bin/bash

node printPattern.js -s rectangle -p filled -d 7,7
echo ' '
node printPattern.js -s triangle -p filled -d 7,7
echo ' '
node printPattern.js -s diamond -p filled -d 7,7
echo ' '

node printPattern.js -s rectangle -p hollow -d 7,7
echo ' '
node printPattern.js -s triangle -p hollow -d 7,7
echo ' '
node printPattern.js -s diamond -p hollow -d 7,7
echo ' '

node printPattern.js -s rectangle -p alternating -d 7,7
echo ' '
node printPattern.js -s triangle -p alternating -d 7,7
echo ' '
node printPattern.js -s diamond -p alternating -d 7,7
echo ' '

node printPattern.js -s rectangle -p interlaced -d 7,7
echo ' '
node printPattern.js -s triangle -p interlaced -d 7,7
echo ' '
node printPattern.js -s diamond -p interlaced -d 7,7
echo ' '

node printPattern.js -s rectangle -p angled -d 7,7
echo ' '
node printPattern.js -s triangle -p angled -d 7,7
echo ' '
node printPattern.js -s diamond -p angled -d 7,7
echo ' '
