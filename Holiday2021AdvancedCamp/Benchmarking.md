# Benchmarking the Raspberry Pi
---
The hardware in the Raspberry Pi determines how fast in runs.  How fast is it though? To answer that question, we must determine what to measure and how.

In this session, we will measure the performance of the Raspberry Pi's CPU (processing power), GPU (graphics power), and Storage (ability to move data around quickly).

## Measuring storage performance
---
This test will measure how fast files can be read or written to the Pi's storage. We will be running the fio and iozone programs and get a result.

The script to run is found in 
`https://github.com/geerlingguy/pi-cluster/blob/master/benchmarks/disk-benchmark.sh`

`sudo curl https://raw.githubusercontent.com/TheRemote/PiBenchmarks/master/Storage.sh | sudo bash`

Record the results.

## Measuring The Compute Power of the Raspberry Pi
---

For this test, we will use a tool called sysbench 3 times followed by providing a temperature reading.

Make sure the tool is installed with.

`sudo apt install -y sysbench`

`#!/bin/bash
clear
vcgencmd measure_temp
sysbench --num-threads=4 --test=cpu --cpu-max-prime=20000 run
vcgencmd measure_temp
sysbench --num-threads=4 --test=cpu --cpu-max-prime=20000 run 
vcgencmd measure_temp
sysbench --num-threads=4 --test=cpu --cpu-max-prime=20000 run
vcgencmd measure_temp`

This command will also work.

` sysbench --num-threads=8 --test=cpu --cpu-max-prime=20000 --validate run`

Memory speed is also an important aspect of performance.  Sysbench can look at this as well.

`sysbench memory run`

## Measuring the GPU performance of the Raspberry Pi
---

For the GPU, we will be using the preview of a tool called Geekbench 6.
`https://www.geekbench.com/preview/`


Run the command with `--compute Vulkan ` to attain the GPU benchmarks

## Extra :) 
If interested in more, there's more details including AI benchmarking here https://www.raspberrypi.com/news/benchmarking-raspberry-pi-5/

## Overclocking
---
The speed of the Raspberry Pi is determined by how fast it can run.  This speed is locked by what is called a clock.  We can change the CPU and GPU clock as well as the amount of power the chip is given.  Why is it important to increase the power, more speed with the same hardware always requires more power.

`sudo geany /boot/config.txt`

There is some documentation here on possible values `https://www.raspberrypi.com/documentation/computers/config_txt.html#overclocking`

**Do not set force_turbo as it may destroy the board**

**Also, only increase the values when there is a fan attached to the system**

Understand the current clock speed of the PI by typing `watch -n1 vcgencmd measure_clock arm`

Uncomment and change arm-freq value from 800 to 2000.
Note the default values for the Pi for are as follows:
`1500 or 1800 if arm_boost=1`

**Do not go higher than 2100 for this value**


`CPU/GPU core voltage adjustment. [-16,8] equates to [0.8V,1.4V] with 0.025V steps; in other words, specifying -16 will give 0.8V as the GPU/core voltage, and specifying 8 will give 1.4V. The default value is 0 (1.2V). Values above 6 are only allowed when force_turbo or current_limit_override are specified; this sets the warranty bit.`

over_voltage=6

We can also alter gpu clocks.  The default is 500 for all values. Changing gpu_freq will alter all of these values in one setting.  **Do not go higher than 675 here**

`core_freq, h264_freq, isp_freq, v3d_freq and hevc_freq``

gpu_freq=675

See `vcgencmd get_config` for other configurations

After setting values for the CPU and CPU, reboot the Raspberry Pi and see how much the values have changed.