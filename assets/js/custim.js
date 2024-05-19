generalBtn = $(".modal_trigger_general");
for_you_btn = $(".for_you_btn");
boxType = $("#compose-card");

$(for_you_btn).on("click", function () {
  $(".app-overlay, .modal_trigger_general").addClass("is-active");
  $(this).addClass("is-active");
  $(generalBtn).removeClass("is-active");

  $(boxType).css("z-index", "999999");
  $(".close-publish").css("display", "flex");
});
$(generalBtn).on("click", function () {
  $(".app-overlay, .modal_trigger_general").addClass("is-active");
  $(".for_you_btn").removeClass("is-active");
  $(this).addClass("is-active");

  $(boxType).css("z-index", "999999");
  $(".close-publish").css("display", "flex");
});
$(".close-publish").on("click", function () {
  $(".close-publish").css("display", "none");
  $(boxType).css("z-index", "1");
  $(".app-overlay, .modal_trigger_general").removeClass("is-active");
  $(".for_you_btn").addClass("is-active");
});

emptyStar = `<svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`

notEmptyStar = `
<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 0 15.09 8.61 24 9.35 18 15.27 20.18 24 12 20.54 3.82 24 6 15.27 0 9.35 8.91 8.61 12 0" fill="#ffc200"></polygon>
</svg>
`


$(".star").on("click", function () {
  if ($(this).hasClass("notEmptyStar")) {
    $(this).removeClass("notEmptyStar").addClass("emptyStar")
    $(this).empty()
    $(this).append(emptyStar)
  } else {
    $(this).removeClass("emptyStar").addClass(" notEmptyStar")
    $(this).empty()
    $(this).append(notEmptyStar)
  }
});



$(".setting_direction").on("click", function () {
  $(".ar").addClass("active_dir")
  if ($(".list_direction").hasClass("hide")) {
    $(".list_direction").removeClass("hide")
  } else {
    $(".list_direction").addClass("hide")
  }
})

$(".ar").on("click", changeToRTL)
$(".en").on("click", changeToLTR)

// English
function changeToLTR() {
  $('.media').removeClass("active_dir")
  $(this).addClass("active_dir")
  $('body').removeClass('direction-rtl').addClass('direction-ltr')
  $(".dashboard-aside").css("left", "0", "right", 'auto')
  $(".likers-text, .icon.is-small").css("margin-left", "10px", "margin-right", "0px")
  $('#main-feed.container:not(.is-max-desktop):not(.is-max-widescreen)').removeClass('reversePadding')
  $(".navbar-burger, .mobile-navbar .navbar-brand .navbar-item:nth-child(2),.dropdown.is-spaced.is-right, .social-count").addClass("cancleMright").removeClass("cancleMRleft")
  // new 
  $(".table_component table").addClass("text_align_left")
  // $(".modal_title h2").addClass("text_align_left")
  // $(".modal_title p").addClass("text_align_left")


}
// arabic
function changeToRTL() {
  $('.media').removeClass("active_dir")
  $(this).addClass("active_dir")
  $('body').removeClass('direction-ltr').addClass('direction-rtl');
  $(".likers-text, .icon.is-small").css("margin-right", "25px", "margin-left", "0px")
  $(".dashboard-aside").css("right", "0", "left", 'auto')
  $(".navbar-burger, .mobile-navbar .navbar-brand .navbar-item:nth-child(2),.dropdown.is-spaced.is-right, .social-count").addClass("cancleMRleft").removeClass("cancleMright")
  $('#main-feed.container:not(.is-max-desktop):not(.is-max-widescreen)').addClass('reversePadding');
  // new 
  $(".table_component table").addClass("text_align_right")
  // $(".modal_title h2").addClass("text_align_right")
  // $(".modal_title p").addClass("text_align_right")



}
$("html").on("click", function () {
  let timeClear = setInterval(() => {
    if (!$(".nav-drop").hasClass("is-active")) {
      $(".icon-link:not(.arrow), .user-image").removeClass("icon_arrow")
    }
  }, 10);
  setTimeout(() => {
    clearInterval(timeClear)
  }, 11);
})


$(".icon-link:not(.arrow), .user-image").on("click", function () {
  $(".icon-link, .user-image").removeClass("icon_arrow")

  setTimeout(() => {
    $(this).addClass("icon_arrow")
  }, 100);

})