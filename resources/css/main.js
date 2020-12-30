////====== animation =====
// jkn page ready hobe tkn thik moto animation dekhabe



// A $( document ).ready() block.
// $(document).ready(function() {
//     console.log("ready!");
// });

// ==== scroll mybtn ====

// <!-- ==== mybtn ==== -->

// <!-- get the btn -->

mybutton = document.getElementById("myBtn");
window.scroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// === animation

$(document).ready(function() {

    // scroll korle animation dekhabe

    $(window).scroll(function() {

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if ((positiontop > 10) && (positiontop < 100)) {


            $('#main-head-cont').addClass('animate__animated animate__bounceInLeft');

        }

        if ((positiontop > 300) && (positiontop < 450)) {

            $('#headCont1').addClass('animate__animated animate__slideInUp');

        }

        if ((positiontop > 500) && (positiontop < 700)) {

            $('#col1').addClass(' animate__animated animate__slideInLeft');
            $('#col2').addClass('animate__animated animate__slideInRight');

        }

        if ((positiontop > 800) && (positiontop < 1000)) {

            $('#col3').addClass(' animate__animated animate__slideInLeft');
            $('#col4').addClass('animate__animated animate__slideInRight');

        }
        if ((positiontop > 1025) && (positiontop < 1080)) {

            $('#aboutus').addClass(' animate__animated animate__fadeInDown');


        }

        if ((positiontop > 1459) && (positiontop < 1659)) {

            $('#col5').addClass(' animate__animated animate__slideInLeft');
            $('#col6').addClass('animate__animated animate__slideInRight');

        }

        if ((positiontop > 1759) && (positiontop < 1845)) {

            $('#chef').addClass(' animate__animated animate__rotateInDownLeft');


        }

        if ((positiontop > 2157) && (positiontop < 2357)) {

            $('#card1').addClass(' animate__animated animate__bounceInLeft');
            $('#card2').addClass('animate__animated animate__zoomInDown');
            $('#card3').addClass('animate__animated animate__flipInX');

        }
        if ((positiontop > 2457) && (positiontop < 2557)) {

            $('#featureanim').addClass(' animate__animated animate__rotateInDownLeft');


        }
        if ((positiontop > 3156) && (positiontop < 3256)) {

            $('#menuanim').addClass(' animate__animated animate__rotateInDownLeft');


        }
        if ((positiontop > 3656) && (positiontop < 3856)) {

            $('#menu1').addClass(' animate__animated animate__slideInLeft');
            $('#menu2').addClass('animate__animated animate__slideInRight');

        }

        if ((positiontop > 3956) && (positiontop < 4056)) {

            $('#contactanim').addClass(' animate__animated animate__rotateInDownLeft');


        }
        if ((positiontop > 4256) && (positiontop < 4456)) {

            $('#cont1').addClass(' animate__animated animate__slideInLeft');
            $('#cont2').addClass('animate__animated animate__slideInRight');

        }

    });
});