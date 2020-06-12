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
    var isiModal = document.getElementById("isiModal");

    var BMI;
    var grade;

    BMI = berat / ((tinggi / 100) * (tinggi / 100));
    BMIfixed = BMI.toFixed(2);


    if (BMIfixed < 18.5) { grade = "Berat badan kamu kurang <br> Makan lagi yang banyak !!!"; }
    else if (BMIfixed < 22.9) { grade = "Berat badan kamu normal <br> Bagus pertahankan !!!"; }
    else if (BMIfixed < 29.9) { grade = "Berat badan kamu cenderung obesitas <br> Ayo mulai kurangi ngemil !!!"; }
    else { grade = "Berat badan kamu obesitas <br> Ayo mulai program diet dari sekarang !!!"; }

    if (nama !== "" && berat !== "" && tinggi !== "") {
        isiModal.innerHTML = "Hai " + nama + "<br> Nilai BMI kamu : " + BMIfixed + "<br>" + grade;
    }
    else {
        
        isiModal.innerHTML = "Data yang kamu isi belum lengkap !!!";
    }



    // BMIideal = 22.9

    // Turun1 = BMIideal * ((Tinggi / 100) * (Tinggi / 100));
    // Turun2 = Berat - Turun1;
    // Turun2fixed = Turun2.toFixed(2)

    // Turun2if = "";

    // if (BMIfixed > 22.9) Turun2if = Turun2fixed
    // else Turun2if = 0;

}