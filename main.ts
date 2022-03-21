pins.onPulsed(DigitalPin.P15, PulseValue.Low, function () {
    radio.sendString("D")
})
pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    radio.sendString("C")
})
pins.onPulsed(DigitalPin.P13, PulseValue.Low, function () {
    radio.sendString("A")
})
pins.onPulsed(DigitalPin.P14, PulseValue.Low, function () {
    radio.sendString("B")
})
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) >= 1000) {
        radio.sendString("UP")
    } else if (pins.analogReadPin(AnalogPin.P1) <= 30) {
        radio.sendString("DOWN")
    } else if (pins.analogReadPin(AnalogPin.P2) >= 1000) {
        radio.sendString("RIGHT")
    } else if (pins.analogReadPin(AnalogPin.P2) <= 30) {
        radio.sendString("LEFT")
    }
})
