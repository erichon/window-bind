input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "temp") {
        if (value > 400) {
            servos.P0.setAngle(90)
        } else if (value < 50) {
            servos.P0.setAngle(0)
        } else {
            servos.P0.setAngle(value / 400 * 90)
        }
    }
})
radio.setGroup(1)
servos.P0.setAngle(90)
