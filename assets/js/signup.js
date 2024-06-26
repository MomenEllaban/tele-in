"use strict";
/*! signup.js | Friendkit | © Css Ninja. 2019-2020 */ $(function () {
    if (
        ($(".progress-wrap .dot").on("click", function () {
            var e = $(this),
                t = e.attr("data-step");
            e
                .closest(".progress-wrap")
                .find(".bar")
                .css("width", t + "%"),
                e.siblings(".dot").removeClass("is-current"),
                e.addClass("is-active is-current"),
                e.prevAll(".dot").addClass("is-active"),
                e.nextAll(".dot").removeClass("is-active"),
                $(".process-panel-wrap").removeClass("is-active"),
                $(".step-title").removeClass("is-active"),
                "0" == t
                    ? $("#signup-panel-1, #step-title-1").addClass("is-active")
                    : "25" == t
                        ? $("#signup-panel-2, #step-title-2").addClass("is-active")
                        : "50" == t
                            ? $("#signup-panel-3, #step-title-3").addClass("is-active")
                            : "75" == t
                                ? $("#signup-panel-4, #step-title-4").addClass("is-active")
                                : "100" == t && $("#signup-panel-5, #step-title-5").addClass("is-active");
        }),
            $(".process-button").on("click", function () {
                var e = $(this),
                    t = e.attr("data-step");
                e.addClass("is-loading"),
                    setTimeout(function () {
                        e.removeClass("is-loading"), $("#" + t).trigger("click");
                    }, 800);
            }),
            $("#profile-pic-dz").length)
    )
        var e = new Dropzone("#profile-pic-dz", {
            maxFilesize: 8,
            acceptedFiles: ".jpeg,.jpg,.png",
            clickable: ".upload-button",
            init: function () {
                this.on("error", function (e, t) {
                    console.log(t), this.removeFile(e);
                }),
                    null != this.files[1] && this.removeFile(this.files[0]);
            },
            transformFile: function (t, i) {
                $("#crop-modal").addClass("is-active");
                var s = document.createElement("div");
                (s.style.position = "absolute"),
                    (s.style.left = 0),
                    (s.style.right = 0),
                    (s.style.top = 0),
                    (s.style.bottom = 0),
                    (s.style.zIndex = 9999),
                    (s.style.backgroundColor = "#fff"),
                    document.getElementById("cropper-wrapper").appendChild(s);
                var a = document.createElement("button");
                (a.style.position = "absolute"),
                    (a.style.right = "10px"),
                    (a.style.bottom = "10px"),
                    (a.style.zIndex = 9999),
                    (a.textContent = "Crop"),
                    a.classList.add("button"),
                    s.appendChild(a),
                    a.addEventListener("click", function () {
                        n.getCroppedCanvas({ width: 256, height: 256 }).toBlob(function (s) {
                            e.createThumbnail(s, e.options.thumbnailWidth, e.options.thumbnailHeight, e.options.thumbnailMethod, !1, function (a) {
                                e.emit("thumbnail", t, a), i(s);
                                var o = new FileReader();
                                (o.onload = function (e) {
                                    $("#upload-preview").attr("src", s.dataURL),
                                        $(".picture-container")
                                            .webuiPopover({
                                                title: "",
                                                content: 'Your photo is ready to be uploaded. Hit the "Save Changes" button to complete the upload process.',
                                                animation: "pop",
                                                width: 300,
                                                style: "inverse",
                                                placement: "top",
                                                offsetTop: -16,
                                            })
                                            .trigger("click");
                                }),
                                    o.readAsDataURL(t);
                            });
                            var a = new FileReader();
                            a.addEventListener("loadend", function (e) { }), a.readAsBinaryString(s);
                        }),
                            document.getElementById("cropper-wrapper").removeChild(s),
                            document.getElementById("crop-modal").classList.remove("is-active");
                    });
                var o = new Image();
                (o.src = URL.createObjectURL(t)), s.appendChild(o);
                var n = new Cropper(o, { aspectRatio: 1 });
            },
        });
    $("#signup-finish").on("click", function () {
        var e = $(this);
        e.addClass("is-loading"),
            setTimeout(function () {
                window.location = "/navbar-v1-feed.html";
            }, 800);
    });
});


// new function for 3 


