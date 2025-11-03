let λίστα: number[] = []
basic.forever(function () {
    music.play(music.stringPlayable("A - E F D G E F ", 120), music.PlaybackMode.UntilDone)
    music.ringTone(262)
    for (let index = 0; index < 4; index++) {
    	
    }
    music.rest(music.beat(BeatFraction.Whole))
    radio.sendValue("name", 0)
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        radio.sendString("")
        for (let τιμή of λίστα) {
            led.plot(0, 0)
        }
    }
})
