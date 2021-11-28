# IR - Making your own universal remote

For this module, we are going to see what is going on behind the scenes when you click a button on a remote control.

From https://wonderopolis.org/wonder/how-does-a-remote-control-work we know that IR signals require line-of-sight to work.  This means that if there is something in the way of the transmitter and receiver, the signal will not get through.

We are going to capture IR signals from a remote control and program into our own 'IR Blaster'.   The IR Blaster will transimit whatever code we want.

## Finding a transmitter and receiver 
---
Point the remote at the light and try some of the buttons.  Look at the remote and at the light closely.  Try to find something that looks like a small light bulb on both the remote and on the light.  On the remote, there is an IR transmitter and on the light there is an IR reciever.  If either of these are blocked, the communcation will not work.

## Programming a 'learning' remote

All keys on the Andernic RRST01 are leanable

This method does is how to program individual buttons.
1. Press and hold the HULU & OK keys simultaneously for about 5 seconds; indicator light will illuminate brighter and remain bright. Release the keys.
2. Point the original remote control head-to-head with the RRST01.2, aligning top edges at about 1-2 inches apart (both remotes should be pointing at each other).
3. On the RRST01.2, Press and release the first key to be learned, the indicator light will now flash slowly.
4. On the original remote, press and hold the key that you want to learn to the corresponding key previously pressed on the RRST01.2. The indicator light will flash three times to confirm and then remain on, waiting for the next key to learn.
5. Repeat steps 2-4 to learn other keys.
6. Press AMAZON & OK keys simultaneously to save and exit, otherwise remote will exit automatically after 20 seconds

## Capturing the output of a remote
---
The same remote can send different information.  This is pretty easy to see.  There are differented keys on the remote and they cause different things to happen. The data that is transmitted isn't so clear.  Check ou this site for an example http://www.remotecentral.com/cgi-bin/mboard/rc-discrete/thread.cgi?5780 . This remote is completely undocumented.  In order to know what it is sending, we need something to capture the signal.  The IR Blaster (the black hockey puck looking thing) will let us know what data it recieves.  It has both an IR transmitter and reciever.  Go to the URL, this will show the signals as they pass by.

## Sending the output as input
---
Grab the IR data as transmitted.  There are a few ways to send IR signals with this device.  We will use the irsend command.  The same commands that are recieved can be pasted into the irsend command to broadcast the IR signal.

## Finding you own commands
---
Examine a few of the commands that are sent through to the IR Blaster.  Is there a pattern to them?  Do you think you could find ways to make colors that are not part of the remote control's exiting buttons.  See what combinations you can create in order to make the light do what you want it to do.