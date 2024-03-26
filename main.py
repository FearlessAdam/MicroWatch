def on_logo_long_pressed():
    global gameoption, newly1
    if noDo == 0:
        basic.pause(1000)
        game.set_score(0)
        player.delete()
        asteroid.delete()
        astroid2.delete()
        gameoption = 0
        newly1 = 0
        game.pause()
        basic.clear_screen()
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    global noexecute, hour
    if noDo == 0:
        if gameoption == 24:
            noexecute = 4
        elif gameoption == 12:
            noexecute = 30
        else:
            hour += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def DoLoad():
    global noDo, randNum1, randdiv, mkae1
    microVersion = control.hardware_version()
    if microVersion == "1":
        basic.show_string("Incompatible MicroBit!")
        basic.pause(4000)
        control.panic(668)
    bluetooth.start_uart_service()
    bluetooth.set_transmit_power(8)
    serial.set_baud_rate(BaudRate.BAUD_RATE115200)
    music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    noDo = 1
    randNum1 = randint(8, 18)
    randdiv = randNum1 * 1000
    serial.write_line("Loading..")
    basic.show_leds("""
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        """)
    serial.write_line("Starting bluetooth..")
    basic.pause(randdiv / 2.5)
    basic.show_leds("""
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        """)
    basic.pause(randdiv / 2.5)
    basic.show_leds("""
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        """)
    serial.write_line("Loading Modules..")
    basic.pause(900)
    serial.write_line("ModuleLoad: Done")
    basic.pause(randdiv / 2.5)
    basic.show_leds("""
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        """)
    basic.pause(randdiv / 2.5)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    serial.write_line("Setting Transmit Power..")
    basic.show_icon(IconNames.YES)
    mkae1 = randdiv / 2.5 * 4
    basic.pause(100)
    serial.write_line("Finalizing Boot..")
    basic.pause(100)
    serial.write_line("Took " + ("" + str(mkae1)) + " ms to load")
    basic.pause(100)
    serial.write_line("----------------------------------------------------------")
    basic.pause(100)
    serial.write_line("MicroWatch 1.2/Beta Running on Micro:bit \"" + control.device_name() + "\"")
    basic.pause(100)
    serial.write_line("The Current Time may not be correct. Use the A button to set hours and Button B to set Minutes")
    basic.pause(100)
    serial.write_line("You can change the time by connecting the micro:bit via bluetooth/serial to your device and send \"Hours=<the hour>\" to change the hour and \"Min=<the minutes>\"")
    basic.pause(100)
    serial.write_line("----------------------------------------------------------")
    basic.pause(100)
    serial.write_line("Warning: Note that the program is beta so, you may occur crashes.")
    music.stop_all_sounds()
    basic.pause(900)
    music.play(music.builtin_playable_sound_effect(soundExpression.hello),
        music.PlaybackMode.UNTIL_DONE)
    noDo = 0
    basic.clear_screen()

def my_function():
    global noexecute
    if noDo == 0:
        if gameoption == 24:
            noexecute = 56
        elif gameoption == 12:
            noexecute = 99
        else:
            basic.show_string("Heat" + ":" + ("" + str(input.temperature())) + "C")
buttonClicks.on_button_held(buttonClicks.AorB.B, my_function)

def on_button_pressed_b():
    global noexecute, minute
    if noDo == 0:
        if gameoption == 24:
            noexecute = 6
        elif gameoption == 12:
            noexecute = 6
        else:
            minute += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global noexecute
    if noDo == 0:
        if gameoption == 24:
            noexecute = 8
        elif gameoption == 12:
            noexecute = 60
        else:
            basic.show_string(time)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    global noexecute, newly1, gameoption
    if noDo == 0:
        basic.pause(1000)
        game.set_score(0)
        if newly1 == 12:
            noexecute = 43
        else:
            newly1 = 12
            gameoption = 24
            basic.pause(30)
            gameoption = 12
            game.resume()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def my_function2():
    global noexecute
    if noDo == 0:
        if gameoption == 24:
            noexecute = 58
        elif gameoption == 12:
            noexecute = 69
        else:
            basic.show_string(scores)
buttonClicks.on_button_held(buttonClicks.AorB.A, my_function2)

runningstatus = 0
SerialBSubNum = 0
SerialB = ""
BleBSubNum = 0
Bleb = ""
xAcceleration = 0
SerialASubNum = 0
SerialA = ""
BleASubNum = 0
BleA = ""
scores = ""
time = ""
minute = 0
mkae1 = 0
randdiv = 0
randNum1 = 0
hour = 0
noexecute = 0
newly1 = 0
gameoption = 0
astroid2: game.LedSprite = None
noDo = 0
player: game.LedSprite = None
asteroid: game.LedSprite = None
laser: game.LedSprite = None
second = 0
noDo2 = 0
randNum12 = 0
randdiv2 = 0
DoLoad()
delay = 500

def on_every_interval():
    global minute
    minute += 1
loops.every_interval(60000, on_every_interval)

def on_forever():
    global scores
    if noDo == 0:
        scores = "Score:" + ("" + str(game.score()))
basic.forever(on_forever)

def on_forever2():
    global hour, minute, time
    if noDo == 0:
        if hour == 24:
            hour = 0
        elif minute == 60:
            minute = 0
            hour += 1
    time = "" + str(hour) + ":" + ("" + str(minute))
basic.forever(on_forever2)

def on_forever3():
    global BleA, BleASubNum, hour
    BleA = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
    BleASubNum = parse_float(BleA.substr(5, 8))
    if BleA.includes("Hour="):
        if BleASubNum < 25:
            hour = BleASubNum
            serial.write_line("The Hour is set to " + str(hour) + " Via Bluetooth serial Input.")
basic.forever(on_forever3)

def on_forever4():
    global SerialA, SerialASubNum, hour
    SerialA = serial.read_until(serial.delimiters(Delimiters.NEW_LINE))
    SerialASubNum = parse_float(SerialA.substr(5, 8))
    if SerialA.includes("Hour="):
        if SerialASubNum < 25:
            hour = SerialASubNum
            serial.write_line("The Hour is set to " + str(hour) + " Via serial Input.")
basic.forever(on_forever4)

def on_forever5():
    global player
    if noDo == 0:
        if gameoption == 24:
            player = game.create_sprite(2, 4)
basic.forever(on_forever5)

def on_forever6():
    global xAcceleration, noexecute
    if noDo == 0:
        if gameoption == 24:
            xAcceleration = input.acceleration(Dimension.X)
            if xAcceleration < -150 and player.get(LedSpriteProperty.X) > 0:
                player.change(LedSpriteProperty.X, -1)
            elif xAcceleration > 150 and player.get(LedSpriteProperty.X) < 4:
                player.change(LedSpriteProperty.X, 1)
            basic.pause(50)
        elif gameoption == 12:
            xAcceleration = input.acceleration(Dimension.X)
            if xAcceleration < -150 and player.get(LedSpriteProperty.X) > 0:
                player.change(LedSpriteProperty.X, -1)
            elif xAcceleration > 150 and player.get(LedSpriteProperty.X) < 4:
                player.change(LedSpriteProperty.X, 1)
            basic.pause(50)
        else:
            noexecute = 12
basic.forever(on_forever6)

def on_forever7():
    global Bleb, BleBSubNum, minute
    Bleb = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
    BleBSubNum = parse_float(Bleb.substr(4, 7))
    if Bleb.includes("Min="):
        if BleBSubNum < 61:
            minute = BleBSubNum
            serial.write_line("The Minute is set to " + str(minute) + " Via Bluetooth serial Input.")
basic.forever(on_forever7)

def on_forever8():
    global SerialB, SerialBSubNum, minute
    SerialB = serial.read_until(serial.delimiters(Delimiters.NEW_LINE))
    SerialBSubNum = parse_float(SerialB.substr(4, 7))
    if SerialB.includes("Min="):
        if SerialASubNum < 61:
            minute = SerialBSubNum
            serial.write_line("The Minute is set to " + str(minute) + " Via serial Input.")
basic.forever(on_forever8)

# asteroid movement

def on_forever9():
    global astroid2, gameoption, newly1
    if noDo == 0:
        if gameoption == 24:
            astroid2 = game.create_sprite(Math.random_range(0, 5), 0)
            while astroid2.get(LedSpriteProperty.Y) < 4:
                astroid2.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if laser != None and laser.is_touching(astroid2):
                    astroid2.delete()
                    laser.delete()
            if player.is_touching(astroid2):
                gameoption = 0
                newly1 = 0
                game.set_score(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clear_screen()
            else:
                astroid2.delete()
                game.add_score(1)
        elif gameoption == 12:
            astroid2 = game.create_sprite(Math.random_range(0, 5), 0)
            while astroid2.get(LedSpriteProperty.Y) < 4:
                astroid2.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if laser != None and laser.is_touching(astroid2):
                    astroid2.delete()
                    laser.delete()
            if player.is_touching(astroid2):
                gameoption = 0
                newly1 = 0
                game.set_score(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clear_screen()
            else:
                astroid2.delete()
                game.add_score(1)
basic.forever(on_forever9)

def on_forever10():
    global asteroid, gameoption, newly1
    if noDo == 0:
        if gameoption == 24:
            asteroid = game.create_sprite(Math.random_range(0, 5), 0)
            while asteroid.get(LedSpriteProperty.Y) < 4:
                asteroid.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if laser != None and laser.is_touching(asteroid):
                    asteroid.delete()
                    laser.delete()
            if player.is_touching(asteroid):
                gameoption = 0
                newly1 = 0
                game.set_score(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clear_screen()
            else:
                asteroid.delete()
                game.add_score(1)
        elif gameoption == 12:
            asteroid = game.create_sprite(Math.random_range(0, 5), 0)
            while asteroid.get(LedSpriteProperty.Y) < 4:
                asteroid.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if laser != None and laser.is_touching(asteroid):
                    asteroid.delete()
                    laser.delete()
            if player.is_touching(asteroid):
                gameoption = 1
                newly1 = 0
                game.set_score(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clear_screen()
            else:
                asteroid.delete()
                game.add_score(1)
basic.forever(on_forever10)

# firing lasers

def on_forever11():
    global noexecute
    if noDo == 0:
        if gameoption == 24:
            
            def on_button_pressed_ab():
                global laser
                laser = game.create_sprite(player.get(LedSpriteProperty.X),
                    player.get(LedSpriteProperty.Y))
                while laser.get(LedSpriteProperty.Y) > 0:
                    laser.change(LedSpriteProperty.Y, -1)
                    basic.pause(50)
                    if laser != None and laser.is_touching(asteroid):
                        asteroid.delete()
                        laser.delete()
                laser.delete()
            input.on_button_pressed(Button.AB, on_button_pressed_ab)
            
        elif gameoption == 12:
            
            def on_button_pressed_ab2():
                global laser
                laser = game.create_sprite(player.get(LedSpriteProperty.X),
                    player.get(LedSpriteProperty.Y))
                while laser.get(LedSpriteProperty.Y) > 0:
                    laser.change(LedSpriteProperty.Y, -1)
                    basic.pause(50)
                    if laser != None and laser.is_touching(asteroid):
                        asteroid.delete()
                        laser.delete()
                laser.delete()
            input.on_button_pressed(Button.AB, on_button_pressed_ab2)
            
        else:
            noexecute = 8
basic.forever(on_forever11)

def on_in_background():
    global runningstatus
    while True:
        runningstatus = 1
        basic.pause(2000)
control.in_background(on_in_background)
