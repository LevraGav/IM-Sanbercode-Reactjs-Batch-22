// Soal no 1
console.log('----soal 1----')
const LuasLingkaran = (radius) => {
    let luas = Math.PI * Math.pow(radius, 2)
    return Math.round(luas)
}

console.log(`Luas Lingkaran : ${LuasLingkaran(7)}`) // Luas Lingkaran : 154

const KelilingLingkaran = (radius) => {
    let keliling = Math.PI * (radius * 2)
    return Math.round(keliling) 
}

console.log(`Keliling Lingkaran : ${KelilingLingkaran(7)}`) // Keliling Lingkaran : 44

console.log('')

// Soal no 2
console.log('----soal 2----')
let kalimat = ""

const tambahkalimat = (kata1, kataselanjutnya) => {
    if (kata1 === ''){
        return `${kataselanjutnya}`
    }
    else{
        return `${kata1} ${kataselanjutnya}`
    }
}

kalimat = tambahkalimat(kalimat, 'saya')
kalimat = tambahkalimat(kalimat, 'adalah')
kalimat = tambahkalimat(kalimat, 'seorang')
kalimat = tambahkalimat(kalimat, 'frontend')
kalimat = tambahkalimat(kalimat, 'developer')

console.log(kalimat)
// saya adalah seorang frontend developer

console.log('')

// Soal no 3
console.log('----soal 3----')
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: fullName = () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName() //William Imoh

console.log('')

// Soal no 4
console.log('----soal 4----')
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation, spell)
// Harry Potter Holt Hogwarts React Conf Deve-wizard Avocado Vimulus Renderus!!!

console.log('')

// Soal no 5
console.log('----soal 5----')
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

//[
//    'Will', 'Chris',
//    'Sam',  'Holly',
//    'Gill', 'Brian',
//    'Noel', 'Maggie'
//]

