//SOAL 1
// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne
//Jawaban Monik
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]%2 === 0) { // => Proses untuk mengecek dalam array numbers, apakah angka itu genap
        resultOne += numbers[i];
    }
}
console.log(resultOne);


//SOAL 2
const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo
//Jawaban Monik
for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] % 2 !== 0) { // => Cek bilangan nya ganjil atau tidak
      resultTwo += numbersTwo[i];
    }
}
console.log(resultTwo);


//SOAL 3
// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree
//Jawaban Monik
for (let i = 0; i < students.length; i++) {
    resultThree.push(students[i].toUpperCase()); // Ubah tiap array toUpperCase (menjadi huruf kapital)
}
console.log(resultThree); // Output: ["TITO", "ARY", "BOSTANG"]


//SOAL 4
// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
//Jawaban Monik
//Nama orang yang umur nya diatas 18 tahun
let checkNameMoreThan18 = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) { // Cek apakah age nya lebih besar dari 18
        checkNameMoreThan18.push(people[i].name);
    }
}
console.log(checkNameMoreThan18);
//Ambil array people yang namanya lebih dari 5 (length dari name > 5)
let peopleLengthNameMoreThan5 = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].name.length > 5) { // Cek apakah length dari name nya lebih besar dari 5
        peopleLengthNameMoreThan5.push(people[i]);
    }
}
console.log(peopleLengthNameMoreThan5);


//SOAL 5
// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
//Jawaban Monik
let totalPrice = 0;
for (let i = 0; i < items.length; i++) { // => Cek berapa banyak barang dalam items, lalu total price nya
    totalPrice += items[i].price; 
}
console.log(totalPrice);


//SOAL 6
//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
//Jawaban Monik
let checkNumbers = [];

for (let i = 0; i < numbersThree.length; i++) {
    let isDuplicate = false; // Anggap belum ada duplikat

    for (let j = 0; j < checkNumbers.length; j++) { // Cek apakah numbersThree[i] sudah ada di check numbers
        if (numbersThree[i] === checkNumbers[j]) { // Cek jika angka nya sama
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {  // Jika tidak ditemukan duplikat, anggap uniq
        checkNumbers.push(numbersThree[i]); // Masukkan ke array numbersThree yang sudah kita set tadi
    }
}

console.log(checkNumbers);


//SOAL 7
// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
//Jawaban Monik
let priceMax = 0;
let productPriceMax = '';

for (let i = 0; i < products.length; i++) {
    if (products[i].price > priceMax) { // Cek apakah harga product saat ini lebih besar dari priceMax
        priceMax = products[i].price;
        productPriceMax = products[i].name;
    }
}

console.log(productPriceMax);


//SOAL 8
// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
//Jawaban Monik
let mergeArray = '';

for (let i = 0; i < words.length; i++) {
    mergeArray += words[i];

    if (i < words.length - 1) { // Tambah spasi di setiap kata terakhir
        mergeArray += ' ';
    }
}

console.log(mergeArray);


//SOAL 9
// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
//Jawaban Monik
let finalCheck = []; //Penampungan array untuk hasil terakhir
let count = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes('a')) {
        finalCheck.push(names[i]); // Masukkan ke finalCheck jika names[i] mengandungn huruf 'a'
        count++;

        if (count === 3) { // Stop jika sudah 3 data
            break;
        }
    }
}

console.log(finalCheck);


//SOAL 10
// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
//Jawaban Monik
let countCharacter = 0;

for (let i = 0; i < namesTwo.length; i++) {
    countCharacter += namesTwo[i].length;
}

console.log(countCharacter);


//SOAL 11
// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
//Jawaban Monik
let finalPeopleTwoToArrayString = [];

for (let i = 0; i < peopleTwo.length; i++) {
    if (peopleTwo[i].age > 21) { // Cek umur nya lebih besar dari 21
        finalPeopleTwoToArrayString.push(`${peopleTwo[i].name} (${peopleTwo[i].age})`); // Masukkan ke finalPeopleTwoToArrayString sesuai format string yang diminta
    }
}

console.log(finalPeopleTwoToArrayString);
