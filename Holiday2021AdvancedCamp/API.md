# Making remote API calls

What is an API call anyway?  API calls are used to perform an action on a remote host or service and, usually, check the result.  
[comment]: <> (We could take this oppurtunity to do a ELI5 of what HTTP is.  Tech nomenclature can be scary sometimes.)
This can be performed in multiple ways.  On common way through HTTP calls.  The most common way to make an HTTP call is through a web browser.  We will examine these calls in a web browser and expand the calls in a few ways. 

## Seeing an API call in action in the web browser
---
[comment]: <> (I do not feel eveyone will understand what we mean by "hamburger".  Readmes allow for us to call call picures/gifs.  Perhaps we can include a pic of what the icon looks like, or have a gif showing them how to click the icon, go to "more tools", then "dev tools")
Modern websites are made up of calls to static resources such as images and API calls to gather data.  This can be seen by using a brower's developer mode. Hamburger -> More Tools -> Developer Tools and click Fetch/XHR.  What is listed there are the API calls that pull in data from another source.

## Seeing an API call in action in the command line
---
Find one call that you would like to run again.  Right click -> Copy -> Copy as cURL.  
This should put something like this in your clipboard

    curl 'https://slashdot.org/ajax.pl?op=nel' \
      -X 'POST' \
      -H 'authority: slashdot.org' \
      -H 'content-length: 0' \
      -H 'sec-ch-ua: "Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"' \
      -H 'accept: */*' \
      -H 'dnt: 1' \
      -H 'x-requested-with: XMLHttpRequest' \
      -H 'sec-ch-ua-mobile: ?0' \
      -H 'user-agent: Mozilla/5.0 (X11; CrOS x86_64 14150.87.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.124 Safari/537.36' \
      -H 'sec-ch-ua-platform: "Chrome OS"' \
      -H 'origin: https://slashdot.org' \
      -H 'sec-fetch-site: same-origin' \
      -H 'sec-fetch-mode: cors' \
      -H 'sec-fetch-dest: empty' \
      -H 'referer: https://slashdot.org/' \
      -H 'accept-language: en-US,en;q=0.9' \
      --compressed

Then open the terminal application and paste the copied call into the terminal window.  It will run the call just like the web browser did.

## Triggering actions
---

Triggering an action on a network takes some kind of agreement between the sender and receiver of a message.  The receiver needs to define a set of commands and the sender needs to send the apropriate command.

We have a set of light bulbs running the tasmota open source firmware.  Try these commands out.

`http://<ip>/cm?cmnd=Power%20TOGGLE
http://<ip>/cm?cmnd=Power%20On
http://<ip>/cm?cmnd=Power%20off
`
[comment]: <> (excaped should be escaped.  we could also do another quick ELI5 on what we mean by escaping)
What is going on here?  The API call uses request parameters that are excaped in a special way so that they can be sent.  There are multiple agreements going on here.  The commands have to be sent in an escaped format.  In this format,  %20 is a space.  The acutal command for line one is 'Power toggle'.  That is the command that will toggle power in the command line of tasmota.

See if you can find the url to run this command:

    backlog color 1; scheme 4; speed 3;

Or this one

    color1 0000003897

Use the tool here to find the URL escaping of the command https://meyerweb.com/eric/tools/dencoder/.


## Finding your own commands
---

There are a massive number of commands that can be run on these smart light bulbs.  The list of them is here https://tasmota.github.io/docs/Commands/.

Try figuring out how to do more than just change the color of the bulb.  What other options are there?  For some more intresting options, try using the WebSend command to send commands from one light bulb to another.  How about setting the light to turn on under a schedule?