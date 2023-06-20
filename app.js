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

  const setDate = () => {};

  $(".J-datepicker-range-day").datePicker({
    language: "en",
    hasShortcut: true,
    showMonths: 1,
    format: "YYYY-MM-DD",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
  });
  console.log("datePicker: ");

  // Change the position of the calendar dropdown
  $(".J-datepicker-range-day").on("click", function () {
    $(".c-datepicker-date-range-picker").css({
      // top: "50%", // Adjust the vertical position as needed
      // left: "35%", // Adjust the horizontal position as needed
    });
  });
});

// chart code here
// var options = {
//   chart: {
//     type: "line",
//   },
//   series: [
//     {
//       name: "sales",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//     },
//   ],
//   xaxis: {
//     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);

// chart.render();

// var options = {
//   series: [
//     {
//       data: [
//         {
//           x: "TEAM A",
//           y: [10, 12],
//         },
//         {
//           x: "TEAM B",
//           y: [16, 18],
//         },
//         {
//           x: "TEAM C",
//           y: [18, 23],
//         },
//       ],
//     },
//   ],
//   chart: {
//     height: 450,
//     type: "rangeBar",
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       barHeight: "50px",
//     },
//   },
//   xaxis: {
//     categories: [
//       // "M.V Jawad",
//       // "M.V Nasir",
//       // "M.V Awal","M.V Sahin",
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23,
//     ],
//   },
//   stroke: {
//     width: 1,
//   },
//   fill: {
//     type: "solid",
//     opacity: 0.6,
//   },
//   legend: {
//     position: "top",
//     horizontalAlign: "left",
//   },
//   chart: {
//     toolbar: {
//       show: false,
//       offsetX: 0,
//       offsetY: 0,
//       tools: {
//         download: true,
//         selection: false,
//         zoom: false,
//         zoomin: false,
//         zoomout: false,
//         pan: false,
//         reset: false | '<img src="/static/icons/reset.png" width="20">',
//         customIcons: [],
//       },
//       autoSelected: false,
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

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
    height: 450,
    type: "rangeBar",
    zoom:false,
  },

  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "70%",
      borderRadius: "30",
      distributed: true,
    },
  },
  xaxis: {
    type: "numeric",
    min: 0,
    max: 23,
    tickAmount: 24,

    // labels: {
    //   formatter: function (value) {
    //     return value.toString();
    //   },
    // range: 1,
    // type: "category",
    // labels: Array.from({ length: 24 }, (_, i) => i.toString()),
    // labels: {
    //   formatter: function (value) {
    //     return value.toString();
    //   },
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
        borderRadius: 4,
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
  },
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
  autoSelected: false,
};

  var sum = 0;
var totalHoursData = options.series[0].data.map(function (item) {

  var diff = item.y[1] - item.y[0];
  sum = sum + diff;
  // var totalHours = diff > 0 ? diff : 24 + diff;
  console.log(sum); // Calculate total hours
  return {
    x: item.x,
    // totalHours: totalHours,
  };
});
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
