let fs = require('fs')

const readFile = (file) => {

    const content = fs.readFileSync(`./data/${file}`, 'utf8')
    return content

}

const handlingData = (data) => {
    let arrayGroupHour = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    }
    const hourBooking = data.split('\n')
    hourBooking.map((x) => {
        let day = x.split(' ');
        if (day[0] == 1) {
            arrayGroupHour[1].push({ start: day[1].split('-')[0], end: day[1].split('-')[1] });
        } else if (day[0] == 2) {
            arrayGroupHour[2].push({ start: day[1].split('-')[0], end: day[1].split('-')[1] })
        } else if (day[0] == 3) {
            arrayGroupHour[3].push({ start: day[1].split('-')[0], end: day[1].split('-')[1] })
        } else if (day[0] == 4) {
            arrayGroupHour[4].push({ start: day[1].split('-')[0], end: day[1].split('-')[1] });
        } else if (day[0] == 5) {
            arrayGroupHour[5].push({ start: day[1].split('-')[0], end: day[1].split('-')[1] })
        }

    })
    return arrayGroupHour

}

const availableHour = (arrayGroupHour) => {
    let date = new Date(`2021-01-01 `)
    let startHours = date.setHours(09, 0, 0, 0) //fuseau horaire 
    let endHours = date.setHours(18, 59, 59, 59)
    let day = 1
    let slots = []
    // console.log(arrayGroupHour)
    while (day < 6) {
        arrayGroupHour[day].forEach(element => {
            console.log(element)
            console.log(day)
        });


        day++
    }

}




module.exports = {
    readFile,
    handlingData,
    availableHour
}