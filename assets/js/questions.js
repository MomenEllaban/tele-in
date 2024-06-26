"use strict";
/*! questions.js | Friendkit | © Css Ninja. 2019-2020 */ $(function () {
    if ($(".questions-menu, .questions-nav-menu").length) {
        var s = window.location.href;
        "" == (s = (s = (s = s.substring(0, -1 == s.indexOf("#") ? s.length : s.indexOf("#"))).substring(0, -1 == s.indexOf("?") ? s.length : s.indexOf("?"))).substr(s.lastIndexOf("/") + 1)) && (s = "index.html"),
            $(".questions-menu li a").each(function () {
                var e = $(this).attr("href");
                s == e && $(this).closest("li").addClass("is-active");
            }),
            $(".questions-nav-menu .menu-item").each(function () {
                var e = $(this).attr("href");
                s == e && $(this).addClass("is-active");
            });
    }
    $(".questions-nav").length &&
        $(window).scroll(function () {
            $(window).scrollTop() > 160 ? $(".questions-nav").addClass("is-active") : $(".questions-nav").removeClass("is-active");
        }),
        $(".questions-menu").length &&
            $(window).scroll(function () {
                $(window).scrollTop() > 450 ? $(".questions-menu-fixed").addClass("is-faded") : $(".questions-menu-fixed").removeClass("is-faded");
            }),
        $(".question-tabs").length &&
            $(".question-tabs ul li").on("click", function () {
                $(this).siblings("li").removeClass("is-active"), $(this).addClass("is-active");
            }),
        $(".achievements-loader").length &&
            setTimeout(function () {
                $(".achievements-loader").removeClass("is-active");
            }, 4e3),
        $(".achievements-carousel").length &&
            $(".achievements-carousel").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0,
                autoplay: !0,
                centerMode: !0,
                centerPadding: "0",
                arrows: !1,
                prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
                nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
                responsive: [
                    { breakpoint: 1600, settings: { slidesToShow: 3 } },
                    { breakpoint: 1300, settings: { slidesToShow: 2 } },
                    { breakpoint: 1130, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 767, settings: { slidesToShow: 1 } },
                ],
            }),
        $(".questions-settings").length &&
            $(".switch-block .f-switch input").on("change", function () {
                toasts.service.info("", "mdi mdi-progress-check", "Settings saved successfully", "bottomRight", 2500);
            });
});
