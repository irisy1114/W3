$(function () {
    // preload audio
    var toastAudio = new Audio('toast.wav');
    var toast = $('#toast').toast({ autohide: false });

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toastAudio.pause();
        // reset the audio
        toastAudio.currentTime = 0;
        // play audio
        toastAudio.play();
        var productName = $(this).data("name");
        console.log(productName);
        //display productname on the toast
        $('#product').html(productName);
        // display code# on the toast
        $('#code').html($(this).data("code"));       
        toast.toast('show');
    });

    $(document).on('keydown',(e)=>{
        e.preventDefault();
        if ( e.which === 27) 
           toast.toast('hide');
    });
});

