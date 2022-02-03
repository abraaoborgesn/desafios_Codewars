function humanReadable(seconds) {
    if (seconds > 359999) return false

    let hour = Math.floor(seconds / 3600)
    let minutes = parseInt(seconds / 60 % 60)
    let sec = seconds % 60

    if (hour < 10) hour = '0' + `${hour}`
    if (minutes < 10) minutes = '0' + `${minutes}`
    if (sec < 10) sec = '0' + `${sec}`

    console.log(`${hour}:${minutes}:${sec}`)
    return `${hour}:${minutes}:${sec}`

}

humanReadable(42596)