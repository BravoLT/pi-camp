on pi: raspivid -t 0 -o - | nc <laptop ip> 5001
on laptop: nc -l 5001 | mplayer -fps 31 -cache 1024 -
