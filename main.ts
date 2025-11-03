basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.ringTone(262)
    music.rest(music.beat(BeatFraction.Whole))
    radio.sendValue("name", 0)
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        radio.sendString("")
    }
})
