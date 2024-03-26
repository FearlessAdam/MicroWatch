input.onLogoEvent(TouchButtonEvent.LongPressed, function on_logo_long_pressed() {
    
    if (noDo == 0) {
        basic.pause(1000)
        game.setScore(0)
        player.delete()
        asteroid.delete()
        astroid2.delete()
        gameoption = 0
        newly1 = 0
        game.pause()
        basic.clearScreen()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            noexecute = 4
        } else if (gameoption == 12) {
            noexecute = 30
        } else {
            hour += 1
        }
        
    }
    
})
function DoLoad() {
    
    let microVersion = control.hardwareVersion()
    if (microVersion == "1") {
        basic.showString("Incompatible MicroBit!")
        basic.pause(4000)
        control.panic(668)
    }
    
    bluetooth.startUartService()
    bluetooth.setTransmitPower(8)
    serial.setBaudRate(BaudRate.BaudRate115200)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.LoopingInBackground)
    noDo = 1
    randNum1 = randint(8, 18)
    randdiv = randNum1 * 1000
    serial.writeLine("Loading..")
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    serial.writeLine("Starting bluetooth..")
    basic.pause(randdiv / 2.5)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(randdiv / 2.5)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    serial.writeLine("Loading Modules..")
    basic.pause(900)
    serial.writeLine("ModuleLoad: Done")
    basic.pause(randdiv / 2.5)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.pause(randdiv / 2.5)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    serial.writeLine("Setting Transmit Power..")
    basic.showIcon(IconNames.Yes)
    mkae1 = randdiv / 2.5 * 4
    basic.pause(100)
    serial.writeLine("Finalizing Boot..")
    basic.pause(100)
    serial.writeLine("Took " + ("" + ("" + mkae1)) + " ms to load")
    basic.pause(100)
    serial.writeLine("----------------------------------------------------------")
    basic.pause(100)
    serial.writeLine("MicroWatch 1.2/Beta Running on Micro:bit \"" + control.deviceName() + "\"")
    basic.pause(100)
    serial.writeLine("The Current Time may not be correct. Use the A button to set hours and Button B to set Minutes")
    basic.pause(100)
    serial.writeLine("You can change the time by connecting the micro:bit via bluetooth/serial to your device and send \"Hours=<the hour>\" to change the hour and \"Min=<the minutes>\"")
    basic.pause(100)
    serial.writeLine("----------------------------------------------------------")
    basic.pause(100)
    serial.writeLine("Warning: Note that the program is beta so, you may occur crashes.")
    music.stopAllSounds()
    basic.pause(900)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    noDo = 0
    basic.clearScreen()
}

buttonClicks.onButtonHeld(buttonClicks.AorB.B, function my_function() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            noexecute = 56
        } else if (gameoption == 12) {
            noexecute = 99
        } else {
            basic.showString("Heat" + ":" + ("" + ("" + input.temperature())) + "C")
        }
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            noexecute = 6
        } else if (gameoption == 12) {
            noexecute = 6
        } else {
            minute += 1
        }
        
    }
    
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            noexecute = 8
        } else if (gameoption == 12) {
            noexecute = 60
        } else {
            basic.showString(time)
        }
        
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    if (noDo == 0) {
        basic.pause(1000)
        game.setScore(0)
        if (newly1 == 12) {
            noexecute = 43
        } else {
            newly1 = 12
            gameoption = 24
            basic.pause(30)
            gameoption = 12
            game.resume()
        }
        
    }
    
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function my_function2() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            noexecute = 58
        } else if (gameoption == 12) {
            noexecute = 69
        } else {
            basic.showString(scores)
        }
        
    }
    
})
let runningstatus = 0
let SerialBSubNum = 0
let SerialB = ""
let BleBSubNum = 0
let Bleb = ""
let xAcceleration = 0
let SerialASubNum = 0
let SerialA = ""
let BleASubNum = 0
let BleA = ""
let scores = ""
let time = ""
let minute = 0
let mkae1 = 0
let randdiv = 0
let randNum1 = 0
let hour = 0
let noexecute = 0
let newly1 = 0
let gameoption = 0
let astroid2 : game.LedSprite = null
let noDo = 0
let player : game.LedSprite = null
let asteroid : game.LedSprite = null
let laser : game.LedSprite = null
let second = 0
let noDo2 = 0
let randNum12 = 0
let randdiv2 = 0
DoLoad()
let delay = 500
loops.everyInterval(60000, function on_every_interval() {
    
    minute += 1
})
basic.forever(function on_forever() {
    
    if (noDo == 0) {
        scores = "Score:" + ("" + ("" + game.score()))
    }
    
})
basic.forever(function on_forever2() {
    
    if (noDo == 0) {
        if (hour == 24) {
            hour = 0
        } else if (minute == 60) {
            minute = 0
            hour += 1
        }
        
    }
    
    time = "" + ("" + hour) + ":" + ("" + ("" + minute))
})
basic.forever(function on_forever3() {
    
    BleA = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    BleASubNum = parseFloat(BleA.substr(5, 8))
    if (BleA.includes("Hour=")) {
        if (BleASubNum < 25) {
            hour = BleASubNum
            serial.writeLine("The Hour is set to " + ("" + hour) + " Via Bluetooth serial Input.")
        }
        
    }
    
})
basic.forever(function on_forever4() {
    
    SerialA = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    SerialASubNum = parseFloat(SerialA.substr(5, 8))
    if (SerialA.includes("Hour=")) {
        if (SerialASubNum < 25) {
            hour = SerialASubNum
            serial.writeLine("The Hour is set to " + ("" + hour) + " Via serial Input.")
        }
        
    }
    
})
basic.forever(function on_forever5() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            player = game.createSprite(2, 4)
        }
        
    }
    
})
basic.forever(function on_forever6() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            xAcceleration = input.acceleration(Dimension.X)
            if (xAcceleration < -150 && player.get(LedSpriteProperty.X) > 0) {
                player.change(LedSpriteProperty.X, -1)
            } else if (xAcceleration > 150 && player.get(LedSpriteProperty.X) < 4) {
                player.change(LedSpriteProperty.X, 1)
            }
            
            basic.pause(50)
        } else if (gameoption == 12) {
            xAcceleration = input.acceleration(Dimension.X)
            if (xAcceleration < -150 && player.get(LedSpriteProperty.X) > 0) {
                player.change(LedSpriteProperty.X, -1)
            } else if (xAcceleration > 150 && player.get(LedSpriteProperty.X) < 4) {
                player.change(LedSpriteProperty.X, 1)
            }
            
            basic.pause(50)
        } else {
            noexecute = 12
        }
        
    }
    
})
basic.forever(function on_forever7() {
    
    Bleb = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    BleBSubNum = parseFloat(Bleb.substr(4, 7))
    if (Bleb.includes("Min=")) {
        if (BleBSubNum < 61) {
            minute = BleBSubNum
            serial.writeLine("The Minute is set to " + ("" + minute) + " Via Bluetooth serial Input.")
        }
        
    }
    
})
basic.forever(function on_forever8() {
    
    SerialB = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    SerialBSubNum = parseFloat(SerialB.substr(4, 7))
    if (SerialB.includes("Min=")) {
        if (SerialASubNum < 61) {
            minute = SerialBSubNum
            serial.writeLine("The Minute is set to " + ("" + minute) + " Via serial Input.")
        }
        
    }
    
})
//  asteroid movement
basic.forever(function on_forever9() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            astroid2 = game.createSprite(Math.randomRange(0, 5), 0)
            while (astroid2.get(LedSpriteProperty.Y) < 4) {
                astroid2.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if (laser != null && laser.isTouching(astroid2)) {
                    astroid2.delete()
                    laser.delete()
                }
                
            }
            if (player.isTouching(astroid2)) {
                gameoption = 0
                newly1 = 0
                game.setScore(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clearScreen()
            } else {
                astroid2.delete()
                game.addScore(1)
            }
            
        } else if (gameoption == 12) {
            astroid2 = game.createSprite(Math.randomRange(0, 5), 0)
            while (astroid2.get(LedSpriteProperty.Y) < 4) {
                astroid2.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if (laser != null && laser.isTouching(astroid2)) {
                    astroid2.delete()
                    laser.delete()
                }
                
            }
            if (player.isTouching(astroid2)) {
                gameoption = 0
                newly1 = 0
                game.setScore(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clearScreen()
            } else {
                astroid2.delete()
                game.addScore(1)
            }
            
        }
        
    }
    
})
basic.forever(function on_forever10() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            asteroid = game.createSprite(Math.randomRange(0, 5), 0)
            while (asteroid.get(LedSpriteProperty.Y) < 4) {
                asteroid.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if (laser != null && laser.isTouching(asteroid)) {
                    asteroid.delete()
                    laser.delete()
                }
                
            }
            if (player.isTouching(asteroid)) {
                gameoption = 0
                newly1 = 0
                game.setScore(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clearScreen()
            } else {
                asteroid.delete()
                game.addScore(1)
            }
            
        } else if (gameoption == 12) {
            asteroid = game.createSprite(Math.randomRange(0, 5), 0)
            while (asteroid.get(LedSpriteProperty.Y) < 4) {
                asteroid.change(LedSpriteProperty.Y, 1)
                basic.pause(delay)
                if (laser != null && laser.isTouching(asteroid)) {
                    asteroid.delete()
                    laser.delete()
                }
                
            }
            if (player.isTouching(asteroid)) {
                gameoption = 1
                newly1 = 0
                game.setScore(0)
                game.pause()
                asteroid.delete()
                astroid2.delete()
                player.delete()
                basic.clearScreen()
            } else {
                asteroid.delete()
                game.addScore(1)
            }
            
        }
        
    }
    
})
//  firing lasers
basic.forever(function on_forever11() {
    
    if (noDo == 0) {
        if (gameoption == 24) {
            input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
                
                laser = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
                while (laser.get(LedSpriteProperty.Y) > 0) {
                    laser.change(LedSpriteProperty.Y, -1)
                    basic.pause(50)
                    if (laser != null && laser.isTouching(asteroid)) {
                        asteroid.delete()
                        laser.delete()
                    }
                    
                }
                laser.delete()
            })
        } else if (gameoption == 12) {
            input.onButtonPressed(Button.AB, function on_button_pressed_ab2() {
                
                laser = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
                while (laser.get(LedSpriteProperty.Y) > 0) {
                    laser.change(LedSpriteProperty.Y, -1)
                    basic.pause(50)
                    if (laser != null && laser.isTouching(asteroid)) {
                        asteroid.delete()
                        laser.delete()
                    }
                    
                }
                laser.delete()
            })
        } else {
            noexecute = 8
        }
        
    }
    
})
control.inBackground(function on_in_background() {
    
    while (true) {
        runningstatus = 1
        basic.pause(2000)
    }
})
