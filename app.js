$(document).ready(function () {
  // Initialize the date picker
  var DATAPICKERAPI = {
    activeMonthRange: function () {
      return {
        begin: moment().set({ date: 1 }).format("YYYY-MM-DD"),
        end: moment()
          .set({ hour: 23, minute: 59, second: 59 })
          .format("YYYY-MM-DD"),
      };
    },
    shortcutMonth: function () {
      var nowDay = moment().get("date");
      var prevMonthFirstDay = moment().subtract(1, "months").set({ date: 1 });
      var prevMonthDay = moment().diff(prevMonthFirstDay, "days");
      return {
        now: "-" + nowDay + ",0",
        prev: "-" + prevMonthDay + ",-" + nowDay,
      };
    },
    shortcutPrevHours: function (hour) {
      var nowDay = moment().get("date");
      var prevHours = moment().subtract(hour, "hours");
      var prevDate = prevHours.get("date") - nowDay;
      var nowTime = moment().format("HH:mm:ss");
      var prevTime = prevHours.format("HH:mm:ss");
      return {
        day: prevDate + ",0",
        time: prevTime + "," + nowTime,
        name: "Nearly " + hour + " Hours",
      };
    },
    rangeMonthShortcutOption1: function () {
      var result = DATAPICKERAPI.shortcutMonth();
      var resultTime = DATAPICKERAPI.shortcutPrevHours(18);
      return [
        {
          name: "Yesterday",
          day: "-1,-1",
          time: "00:00:00,23:59:59",
        },
        {
          name: "This Month",
          day: result.now,
          time: "00:00:00,",
        },
        {
          name: "Lasy Month",
          day: result.prev,
          time: "00:00:00,23:59:59",
        },
        {
          name: resultTime.name,
          day: resultTime.day,
          time: resultTime.time,
        },
      ];
    },
    rangeShortcutOption1: [
      {
        name: "Last week",
        day: "-7,0",
      },
      {
        name: "Last Fifteen Days",
        day: "-15,0",
      },
      {
        name: "Last Month",
        day: "-30,0",
      },
      {
        name: "Last Three Months",
        day: "-90, 0",
      },
      {
        name: "Last Six Months",
        day: "-180, 0",
      },
      {
        name: "Last One Year",
        day: "-365, 0",
      },
    ],
    singleShortcutOptions1: [
      {
        name: "Today",
        day: "0",
        time: "00:00:00",
      },
      {
        name: "Yesterday",
        day: "-1",
        time: "00:00:00",
      },
      {
        name: "One Week Ago",
        day: "-7",
      },
    ],
  };

  $(".J-datepicker-range-day").datePicker({
    language: "en",
    hasShortcut: true,
    showMonths: 1,
    format: "YYYY-MM-DD",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
  });

  $(".custom-date-breakdown").datePicker({
    language: "en",
    isRange: true,
    hasShortcut: true,
    showMonths: 1,
    format: "YYYY-MM-DD",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
  });

  // Change the position of the calendar dropdown
  // $(".J-datepicker-range-day").on("click", function () {
  //   $(".c-datepicker-date-range-picker").css({
  //     // top: "50%", // Adjust the vertical position as needed
  //     // left: "35%", // Adjust the horizontal position as needed
  //   });
  // });
});

var options = {
  series: [
    {
      data: [
        {
          x: "M.V Jawad",
          y: [3, 7],
        },
        {
          x: "M.V Nasir",
          y: [9, 11],
        },
        {
          x: "M.V Awal",
          y: [16, 23],
        },
        {
          x: "M.V Sahin",
          y: [18, 19],
        },
        {
          x: "M.V Jawad",
          y: [9, 13],
        },
        {
          x: "M.V Nasir",
          y: [15, 18],
        },
        {
          x: "M.V Sahin",
          y: [7, 14],
        },
      ],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    height: 300,
    type: "rangeBar",
    zoom: false,
  },

  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "60%",
      borderRadius: "15",
      distributed: true,
    },
  },
  xaxis: {
    type: "numeric",
    min: 0,
    max: 23,
    tickAmount: 24,
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      var diff = val[1] - val[0];
      return diff + (diff > 1 ? " Hours" : " Hour");
    },
    offsetX: 0,
    offsetY: 0,
    style: {
      colors: "#000000",
      background: {
        enabled: true,
        foreColor: "#000000",
        padding: 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#000000",
      },
    },
  },
  stroke: {
    width: 1,
  },
  fill: {
    type: "solid",
    opacity: 0.6,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  // labels: {
  //   // show:true,
  // },
  tooltip: {
    enabled: true,
    grid: {
      show: true,
      borderColor: "#f0f0f0",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
        padding: {
          top: 0,
          right: 42,
          bottom: 0,
          left: 0,
        },
      },
    },
  },
  autoSelected: false,
};

var sum = 0;
var totalHoursData = options.series[0].data.map(function (item) {
  var diff = item.y[1] - item.y[0];
  sum = sum + diff;
  // var totalHours = diff > 0 ? diff : 24 + diff;
  // Calculate total hours
  return sum;
});

const total = document.getElementById("total");
total.innerText = sum.toString() + " hours";

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// print modal
// var myModal = document.getElementById("myModal");
// var myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

// function printFile() {
//   var printWindow = window.open("", "_blank");
//   var printStyles = `
//     <style>
//       /* Hide non-printable elements */
//       body * {
//         display: none;
//       }

//       /* Show the print content */
//       #print-content {
//         display: block;
//       }
//     </style>
//   `;

//   // Get the modal content by its ID
//   var modalContent = document.getElementById("print-content").innerHTML;

//   printWindow.document.write("<html><head>" + printStyles + "</head><body>");
//   printWindow.document.write(modalContent);
//   printWindow.document.write("</body></html>");

//   printWindow.print();
//   printWindow.close();
// }

$(document).ready(function () {
  $(".breakdown-chart #printButton").click(function () {
    var printContents = $("#print-content").html();
    var originalContents = $("body").html();

    $("body").empty().html(printContents);
    window.print();
    $("body").html(originalContents);
  });

  $("#Total-repair #printButton").click(function () {
    var printContents = $("#Total-repair-content").html();
    var originalContents = $("body").html();

    $("body").empty().html(printContents);
    window.print();
    $("body").html(originalContents);
  });

  $("#Total-grabs #printButton").click(function () {
    var printContents = $("#Total-grabs-content").html();
    var originalContents = $("body").html();

    $("body").empty().html(printContents);
    window.print();
    $("body").html(originalContents);
  });
});
