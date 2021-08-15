#it would be really neat take their image and map it as a texture on a surface in game
#maybe look at adding code that will create a unique filename so
#we can save more than one

from mcpi.minecraft import Minecraft
from picamera import PiCamera
from time import sleep

mc = Minecraft.create()
camera = PiCamera()

mc.postToChat("Let's get ready to take a photo!")
mc.postToChat("Find the photobooth!")

while True:
	#code that is going to be used temporarilty to find trigger coordinates
	x,y,z = mc.player.getPos()
	mc.postToChat((x,y,z))
	
	#code that will be used after we know what the coords, test data used
	x,y,z = mc.player.getPos()
	sleep(3)
	
	if x >= 10.5 and y == 9.0 and z == -44.3:
		mc.postToChat("You are in the photobooth!")
		sleep(1)
		mc.postToChat("Smile!")
		sleep(1)
		camera.start_preview()
		sleep(2)
		camera.capture('JW-selfie.jpg')
		camera.stop_preview()
		
	sleep(3)

