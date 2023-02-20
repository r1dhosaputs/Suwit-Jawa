var tanya = true;
while (tanya) {
    // menangkap pilihan players
    var p = prompt("Pilih : Gajah, Semut, Orang");

    // menangkap pilihan computer



    // membangkitkan / generate bilangan random
    var comp = Math.random(); //javascript library math ga ush dipikirin dlu ktnya nanti bisa dipelajari

    if ( comp < 0.34 ) {
        comp = "Gajah";  
    }

    else if ( comp >= 0.34 && comp <0.67 ) {
        comp = "Orang";
    }

    else {
        comp = "Semut";
    }

    var hasil = "";


    // menentukan rules
    if ( p == comp ) {
        hasil = "SERI"
    }

    else if ( p == "Gajah" ) {
        hasil = ( comp == "Orang" ) ? "MENANG" : "KALAH"
    }

    else if ( p == "Orang" ) {
        hasil = ( comp == "Gajah" ) ? "KALAH" : "MENANG"
    }

    else if ( p == "Semut" ) {
        hasil = ( comp == "Orang" ) ? "KALAH" : "MENANG"
    } 

    else {
        hasil = "MEMASUKKAN PILIHAN YANG SALAH ANJIR ZZZZ"
    }
        


    // menampilkan hasilnya bre!
    alert( "KAMU MEMILIH : " + p + " DAN KOMPUTER MEMILIH : " + comp + "\nMaka Hasilnya : Kamu " + hasil )

    tanya = confirm("LAGI?")
}

alert("terimakasih sudah bermain")
