#!/usr/bin/env python
import RPi.GPIO as GPIO
import time

# [Red, Green, Blue]
colors = [
[100,0,0],
[0,100,0],
[0,0,100],
[100,100,0],
[100,0,100],
[0,100,100],
# Add more colors below with [1, 2, 3] where 1 is the red duty cycle 2 is the Green duty cycle and 3 is the Blue duty cyle

]
timeBetweenColors = 0.5
pins = {'pin_R':11, 'pin_G':12, 'pin_B':13}  # pins is a dict

GPIO.setmode(GPIO.BOARD)       # Numbers GPIOs by physical location
for i in pins:
	GPIO.setup(pins[i], GPIO.OUT)   # Set pins' mode is output
	GPIO.output(pins[i], GPIO.HIGH) # Set pins to high(+3.3V) to off led

p_R = GPIO.PWM(pins['pin_R'], 2000)  # set Frequece to 2KHz
p_G = GPIO.PWM(pins['pin_G'], 2000)
p_B = GPIO.PWM(pins['pin_B'], 5000)

p_R.start(0)      # Initial duty Cycle = 0(leds off)
p_G.start(0)
p_B.start(0)

def setColor(col):
	p_R.ChangeDutyCycle(col[0])     # Change duty cycle
	p_G.ChangeDutyCycle(col[1])
	p_B.ChangeDutyCycle(col[2])

try:
	while True:
		for col in colors:
			setColor(col)
			time.sleep(timeBetweenColors)
except KeyboardInterrupt:
	p_R.stop()
	p_G.stop()
	p_B.stop()
	for i in pins:
		GPIO.output(pins[i], GPIO.HIGH)    # Turn off all leds
	GPIO.cleanup()

