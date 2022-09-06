

$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // random attention seeker
    var attentionSeekers = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
    var randomSeeker = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];

    $('#headline').addClass('animate__' + randomSeeker);

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        var bounceIn = $(this).is(':checked');

        if (this.id == 'selectAll') {
            showBalloon('red', bounceIn);
            showBalloon('blue', bounceIn);
            showBalloon('green', bounceIn);
        }
        else
            showBalloon(this.id, bounceIn);
    });


    // display toast when all checkboxes are unchecked
    $('#submit').click(() => {
        let setFavorite = false;
        const checkboxes = $("[name='favoriteBalloons']");
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                setFavorite = true;
                break;
            }
        }

        if (setFavorite) return;

        const toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
    })


    // select all checkboxes with one click
    $('#selectAll').click(function () {
        $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
    })



    // change the color of "happy birthday" by hovering over each checkbox
    $('.favoriteBalloons').hover(
        function () {
            const color = $(this).attr('checkboxColor');
            $("#headline").css("color", color);
        }, function () {
            $("#headline").css("color", 'slategray');
        })
});

function showBalloon(id, bounceIn) {
    $('#' + id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    bounceIn ?
        $('#' + id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + id + 'Img').addClass('animate__animated animate__bounceOutUp');
}


