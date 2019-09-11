$('#nono').on('click', function () {
    $('#nono').removeClass('active');
    $('#rotate').removeClass('rotate');
    $('#rotat').removeClass('rotate');
    $('#rota').removeClass('rotate');
    $('#rot').removeClass('rotate');
    $('#ro').removeClass('rotate');
    console.log('remove')
})

$('#explore').on('click', function () {
    $('#nono').addClass('active');
    $('#rotate').addClass('rotate');
    $('#rotat').addClass('rotate');
    $('#rota').addClass('rotate');
    $('#rot').addClass('rotate');
    $('#ro').addClass('rotate');
    console.log('add')
})
