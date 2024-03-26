______________________________________________________
# MicroWatch - A advanced watch program for Micro:Bit ⌚
______________________________________________________

Have you ever wished for a Unique, Advanced Micro:Bit watch? well, if you did now you have one! Introducing MicroWatch!

______________________________________________________
# Compatiblity ⚙️

This program uses bluetooth, and other stuff that works with Micro:Bit V2. so, the program can run only in V2 Micro:Bit's only. Sorry!
______________________________________________________
# Installation 💿

Download the hex file from https://github.com/FearlessAdam/MicroWatch/releases/ and flash it your Micro:Bit. You will see a Loading Screen on your Micro:Bit after you flash the hex file.
______________________________________________________
# How to use 📖

1. Press button A to change the Hours.
2. Press Button B to change Minutes.
3. Shake to see the current time.
4. Press The Logo to play a game.
5. Long press the logo to stop the game.

Connect the Micro:Bit with this program running to your PC and open the serial for More Information.
______________________________________________________
# Using with USB Serial on PC

1. Install Tera Term. (At the time of writting Version 5 is the latest.)
2. Click File > New Connection > serial > And select the port of your Micro:Bit, and use these settings:

 -Speed: 115200

 -Data: 8Bit

 -Parity: None

 -Stop Bits: 1

 -Flow Control: None
______________________________________________________
# Input Commands using Serial.

To input data using serial follow the step given above and then click Control > Broadcast Command. Disable Realtime Mode then enable the following settings:

-Send to this Process Only

-Enter Key

Then enable The 'LF' option. after that, Type your command ie. Hour=<Hours> or Min=<Minutes> and click submit button.
______________________________________________________
# Connecting with Bluetooth (For Phones)

refer this article: https://support.microbit.org/support/solutions/articles/19000062330-using-the-micro-bit-bluetooth-low-energy-uart-serial-over-bluetooth-
______________________________________________________
# Input Commands Using Bluetooth (For Phones)

-Open the SerialBluetoothTerminal on your mobile

-Connect your Micro:Bit to the app

After that, Type your command ie. Hour=<Hours> or Min=<Minutes> On the text box then click the Send button.
______________________________________________________
# Note ❗

Keep in mind that the program is Beta so, you may occur crashes as well.
______________________________________________________
# Conclusion 🏳️

Anyone if welcomed to imporve the program. you can fork this project and improve/add more features in your style! Keep in mind you are not allowed to steal this project. Have fun!
______________________________________________________
