//soal no 1
var kata1 = "saya";
var kata2 = "senang";
var kata3 = "belajar";
var kata4 = "javascript";

var kata2_upper_s = kata2[0].toUpperCase(); //mengubah S menjadi kapital
var kata4_upper = kata4.toUpperCase(); //mengubah kataKeempat jadi kapital semua

console.log(kata1.concat(" " + kata2_upper_s + kata2.slice(1), " " + kata3, " " + kata4_upper));
// saya Senang belajar JAVASCRIPT

//soal no 2
var string1 = "1";
var string2 = "2";
var string3 = "4";
var string4 = "5";

var number1 = parseInt(string1); // 1
var number2 = parseInt(string2); // 2
var number3 = parseInt(string3); // 4
var number4 = parseInt(string4); // 5

console.log('Hasil Penjumlahan :', number1 + number2 + number3 + number4); //12

//soal no 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5); 
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); // kata pertama : wah
console.log('Kata Kedua: ' + kataKedua); // kata kedua : javascript
console.log('Kata Ketiga: ' + kataKetiga); // kata ketiga : itu
console.log('Kata Keempat: ' + kataKeempat); // kata keempat : keren
console.log('Kata Kelima: ' + kataKelima); // kata kelima : sekali

//soal no 4
var nilai = 69;

if (nilai >= 80){
    console.log("indeksnya A");
}
else if (nilai >= 70 && nilai < 80){
    console.log("indeksnya B")
}
else if (nilai >= 60 && nilai < 70){
    console.log("indeksnya C")
}
else if (nilai >= 50 && nilai < 60){
    console.log("indeksnya D")
}
else {
    console.log("indeksnya E")
}
// indeksnya C

//soal no 5
var tanggal = 29;
var bulan = 9;
var tahun = 2001;
var strbulan;

switch(bulan) {
    case 1:   { 
        strbulan = 'Januari'; 
        break; 
    }
    case 2:   { 
        strbulan = 'Februari'; 
        break; 
    }
    case 3:   { 
        strbulan = 'Maret'; 
        break; 
    }
    case 4:   { 
        strbulan = 'April'; 
        break; 
    }
    case 5:   { 
        strbulan = 'Mei'; 
        break; 
    }
    case 6:   { 
        strbulan = 'Juni'; 
        break; 
    }
    case 7:   { 
        strbulan = 'Juli';
        break; 
    }
    case 8:   { 
        strbulan = 'Agustus'; 
        break; 
    }
    case 9:   { 
        strbulan = 'September'; 
        break; 
    }
    case 10:   { 
        strbulan = 'Oktober'; 
        break; 
    }
    case 11:   { 
        strbulan = 'November'; 
        break; 
    }
    case 12:   { 
        strbulan = 'Desember'; 
        break; 
    }
    default:  { 
        console.log('Bulan anda tidak ada'); 
    }
}

var strtanggal = String(tanggal);
var strtahun = String(tahun);
console.log(strtanggal.concat(" " + strbulan).concat(" " + strtahun)); //29 September 2001





