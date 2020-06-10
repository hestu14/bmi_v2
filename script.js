$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

function DarkMode() {
    $(document).ready(function () {
        $('body').css('background-image', 'url(background-dark.png)');
        $('.formInput').css('color', 'white');
        $('.container').css('background-color', 'steelblue');
    });
};

function LightMode() {
    $(document).ready(function () {
        $('body').css('background-image', 'url(background-light.png)');
        $('.formInput').css('color', 'black');
        $('.container').css('background-color', 'skyblue');
    });
};


function HitungBMI() {

    var nama = document.getElementById("inputNama").value;
    var berat = document.getElementById("inputBerat").value;
    var tinggi = document.getElementById("inputTinggi").value;
    var nilaiBMI = document.getElementById("nilaiBMI");
    var NamaKamu = document.getElementById("NamaKamu");
    var GradeBadan = document.getElementById("GradeBadan");

    var BMI;

    BMI = berat / ((tinggi / 100) * (tinggi / 100));
    BMIfixed = BMI.toFixed(2);
    console.log(BMIfixed);

    nilaiBMI.innerHTML = "Nilai BMI kamu : " + BMIfixed;

    NamaKamu.innerHTML = "Hai " + nama;

    var grade;

    if (BMIfixed < 18.5) grade = "Berat badan kamu kurang <br> Makan lagi yang banyak !!!"
    else if (BMIfixed < 22.9) grade = "Berat badan kamu normal <br> Bagus pertahankan !!!"
    else if (BMIfixed < 29.9) grade = "Berat badan kamu cenderung obesitas <br> Ayo mulai kurangi ngemil !!!"
    else grade = "Berat badan kamu obesitas <br> Ayo mulai program diet dari sekarang !!!";

    GradeBadan.innerHTML = grade;



    // BMIideal = 22.9

    // Turun1 = BMIideal * ((Tinggi / 100) * (Tinggi / 100));
    // Turun2 = Berat - Turun1;
    // Turun2fixed = Turun2.toFixed(2)

    // Turun2if = "";

    // if (BMIfixed > 22.9) Turun2if = Turun2fixed
    // else Turun2if = 0;



    // Namagrade = Hai + Nama2 + grade
    // if (Nama1 !== "" && Berat !== "" && Tinggi !== "")
    //   alert(`${Namagrade}`)
    // else alert('Data yang kamu isi gak lengkap !');
}