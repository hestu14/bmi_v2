$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

function DarkMode() {
    $(document).ready(function() {
        $('body').css('background-image', 'url(background-dark.png)');
    });
};

function LightMode() {
    $(document).ready(function() {
        $('body').css('background-image', 'url(background-light.png)');
    });
};