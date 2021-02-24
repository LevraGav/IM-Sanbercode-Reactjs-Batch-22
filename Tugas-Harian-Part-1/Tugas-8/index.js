var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

let i = 0

function execute(time, books){
    readBooks(time, books[i], function(timeleft){
        if(timeleft !== 0){
            i++
            execute(timeleft, books)
        }
    })
}

execute(10000, books)

// saya membaca LOTR
// saya sudah membaca LOTR, sisa waktu saya 7000
// saya membaca Fidas
// saya sudah membaca Fidas, sisa waktu saya 5000
// saya membaca Kalkulus
// saya sudah membaca Kalkulus, sisa waktu saya 1000
// saya membaca komik
// saya sudah membaca komik, sisa waktu saya 0