//SOAL 1
/**
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

function checkOddEven(input) {
    if (typeof input !== 'number' || isNaN(input)) { // Akan invalid kalau input bukan angka (number) atau hasil konversi menjadi NaN
        return 'invalid input';
    }

    if (input % 2 === 0) { // Cek apakah angka genap: modulus 2 hasilnya 0
        return 'genap';
    } else {
        // Selain itu berarti ganjil
        return 'ganjil';
    }
}

console.log(checkOddEven(5)); // ganjil
console.log(checkOddEven(2)); // genap
console.log(checkOddEven("enam")); // invalid input


//SOAL 2
/**
 * Menentukan usia dewasa
 * 
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

function checkMature(input) {
    // Handle untuk validasi input, pastikan input adalah angka valid dan tidak negatif
    if (typeof input !== 'number' || isNaN(input) || input < 0) {
        return 'invalid input';
    }

    if (input >= 18) {// Cek jika usia 18 atau lebih
        return 'Dewasa';
    } else {
        // Kalau kurang dari 18
        return 'Belum dewasa';
    }
}

console.log(checkMature(18)); // Dewasa
console.log(checkMature(17)); // Belum dewasa
console.log(checkMature("enam")); // invalid input
console.log(checkMature(-1)); // invalid input


//SOAL 3
/**
 * Menentukan score student
 * 
 * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
 * 90 - 100: A
 * 80 - 89: B
 * 70 - 79: C
 * 60 - 69: D
 * < 60: E
 * Gunakan if-else dan function yang mengembalikan string
 */

function scoreReport(input) {
    if (typeof input !== 'number' || isNaN(input) || input < 0 || input > 100) { // Handle validasi input: harus angka, tidak NaN, dan berada di rentang 0 sampai 100
        return 'invalid input';
    }

    if (input >= 90 && input <= 100) { // Set A jika input ≥ 90 dan ≤ 100
        return 'A';
    } else if (input >= 80 && input < 90) { // Set B jika input ≥ 80 dan < 90
        return 'B';
    } else if (input >= 70 && input < 80) { // Set C jika input ≥ 70 dan < 80
        return 'C';
    } else if (input >= 60 && input < 70) { // Set D jika input ≥ 60 dan < 70
        return 'D';
    } else if (input >= 0 && input < 60) { // Set E jika input ≥ 0 dan < 60
        return 'E';
    }
}

console.log(scoreReport(90)); // A
console.log(scoreReport(89)); // B
console.log(scoreReport(75)); // C
console.log(scoreReport(59)); // E
console.log(scoreReport(101)); // invalid input
console.log(scoreReport(-1)); // invalid input
console.log(scoreReport("sembilan puluh")); // invalid input


//SOAL 4
/**
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 * 
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */

function loopCheckOddEven(input) {
    if (typeof input !== 'number' || isNaN(input) || input < 1) { // Handle validasi : harus number, tidak NaN (Kosong), dan lebih dari 0 atau tidak negatif
        console.log('invalid input');
        return;
    }

    for (let i = 1; i <= input; i++) {
        if (i % 2 === 0) { // Kalau input genap
            console.log(`${i} => Bilangan Genap`);
        } else { // Set ganjil
            console.log(`${i} => Bilangan Ganjil`);
        }
    }
}

loopCheckOddEven(5)
// 1 => Bilangan Ganjil
// 2 => Bilangan Genap
// 3 => Bilangan Ganjil
// 4 => Bilangan Genap
// 5 => Bilangan Ganjil
loopCheckOddEven("lima") // invalid input


//SOAL 5
/**
 * Menghitung Total Jumlah Angka
 * 
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */

function totalValue(input) {
    if (typeof input === "number" && !isNaN(input)) { // Cek input harus angka dan tidak boleh kosong
        let totalNumber = 0;
        for (let index = 1; index <= input; index++) {
            totalNumber = totalNumber + index;
        }
        return totalNumber; // Return hasil penjumlahan, bukan hanya mencetaknya
    } else {
        return "invalid input"; // Return jika hasil invalid, untuk handle "undefined" jika ada Human/System Error
    }
}

console.log(totalValue(100)); // 5050
console.log(totalValue("empat")); // invalid input


//SOAL 6
/**
 * Menghitung huruf vokal
 * 
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */

ffunction checkVowels(input) {
    if (typeof input !== 'string') { // Handle inputan harus string, kalau tidak return 'invalid input'
        return 'invalid input';
    }

    let count = 0; // set total pertama kali 0
    const vocals = ['a', 'e', 'i', 'o', 'u']; // buat array untuk menyimpan huruf vokal

    for (let i = 0; i < input.length; i++) {
        let char = input[i].toLowerCase(); // Untuk mengatas case-sensitive, buat toLowerCase (karena array vocal yang kita set adalah huruf kecil), kalau ingin merubahnya ke huruf besar alias toUpperCase(), ganti juga const vocal ke huruf besar seperti 'A', 'I', dst...
        if (vocals.includes(char)) { // Cek apakah karakter termasuk vocal
            count++; // Tambah counting jika termasuk
        }
    }

    return count;
}

console.log(checkVowels("I Love JavaScript")); // 6
console.log(checkVowels("mie ayam")); //4


//SOAL 7
/**
 * Cek karakter vokal atau konsonan
 * 
 * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama checkVowelConsonant.
 * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
 * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
 * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
 * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
 */

function checkVowelConsonant(char) {
    // code di scope ini yaa
    // handle case-insensitive, maka set toLowerCase
    let lowerChar = char.toLowerCase();

    // Cek jika vokal
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        return "Vokal";
    } else if (lowerChar >= 'a' && lowerChar <= 'z') { // Jika bukan vokal, maka set konsonan
        return "Konsonan";
    } else { // Selalu buat handle jika invalid input
        return "invalid input";
    }
}

console.log(checkVowelConsonant('A')); // Output: "Vokal"
console.log(checkVowelConsonant('b')); // Output: "Konsonan"
console.log(checkVowelConsonant('a')); // Output: "Vokal"


//SOAL 8
/**
 * Menentukan kelayakan Voting
 * 
 * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama canVote.
 * 2. Fungsi tersebut harus menerima satu parameter age.
 * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
 * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
 */

function canVote(age) {
    // code di scope ini yaa
    if (typeof age !== 'number' || isNaN(age) || age < 0) { // Buat validasi input pertama kali, karena harus angka, tidak NaN, dan tidak negatif
        return 'invalid input';
    }

    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canVote(20)); // true
console.log(canVote(17)); // false


//SOAL 9
/**
 * Menentukan Hari dalam Seminggu
 * 
 * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama getDayName.
 * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
 * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
 *      a. 1: "Senin"
 *      b. 2: "Selasa"
 *      c. 3: "Rabu"
 *      d. 4: "Kamis"
 *      e. 5: "Jumat"
 *      f. 6: "Sabtu"
 *      g. 7: "Minggu"
 * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
 */

function getDayName(dayNumber) {
    // code disini
    if (typeof dayNumber !== 'number' || isNaN(dayNumber)) { // Handle untuk validasi dayNumber, tidak boleh string ataupun kosong
        return "Nomor hari tidak valid";
    }

    if (dayNumber === 1) {
        return "Senin";
    } else if (dayNumber === 2) {
        return "Selasa";
    } else if (dayNumber === 3) {
        return "Rabu";
    } else if (dayNumber === 4) {
        return "Kamis";
    } else if (dayNumber === 5) {
        return "Jumat";
    } else if (dayNumber === 6) {
        return "Sabtu";
    } else if (dayNumber === 7) {
        return "Minggu";
    } else {
        return "Nomor hari tidak valid";
    }
}

console.log(getDayName(1)); // Output: "Senin"
console.log(getDayName(5)); // Output: "Jumat"
console.log(getDayName(8)); // Output: "Nomor hari tidak valid"


//SOAL 10
/**
 * Membalikkan Array
 * 
 * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
 * 
 * Langkah: 
 * 1. Buat sebuah fungsi bernama reverseArray.
 * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
 * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
 * 4. RETURN array yang telah dibalik.
 */

function reverseArray(arr) {
    // code disini yaa
    if (!Array.isArray(arr)) { // Handle inputan nya harus array, jika tidak 'invalid input'
        return 'invalid input';
    }

    let arrayReverse = []; // set arrayReverse menjadi array kosong dulu, karena nantinya akan kita isi dengan array yang sudah di balik/reverse

    for (let i = arr.length - 1; i >= 0; i--) { // Cek dari elemen terakhi arr terakhir dulu
        arrayReverse.push(arr[i]); // Masukkan ke arrayReverse dengan function push (push merupakan fungsi tetapan dari JavaScript sendiri)
    }

    return arrayReverse; // return hasil arrayReverse
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']


//SOAL 11
/**
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 * 
 */

const isPalindrome = (inputUser) => {
    if (typeof inputUser !== "string") { // Handle untuk memastikan inputan nya string, jika tidak langsung return false
        return false;
    }

    const acceptedInput = inputUser.replace(/\s/g, '').toLowerCase(); // Hapus spasi dan ubah ke huruf kecil (menyamakan huruf besar & kecil), menghindari case sensitive

    let reversed = ''; // Bandingkan dengan versi terbalik
    for (let i = acceptedInput.length - 1; i >= 0; i--) { // Loop dari array terakhir untuk membentuk kata terbalik
        reversed += acceptedInput[i]; 
    }

    return acceptedInput === reversed; // Jika string nya sama pada saat dibalik, return true. Kalau tidak otomatis false
}

console.log(isPalindrome("kasur rusak")); // true
console.log(isPalindrome("kodok")); // true
console.log(isPalindrome("makan malam")); // false