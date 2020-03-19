function main() {
  (function () {
    "use strict";

    /* ==============================================
  	Testimonial Slider
  	=============================================== */

    $("a.page-scroll").click(function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 40
            },
            900
          );
          $(".navbar-default").addClass("on");
          $("#tf-home .overlay").fadeOut(1000, function () {
            // Animation complete.
            $("#tf-menu").fadeIn(2000);
            $("#tf-home").slideUp(2000, function () {
              if (first) {
                $("body")
                  .stop()
                  .animate({ scrollTop: 0 });
                first = false;
              }
            });
          });
          return false;
        }
      }
    });

    /*====================================
    Show Menu on Book
    ======================================*/
    var first = true;
    var images = $(".fakeBG .fakeBGimage");
    var time = images.length * 8000;
    var changeBG = function () {
      setInterval(function () {
        console.log(" seconds");
      }, 1000);
      images.each(function (index) {
        var i = (index + 1) * 8000;
        var ind = index;
        setTimeout(function () {
          images.stop().fadeOut(1000);
          images.eq(ind).fadeIn(1000);
        }, i);
        if (index == images.length - 1) {

        }
      });
    }

    var setLoop = function () {
      setInterval(function () {
        changeBG();
      }, time);
    };


    $("body").scrollspy({
      target: ".navbar-default",
      offset: 80
    });

    $(document).ready(function () {
      $("#splashScroll").click(function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        $(this).attr("disabled", "disabled");
        changeBG();
        setLoop();
      });
      $("#mycontactform-submit").click(function () {
        $.post("send.php", $("#mycontactform").serialize(), function (response) {
          $("#success").show("fast");
          if (response.indexOf("Invalid") >= 0) {
            $("#success").addClass("invalid");
          } else {
            $("#success").removeClass("invalid");
          }
          $("#success").html(response);
          setTimeout(function () {
            $("#success").hide("slow");
          }, 3000);
        });
        return false;
      });

      $("#team").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: true,
        itemsCustom: [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 4],
          [1200, 4],
          [1400, 4],
          [1600, 4]
        ]
      });

      $("#clients").owlCarousel({
        navigation: false, // Show next and prev buttons
        navigationText: [
          '<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
          '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'
        ],
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: true,
        itemsCustom: [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 4],
          [1200, 5],
          [1400, 5],
          [1600, 5]
        ]
      });

      $("#testimonial").owlCarousel({
        navigation: false, // Show next and prev buttons
        navigationText: [
          '<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
          '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'
        ],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
      });
    });

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function () {
      var $container = $("#lightbox");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
      $(".cat a").click(function () {
        $(".cat .active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    });
  })();
}
main();