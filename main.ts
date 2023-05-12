input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("CAP Tudela")
    OLED.writeString("Temp.= ")
    OLED.writeNum(input.temperature())
    OLED.writeStringNewLine(" grados")
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
    OLED.drawLoading(Environment.ReadNoise(AnalogPin.P3))
})
OLED.init(128, 64)
basic.forever(function () {
    if (Environment.ReadNoise(AnalogPin.P3) <= 40) {
        tinkercademy.LED(DigitalPin.P0, OnOff.On)
        basic.pause(200)
        tinkercademy.LED(DigitalPin.P0, OnOff.Off)
    }
    if (Environment.ReadNoise(AnalogPin.P3) > 40 && Environment.ReadNoise(AnalogPin.P3) < 50) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.pause(200)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
    if (Environment.ReadNoise(AnalogPin.P3) > 50) {
        tinkercademy.LED(DigitalPin.P2, OnOff.On)
        basic.pause(200)
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    }
})
