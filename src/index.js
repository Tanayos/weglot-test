const processFile = require('./models/readFile')

let data  =  processFile.readFile('input2.txt')

let arrayGroupHour = processFile.handlingData(data)

processFile.availableHour(arrayGroupHour)



