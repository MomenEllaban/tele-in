/*! settings.js | Friendkit | © Css Ninja. 2019-2020 */
"use strict";
$(function () {
    if ($(".settings-wrapper").length) {
        if ($(".settings-sidebar").length) {
            var t = function () {
                window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(max-width: 768px)").matches ? $(".settings-sidebar").removeClass("is-active") : $(".settings-sidebar").addClass("is-active");
            };
            $(".mobile-sidebar-trigger").on("click", function () {
                $(".settings-sidebar").addClass("is-active");
            }),
                $(".close-settings-sidebar").on("click", function () {
                    $(this).closest(".settings-sidebar").removeClass("is-active");
                }),
                t(),
                $(window).on("resize", function () {
                    t();
                });
        }
        if (
            ($(".settings-sidebar .menu-block li:not('.search-field')").on("click", function () {

                var t = $(this).attr("data-section");
                $(".settings-sidebar .menu-block li").removeClass("is-active"),
                // $(".settings-sidebar .menu-block .chosen-choices li.search-field").removeClass("is-active"),
                    $(this).addClass("is-active"),
                    $(".settings-wrapper .settings-section, .tip-group").removeClass("is-active"),
                    $("#" + t + "-settings").addClass("is-active"),
                    $("#" + t + "-tips").addClass("is-active");
            }),
            $("#country-autocpl").length)
        ) {
            var s = {
                url: "assets/data/api/countries/countries.json",
                getValue: "name",
                template: {
                    type: "custom",
                    method: function (t, s) {
                        return "<div class=template-wrapper><div class=avatar-wrapper><img class=autocpl-avatar src='" + s.pic + "' /></div><div class=entry-text>" + t + "<br><span>" + s.code + "</span></div></div> ";
                    },
                },
                highlightPhrase: !1,
                list: {
                    maxNumberOfElements: 3,
                    showAnimation: { type: "fade", time: 400, callback: function () {} },
                    match: { enabled: !0 },
                    onChooseEvent: function () {
                        $("#country-autocpl").val();
                    },
                },
            };
            $("#country-autocpl").easyAutocomplete(s);
        }
    }
});
