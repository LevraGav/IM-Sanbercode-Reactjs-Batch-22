//Soal no 1
var number1 = 1

console.log('SOAL NO 1');
console.log("LOOPING PERTAMA");
while(number1 < 21){
    if(number1 % 2 === 0){
        console.log(number1 + " - " + "I love coding");
    }
    number1++;
}
console.log("")

var number2 = 21
console.log("LOOPING KEDUA")
while(number2 > 0){
    if(number2 % 2 === 0){
        console.log(number2 + " - " + "I will become a frontend developer");
    }
    number2--;
}
console.log("")

//LOOPING PERTAMA
//2 - I love coding
//4 - I love coding
//6 - I love coding
//8 - I love coding
//10 - I love coding
//12 - I love coding
//14 - I love coding
//16 - I love coding
//18 - I love coding
//20 - I love coding

//LOOPING KEDUA
//20 - I will become a frontend developer
//18 - I will become a frontend developer
//16 - I will become a frontend developer
//14 - I will become a frontend developer
//12 - I will become a frontend developer
//10 - I will become a frontend developer
//8 - I will become a frontend developer
//6 - I will become a frontend developer
//4 - I will become a frontend developer
//2 - I will become a frontend developer

//Soal no 2
console.log('SOAL NO 2');
for(var number3 = 1; number3 <= 20; number3++){
    if(number3 % 2 === 0){
        console.log(number3 + " - " + "Berkualitas");
    }
    else if(number3 % 3 === 0 && number3 % 2 !== 0){
        console.log(number3 + " - " + "I Love Coding");
    }
    else{
        console.log(number3 + " - " + "Santai");
    }
}
console.log("")

//1 - Santai
//2 - Berkualitas
//3 - I Love Coding
//4 - Berkualitas
//5 - Santai
//6 - Berkualitas
//7 - Santai
//8 - Berkualitas
//9 - I Love Coding
//10 - Berkualitas
//11 - Santai
//12 - Berkualitas
//13 - Santai
//14 - Berkualitas
//15 - I Love Coding
//16 - Berkualitas
//17 - Santai
//18 - Berkualitas
//19 - Santai
//20 - Berkualitas

//Soal no 3
console.log('SOAL NO 3');
var hasil = "";
for( var baris = 0; baris < 7; baris++){
    for(var simbol = 0; simbol <= baris; simbol++){
        hasil += "#";
    }
    hasil += "\n";
}
console.log(hasil)

//#
//##
//###
//####
//#####
//######
//#######

//Soal no 4
console.log('SOAL NO 4');
var kalimat = "saya sangat senang belajar javascript";
var kata = kalimat.split(' ');
console.log(kata);
console.log("")
//'saya', 'sangat', 'senang', 'belajar', 'javascript'

//Soal no 5
console.log('SOAL NO 5');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var buah_urut = daftarBuah.sort();
for(var i = 0; i < buah_urut.length; i++){
    console.log(buah_urut[i]);
}
//1. Mangga
//2. Apel
//3. Anggur
//4. Semangka
//5. Jeruk





