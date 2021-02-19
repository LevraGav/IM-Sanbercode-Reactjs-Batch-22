//Soal no 1
console.log('-----SOAL 1-----');
function halo(){
    return "Halo Sanbers!";
}
console.log(halo()); //Halo Sanbers!
console.log("");

//Soal no 2
console.log('-----SOAL 2-----');
function kalikan(num1, num2){
    return num1 * num2;
}

var hasilKali = kalikan(12, 4)
console.log('Hasil Perkalian : ' + hasilKali); //Hasil Perkalian : 48
console.log("");

//Soal no 3
console.log('-----SOAL 3-----');
function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya " + age + " tahun" + ", alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

console.log(introduce("John", 30, "Jalan belum jadi", "Gaming"));
//Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!
console.log("");

//Soal no 4
console.log('-----SOAL 4-----');
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = {
    Nama : arrayDaftarPeserta[0],
    Jenis_Kelamin : arrayDaftarPeserta[1],
    Hobby : arrayDaftarPeserta[2],
    Tahun_Kelahiran : arrayDaftarPeserta[3]
}

console.log(objectDaftarPeserta);
//{
//    Nama: 'Asep',
//    Jenis_Kelamin: 'laki-laki',
//    Hobby: 'baca buku',
//    Tahun_Kelahiran: 1992
//}
console.log("");

//Soal no 5
console.log('-----SOAL 5-----');
var data = [{nama: "strawberry", warna: "merah", ada_bijinya: false, harga: 9000 }, 
            {nama: "jeruk", warna: "oranye", ada_bijinya: true, harga: 8000},
            {nama: "Semangka", warna: "Hijau & Merah", ada_bijinya: true, harga: 10000},
            {nama: "Pisang", warna: "Kuning", ada_bijinya: false, harga: 5000}
        ]
console.log(data[0]);
//{ nama: 'strawberry', warna: 'merah', ada_bijinya: false, harga: 9000 }
console.log("");

//Soal no 6
console.log('-----SOAL 6-----');
var dataFilm = [];
function addMovie(nama, durasi, genre, tahun){
    var Film = {
        Nama: nama,
        Durasi: durasi,
        Genre: genre,
        Tahun: tahun
    }
    return dataFilm.push(Film);
}

addMovie('LOTR', '2 jam', 'action', '1999');
addMovie('avenger', '2 jam', 'action', '2019');
addMovie('spiderman', '2 jam', 'action', '2004');
addMovie('juon', '2 jam', 'horror', '2004');

console.log(dataFilm);

//[
//    { Nama: 'LOTR', Durasi: '2 jam', Genre: 'action', Tahun: '1999' },
//    { Nama: 'avenger', Durasi: '2 jam', Genre: 'action', Tahun: '2019' },
//    {
//      Nama: 'spiderman',
//      Durasi: '2 jam',
//      Genre: 'action',
//      Tahun: '2004'
//    },
//    { Nama: 'juon', Durasi: '2 jam', Genre: 'horror', Tahun: '2004' }
//  ]


