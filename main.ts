input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    images.createBigImage(`
        . . . . . . . . . .
        # # . # # . . . . .
        # # . # # . . # # .
        # # . # # . . . . .
        # # . # # . . . . .
        `).scrollImage(1, 200)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showArrow(ArrowNames.West)
})
basic.showString("salvador 8.5")
