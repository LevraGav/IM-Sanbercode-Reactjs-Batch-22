var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let i = 0

function execute(time, books){
    readBooksPromise(time, books[i]).then(function(timeleft){
        i++
        if(i < books.length){
            execute(timeleft, books)
        }
    }).catch(function(err){
        console.log(err)
    })
}

execute(10000, books)

// saya mulai membaca LOTR
// saya sudah selesai membaca LOTR, sisa waktu saya 7000       
// saya mulai membaca Fidas
// saya sudah selesai membaca Fidas, sisa waktu saya 5000      
// saya mulai membaca Kalkulus
// saya sudah selesai membaca Kalkulus, sisa waktu saya 1000 