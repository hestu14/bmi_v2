$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

function LightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
};