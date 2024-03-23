input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
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
bluetooth.onBluetoothConnected(function () {
    serial.writeLine("")
    serial.writeLine("Bluetooth is connected")
})
input.onButtonPressed(Button.A, function () {
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
function DoLoad () {
    serial.setBaudRate(BaudRate.BaudRate14400)
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
    basic.showIcon(IconNames.Yes)
    mkae1 = randdiv / 2.5 * 4
    serial.writeLine("Took " + ("" + mkae1) + " ms to load")
    serial.writeLine("----------------------------------------------------------")
    serial.writeLine("MicroWatch 1.2/Beta Running on Micro:bit \"" + control.deviceName() + "\"")
    serial.writeLine("The Current Time may not be correct. Use the A button to set hours and Button B to set Minutes")
    serial.writeLine("You can change the time by connecting the micro:bit via bluetooth/serial to your device and send \"Hours=<the hour>\" to change the hour and \"Min=<the minutes>\"")
    serial.writeLine("----------------------------------------------------------")
    serial.writeLine("Warning: Note that the program is beta so, you may occur crashes.")
    music.stopAllSounds()
    basic.pause(900)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    noDo = 0
    basic.clearScreen()
}
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    if (noDo == 0) {
        if (gameoption == 24) {
            noexecute = 56
        } else if (gameoption == 12) {
            noexecute = 99
        } else {
            basic.showString("Heat" + ":" + ("" + input.temperature()) + "C")
        }
    }
})
input.onButtonPressed(Button.B, function () {
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
input.onGesture(Gesture.Shake, function () {
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
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
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
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
let xAcceleration = 0
let scores = ""
let time = ""
let mkae1 = 0
let randdiv = 0
let randNum1 = 0
let noexecute = 0
let newly1 = 0
let gameoption = 0
let astroid2: game.LedSprite = null
let noDo = 0
let hour = 0
let player : game.LedSprite = null
let asteroid : game.LedSprite = null
let laser : game.LedSprite = null
let second = 0
let noDo2 = 0
let randNum12 = 0
let randdiv2 = 0
let minute = 0
serial.redirectToUSB()
DoLoad()
let delay = 500
bluetooth.startUartService()
loops.everyInterval(60000, function () {
    minute += 1
})
basic.forever(function () {
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
})
basic.forever(function () {
    while (true) {
        for (let i = 1; i <= 24; i++) {
            if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)) == `Hour=${i}`) {
                hour = i;
            }
        }
    }
})
basic.forever(function () {
    while (true) {
        for (let j = 1; j <= 60; j++) {
            if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)) == `Min=${j}`) {
                minute = j;
            }
        }
    }
})
basic.forever(function () {
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
})
basic.forever(function () {
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
basic.forever(function () {
    while (true) {
        for (let k = 1; k <= 60; k++) {
            if (serial.readUntil(serial.delimiters(Delimiters.NewLine)) == `Min=${k}`) {
                minute = k;
            }
        }
    }
})
basic.forever(function () {
    if (noDo == 0) {
        scores = "Score:" + ("" + game.score())
    }
})
basic.forever(function () {
    while (true) {
        for (let l = 1; l <= 24; l++) {
            if (serial.readUntil(serial.delimiters(Delimiters.NewLine)) == `Hour=${l}`) {
                hour = l;
            }
        }
    }
})
basic.forever(function () {
    if (noDo == 0) {
        if (hour == 24) {
            hour = 0
        } else if (minute == 60) {
            minute = 0
        }
        time = "" + hour + ":" + ("" + minute)
    }
})
basic.forever(function () {
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
basic.forever(function () {
    if (noDo == 0) {
        if (gameoption == 24) {
            player = game.createSprite(2, 4)
        }
    }
})
control.inBackground(function () {
    while (true) {
        runningstatus = 1
        basic.pause(2000)
    }
})
loops.everyInterval(3600000, function () {
    hour += 1
})
