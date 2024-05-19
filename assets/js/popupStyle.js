var allYearsParent = $(".input_dropdown.years");
var allDaysParent = $(".input_dropdown.days");
var allMonthesParent = $(".input_dropdown.monthes");
var allHoursParent = $(".input_dropdown.hours");
var allMinutesParent = $(".input_dropdown.minutes");
var allTime_pireodParent = $(".input_dropdown.time_pireod");
window.onload = function () {

  // Function to generate an array of years
  //   ----------------------------------------
  //   ----------------------------------------
  function generateYears(startYear, endYear) {
    var years = [];
    for (var i = startYear; i <= endYear; i++) {
      years.push(i);
    }
    return years;
  }
  var yearsArray = generateYears(1906, 2099);
  yearsArray.forEach((year) => {
    var span = document.createElement("span");
    span.innerHTML = year;
    $(allYearsParent).append(span);
  });
  // Function to generate an array of Dayes
  //   ----------------------------------------
  //   ----------------------------------------
  function generateDayes(startDayes, endDayes) {
    var Dayes = [];
    for (var i = startDayes; i <= endDayes; i++) {
      Dayes.push(i);
    }
    return Dayes;
  }
  var DayesArray = generateDayes(1, 31);
  DayesArray.forEach((Dayes) => {
    var span = document.createElement("span");
    span.innerHTML = Dayes;
    $(allDaysParent).append(span);
  });
  // Function to generate an array of Dayes
  //   ----------------------------------------
  //   ----------------------------------------
  function generateMonthes() {
    var Monthes = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    Monthes.forEach((Monthes) => {
      var span = document.createElement("span");
      span.innerHTML = Monthes;
      $(allMonthesParent).append(span);
    });
  }
  generateMonthes();

  // Function to generate an array of Dayes
  //   ----------------------------------------
  //   ----------------------------------------
  function generateHours(startHours, endHours) {
    var Hours = [];
    for (var i = startHours; i <= endHours; i++) {
      Hours.push(i);
    }
    return Hours;
  }
  var HoursArray = generateHours(1, 12);
  HoursArray.forEach((Hours) => {
    var span = document.createElement("span");
    span.innerHTML = Hours;
    $(allHoursParent).append(span);
  });

  // Function to generate an array of Dayes
  //   ----------------------------------------
  //   ----------------------------------------
  function generateTimePeriods() {
    var TimePeriods = ["am", "pm"];

    TimePeriods.forEach((TimePeriods) => {
      var span = document.createElement("span");
      span.innerHTML = TimePeriods;
      $(allTime_pireodParent).append(span);
      // console.log(TimePeriods);
    });
  }
  generateTimePeriods();

  // Function to generate an array of Minutes
  //   ----------------------------------------
  //   ----------------------------------------
  function generateMinutes(startMinutes, endMinutes) {
    var Minutes = [];
    for (var i = startMinutes; i <= endMinutes; i++) {
      Minutes.push(i);
    }
    return Minutes;
  }
  var MinutesArray = generateMinutes(1, 60);
  MinutesArray.forEach((Minutes) => {
    var span = document.createElement("span");
    span.innerHTML = Minutes;
    $(allMinutesParent).append(span);
  });

  //   Put values in inputs
  $(".input_dropdown span").on("click", function () {
    let valueClick = $(this).text();
    let input_naewValue = $(this).parent().parent().find("input")[0];
    $(input_naewValue).val(valueClick);
    $(".click_dropdown .input_dropdown").addClass("hide");
  });
};

$(".click_dropdown").on("click", function () {
  $(".click_dropdown .input_dropdown").addClass("hide").css("opacity", 0);

  $(this).find(".input_dropdown").removeClass("hide").animate(
    {
      opacity: 1,
    },
    100
  );
});

$(".close-modal, .send_video").on("click", function () {
  $(".click_dropdown .input_dropdown").addClass("hide");
});

// ////////////////

$(".remove_card").on("click", function () {
  let grandParentElement = $(this).closest(".left_column_feed")[0];
  let grangParentLength =
    $(grandParentElement).find(".card.is-birthday-card.hide").length + 1;
  let parentWantRemoved = $(this).closest(".card");
  $(parentWantRemoved).fadeOut(500);
  setTimeout(() => {
    $(parentWantRemoved).addClass("hide");
  }, 501);
  if (
    grangParentLength ===
    $(grandParentElement).find(".card.is-birthday-card").length
  ) {
    $(grandParentElement).hide();
    $(".activity_feed_columns").css("justify-content", "center");
    $(".navbar_feed_column_is_6").addClass("is-9");
  }
});
