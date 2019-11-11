basic.forever(function () {
    music.setTempo(pins.map(
        Math.abs(input.acceleration(Dimension.Y)),
        0,
        1023,
        60,
        320
    ))
    music.playTone(input.lightLevel() * 25, music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
    led.plotBarGraph(
        Math.abs(input.acceleration(Dimension.Y)),
        1023
    )
})
