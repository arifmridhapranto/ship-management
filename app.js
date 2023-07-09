$(document).ready(function () {
  // Initialize the date picker
  var DATAPICKERAPI = {
    activeMonthRange: function () {
      return {
        begin: moment().set({ date: 1 }).format("YYYY-MM-DD"),
        end: moment()
          .set({ hour: 23, minute: 59, second: 59 })
          .format("DD-MM-YYYY"),
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
    format: "DD-MM-YYYY",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
    hide: function () {
      const start = $(this).Val();
      console.log(start);
      console.log("its working 2");
    },
    show: function () {
      // const start = $(this).val();
      // console.log(start);
      console.log("its working");
    },
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
    hide: function () {
      const start = $(".start").val();
      const end = $(".end").val();

      let startDateShow = document.getElementById("CraneSDate");
      let endDateShow = document.getElementById("CraneEDate");
      console.log(startDateShow, endDateShow);
      startDateShow.innerText = start.toString();
      endDateShow.innerText = end.toString();
      console.log(start, end);
      var modal = document.getElementById("crane-weekly-chart");
      modal.style.display = "block";

      // Add event listener to close the modal
      var closeBtn = modal.querySelector(".btn-close");
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    },
    show: function () {
      console.log("its working");
    },
  });
  $(".custom-date-breakdown2").datePicker({
    language: "en",
    isRange: true,
    hasShortcut: true,
    showMonths: 1,
    format: "YYYY-MM-DD",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
    hide: function () {
      const start = $(".start2").val();
      const end = $(".end2").val();
      console.log(start, end);
      let startDateShow = document.getElementById("generatorSDate");
      let endDateShow = document.getElementById("generatorEDate");
      console.log(startDateShow, endDateShow);
      startDateShow.innerText = start.toString();
      endDateShow.innerText = end.toString();

      var modal = document.getElementById("generator-weekly-chart");
      modal.style.display = "block";

      // Add event listener to close the modal
      var closeBtn = modal.querySelector(".btn-close");
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    },
    show: function () {
      console.log("its working");
    },
  });
  $(".custom-date-breakdown3").datePicker({
    language: "en",
    isRange: true,
    hasShortcut: true,
    showMonths: 1,
    format: "YYYY-MM-DD",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
    hide: function () {
      const start = $(".start3").val();
      const end = $(".end3").val();

      let startDateShow = document.getElementById("engineSDate");
      let endDateShow = document.getElementById("engineEDate");
      console.log(startDateShow, endDateShow);
      startDateShow.innerText = start.toString();
      endDateShow.innerText = end.toString();
      console.log(start, end);
      var modal = document.getElementById("engine-weekly-chart");
      modal.style.display = "block";

      // Add event listener to close the modal
      var closeBtn = modal.querySelector(".btn-close");
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    },
    show: function () {
      console.log("its working");
    },
  });
  $(".custom-date-breakdown4").datePicker({
    language: "en",
    isRange: true,
    hasShortcut: true,
    showMonths: 1,
    format: "YYYY-MM-DD",
    isRange: true,
    between: "month",
    shortcutOptions: DATAPICKERAPI.rangeShortcutOption1,
    hide: function () {
      const start = $(".start4").val();
      const end = $(".end4").val();

      let startDateShow = document.getElementById("otherSDate");
      let endDateShow = document.getElementById("otherEDate");
      console.log(startDateShow, endDateShow);
      startDateShow.innerText = start.toString();
      endDateShow.innerText = end.toString();
      console.log(start, end);
      var modal = document.getElementById("other-weekly-chart");
      modal.style.display = "block";

      // Add event listener to close the modal
      var closeBtn = modal.querySelector(".btn-close");
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    },
    show: function () {
      console.log("its working");
    },
  });
});

// Crane Chart data

$(document).ready(function () {
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
      // foreColor: "#fff",
      toolbar: {
        show: false,
      },

      height: 300,
      type: "rangeBar",
      zoom: false,
      events: {
        click: function (event, chartContext, config) {},
        xAxisLabelClick: function (event, chartContext, config) {},
        dataPointSelection: function (event, chartContext, config) {
          var modal = document.getElementById("graphModal");
          modal.style.display = "block";

          // Add event listener to close the modal
          var closeBtn = modal.querySelector(".btn-close");
          closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
          });
          window.addEventListener("click", function (event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          });
        },
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: "15",
        distributed: true,
        style: {
          color: "#FFF",
        },
        dataLabels: {
          style: {
            color: "#FFF",
          },
        },
      },
    },
    colors: [
      // this array contains different color code for each data
      "#F06B41",
      "#F0DE42",
      "#93F042",
      "#42F0B9",
      "#42BCF0",
      "#4251F0",
      "#7942F0",
      "#C342F0",
      "#F042CA",
      "#F04242",
    ],
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
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: "color",
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.5,
      //   opacityTo: 1,
      //   colorStops: [
      //     {
      //       offset: 0,
      //       color: "#F46152  ",
      //       opacity: 1,
      //     },
      //     {
      //       offset: 100,
      //       color: "#D33728 ",
      //       opacity: 1,
      //     },
      //   ],
      // },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
      // x: {
      //   show: true,
      //   formatter: function (value) {
      //     // console.log(value[1] - value[0]);
      //     return value;
      //   },
      // },
      // y: {
      //   show: true,
      //   formatter: function (value) {
      //     return value;
      //   },
      // },
      grid: {
        show: true,
        borderColor: "#f0f0f0",
        strokeDashArray: 0,
        position: "back",
        // column: {
        //   colors: ["#F44336", "#E91E63", "#9C27B0"],
        // },
        // row: {
        //   color: ["#F44336", "#E91E63", "#9C27B0"],
        // },
        xaxis: {
          formatter: function (value) {
            console.log(value);
            return "X-Axis Label: " + value;
          },
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

  let sum1 = 0;
  let totalHoursData = options.series[0].data.map(function (item) {
    let diff = item.y[1] - item.y[0];
    sum1 = sum1 + diff;
    // let totalHours = diff > 0 ? diff : 24 + diff;
    // Calculate total hours
    return sum1;
  });

  const total = document.getElementById("total1");
  total.innerText = sum1.toString() + " hours";

  let craneChart = new ApexCharts(
    document.querySelector("#craneChart"),
    options
  );
  craneChart.render();
});

// Generator Chart Data

$(document).ready(function () {
  let options = {
    series: [
      {
        data: [
          {
            x: "M.V Jawad",
            y: [2, 5],
          },
          {
            x: "M.V Nasir",
            y: [1, 7],
          },
          {
            x: "M.V Awal",
            y: [9, 13],
          },
          {
            x: "M.V Sahin",
            y: [16, 20],
          },
          {
            x: "M.V Jawad",
            y: [15, 23],
          },
          {
            x: "M.V Nasir",
            y: [19, 21],
          },
          {
            x: "M.V Sahin",
            y: [2, 4],
          },
        ],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      // foreColor:"#FFF",
      height: 300,
      type: "rangeBar",
      zoom: false,
      events: {
        click: function (event, chartContext, config) {},
        xAxisLabelClick: function (event, chartContext, config) {},
        dataPointSelection: function (event, chartContext, config) {
          let modal = document.getElementById("generatorModal");
          modal.style.display = "block";

          // Add event listener to close the modal
          let closeBtn = modal.querySelector(".btn-close");
          closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
          });
          window.addEventListener("click", function (event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          });
        },
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: "15",
        distributed: true,
      },
    },
    colors: [
      // this array contains different color code for each data
      "#F06B41",
      "#F0DE42",
      "#93F042",
      "#42F0B9",
      "#42BCF0",
      "#4251F0",
      "#7942F0",
      "#C342F0",
      "#F042CA",
      "#F04242",
    ],
    xaxis: {
      type: "numeric",
      min: 0,
      max: 23,
      tickAmount: 24,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        let diff = val[1] - val[0];
        return diff + (diff > 1 ? " Hours" : " Hour");
      },
      offsetX: 0,
      offsetY: 0,
      // style: {
      //   colors: "#ffffff",
      //   background: {
      //     enabled: true,
      //     // foreColor: "#000000",
      //     padding: 8,
      //     borderRadius: 50,
      //     borderWidth: 1,
      //     borderColor: "#ffffff",
      //   },
      // },
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: "solid",
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.5,
      //   opacityTo: 1,
      //   colorStops: [
      //     {
      //       offset: 0,
      //       color: "#F46152  ",
      //       opacity: 1,
      //     },
      //     {
      //       offset: 100,
      //       color: "#D33728 ",
      //       opacity: 1,
      //     },
      //   ],
      // },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
      grid: {
        show: true,
        borderColor: "#f0f0f0",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          formatter: function (value) {
            return "X-Axis Label: " + value;
          },
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

  let sum = 0;
  let totalHoursData = options.series[0].data.map(function (item) {
    let diff = item.y[1] - item.y[0];
    sum = sum + diff;
    // let totalHours = diff > 0 ? diff : 24 + diff;
    // Calculate total hours
    return sum;
  });

  const totals = document.getElementById("total2");
  totals.innerText = sum.toString() + " hours";

  let generateChart = new ApexCharts(
    document.querySelector("#generateChart"),
    options
  );
  generateChart.render();
});

// Main Engine Chart Data

$(document).ready(function () {
  let options = {
    series: [
      {
        data: [
          {
            x: "M.V Jawad",
            y: [13, 15],
          },
          {
            x: "M.V Nasir",
            y: [0, 3],
          },
          {
            x: "M.V Awal",
            y: [0, 7],
          },
          {
            x: "M.V Sahin",
            y: [1, 2],
          },
          {
            x: "M.V Jawad",
            y: [6, 7],
          },
          {
            x: "M.V Nasir",
            y: [9, 14],
          },
          {
            x: "M.V Sahin",
            y: [2, 6],
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
      events: {
        click: function (event, chartContext, config) {},
        xAxisLabelClick: function (event, chartContext, config) {},
        dataPointSelection: function (event, chartContext, config) {
          let modal = document.getElementById("mainEngineModal");
          modal.style.display = "block";

          // Add event listener to close the modal
          let closeBtn = modal.querySelector(".btn-close");
          closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
          });
          window.addEventListener("click", function (event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          });
        },
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: "15",
        distributed: true,
      },
    },
    colors: [
      // this array contains different color code for each data
      "#F06B41",
      "#F0DE42",
      "#93F042",
      "#42F0B9",
      "#42BCF0",
      "#4251F0",
      "#7942F0",
      "#C342F0",
      "#F042CA",
      "#F04242",
    ],
    xaxis: {
      type: "numeric",
      min: 0,
      max: 23,
      tickAmount: 24,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        let diff = val[1] - val[0];
        return diff + (diff > 1 ? " Hours" : " Hour");
      },
      offsetX: 0,
      offsetY: 0,
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: "solid",
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.5,
      //   opacityTo: 1,
      //   colorStops: [
      //     {
      //       offset: 0,
      //       color: "#F46152  ",
      //       opacity: 1,
      //     },
      //     {
      //       offset: 100,
      //       color: "#D33728 ",
      //       opacity: 1,
      //     },
      //   ],
      // },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
      grid: {
        show: true,
        borderColor: "#f0f0f0",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          formatter: function (value) {
            return "X-Axis Label: " + value;
          },
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

  let sum = 0;
  let totalHoursData = options.series[0].data.map(function (item) {
    let diff = item.y[1] - item.y[0];
    sum = sum + diff;
    // let totalHours = diff > 0 ? diff : 24 + diff;
    // Calculate total hours
    return sum;
  });

  const totals = document.getElementById("total3");
  totals.innerText = sum.toString() + " hours";

  let engineChart = new ApexCharts(
    document.querySelector("#engineChart"),
    options
  );
  engineChart.render();
});

// Other Chart Data

$(document).ready(function () {
  let options = {
    series: [
      {
        data: [
          {
            x: "M.V Jawad",
            y: [13, 15],
          },
          {
            x: "M.V Nasir",
            y: [0, 3],
          },
          {
            x: "M.V Awal",
            y: [0, 7],
          },
          {
            x: "M.V Sahin",
            y: [1, 2],
          },
          {
            x: "M.V Jawad",
            y: [6, 7],
          },
          {
            x: "M.V Nasir",
            y: [9, 14],
          },
          {
            x: "M.V Sahin",
            y: [2, 6],
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
      events: {
        click: function (event, chartContext, config) {},
        xAxisLabelClick: function (event, chartContext, config) {},
        dataPointSelection: function (event, chartContext, config) {
          let modal = document.getElementById("otherChartModal");
          modal.style.display = "block";

          // Add event listener to close the modal
          let closeBtn = modal.querySelector(".btn-close");
          closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
          });
          window.addEventListener("click", function (event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          });
        },
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: "15",
        distributed: true,
      },
    },
    colors: [
      // this array contains different color code for each data
      "#F06B41",
      "#F0DE42",
      "#93F042",
      "#42F0B9",
      "#42BCF0",
      "#4251F0",
      "#7942F0",
      "#C342F0",
      "#F042CA",
      "#F04242",
    ],
    xaxis: {
      type: "numeric",
      min: 0,
      max: 23,
      tickAmount: 24,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        let diff = val[1] - val[0];
        return diff + (diff > 1 ? " Hours" : " Hour");
      },
      offsetX: 0,
      offsetY: 0,
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: "solid",
      // type: "gradient",
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.5,
      //   opacityTo: 1,
      //   colorStops: [
      //     {
      //       offset: 0,
      //       color: "#F46152  ",
      //       opacity: 1,
      //     },
      //     {
      //       offset: 100,
      //       color: "#D33728 ",
      //       opacity: 1,
      //     },
      //   ],
      // },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
      grid: {
        show: true,
        borderColor: "#f0f0f0",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          formatter: function (value) {
            return "X-Axis Label: " + value;
          },
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

  let sum = 0;
  let totalHoursData = options.series[0].data.map(function (item) {
    let diff = item.y[1] - item.y[0];
    sum = sum + diff;
    // let totalHours = diff > 0 ? diff : 24 + diff;
    // Calculate total hours
    return sum;
  });

  const totals = document.getElementById("total4");
  totals.innerText = sum.toString() + " hours";

  let otherChart = new ApexCharts(
    document.querySelector("#otherChart"),
    options
  );
  otherChart.render();
});

// print modal
// var myModal = document.getElementById("myModal");
// var myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

// const modalPrint = document.getElementById("CranesprintButton");

// modalPrint.addEventListener("click", function () {
//   console.log("Print");
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
// printWindow.close();
// });

//Print js here
jQuery(document).ready(function () {
  // cranes modal print
  jQuery("#CranesprintButton").click(function () {
    jQuery("#myModal").print();
  });
  // generator modal print
  jQuery("#GeneratorprintButton").click(function () {
    jQuery("#myModal2").print();
  });

  // generator modal print
  jQuery("#engineprintButton").click(function () {
    jQuery("#myModal3").print();
  });
  // generator modal print
  jQuery("#otherprintButton").click(function () {
    jQuery("#myModal4").print();
  });
  jQuery("#GrabStatusprintButton").click(function () {
    jQuery("#weekly-grab-status").print();
  });
  jQuery("#shoreprintButton").click(function () {
    jQuery("#weekly-shore-status").print();
  });
  jQuery("#manPowerModalButton").click(function () {
    jQuery("#manPowerModal").print();
  });
  jQuery("#total-repair-button").click(function () {
    jQuery("#Total-repair").print();
  });
  jQuery("#Total-grabs-button").click(function () {
    jQuery("#Total-grabs").print();
  });
});

// navigation buttons

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(".main-section").toggleClass("active");
  });

  $(".more-button, .body-overlay").on("click", function () {
    $("#sidebar, .body-overlay").toggleClass("show-nav");
  });
});

//Crane Chart modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Crane 1", "Crane 2", "Crane 3", "Crane 4"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var modalChart = new ApexCharts(
    document.querySelector("#modalChart"),
    options
  );
  modalChart.render();
});

//Generator Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Crane 1", "Crane 2", "Crane 3", "Crane 4"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var innerGeneratorModal = new ApexCharts(
    document.querySelector("#innerGeneratorModal"),
    options
  );
  innerGeneratorModal.render();
});

//Main Engine Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Crane 1", "Crane 2", "Crane 3", "Crane 4"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var innerMainEngineModal = new ApexCharts(
    document.querySelector("#innerMainEngineModal"),
    options
  );
  innerMainEngineModal.render();
});

//Other Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Crane 1", "Crane 2", "Crane 3", "Crane 4"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var innerOtherChart = new ApexCharts(
    document.querySelector("#innerOtherChart"),
    options
  );
  innerOtherChart.render();
});

//weekly or selected crane date Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["MV Sahin", " MV Awal", "Mv Nasir", "MV Jawad"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var weeklyChartCrane = new ApexCharts(
    document.querySelector("#weeklyChartCrane"),
    options
  );
  weeklyChartCrane.render();
});
//weekly or selected Generator date Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["MV Sahin", " MV Awal", "Mv Nasir", "MV Jawad"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var weeklyChartGenerator = new ApexCharts(
    document.querySelector("#weeklyChartGenerator"),
    options
  );
  weeklyChartGenerator.render();
});
//weekly or selected Engine date Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["MV Sahin", " MV Awal", "Mv Nasir", "MV Jawad"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var weeklyChartEngine = new ApexCharts(
    document.querySelector("#weeklyChartEngine"),
    options
  );
  weeklyChartEngine.render();
});
//weekly or selected Others date Chart Modal
$(document).ready(function () {
  var options = {
    // HoistingWire: [
    //   {
    //     data: [0.3, 2, 1, 0.8],
    //   },
    // ],
    // LuffingWire: [
    //   {
    //     data: [0.5, 1.3, 2, 1],
    //   },
    // ],

    series: [
      {
        name: "Hoisting Wire",
        data: [0.3, 2, 1, 0.8],
      },
      {
        name: "Luffing Wire",
        data: [0.5, 1.3, 2, 1],
      },
    ],
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        // Modify the tooltip content here
        return "Custom Tooltip: " + val;
      },
    },
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      // stackType: '100%',
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        distributed: true,
      },
      dataLabels: {
        position: "top", // Position the labels above the columns
        formatter: function (val, opts) {
          const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Array of colors for each data point
          const colorIndex = opts.dataPointIndex; // Get the index of the data point
          opts.w.config.chart.colors = colors; // Assign the colors array to the chart configuration
          return val; // Return the original value for the label
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["MV Sahin", " MV Awal", "Mv Nasir", "MV Jawad"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      categories: ["30Min", "1hr", "1.30hr", "2hr"],
      labels: {
        style: {
          // colors: colors,
          fontSize: "12px",
        },
        // title: {
        //   text: "hrs",
        // },
      },
    },
  };

  var weeklyChartOther = new ApexCharts(
    document.querySelector("#weeklyChartOther"),
    options
  );
  weeklyChartOther.render();
});


// Generating GrabTimelineData list items dynamically
const GrabTimelineData = [
  {
    date: "10 Jan 2023",
    status: "Landed Tranship",
    vessel: "M.V Jawad",
    ClassItems: "complete",
  },
  {
    date: "11 Jan 2023",
    status: "Jetty",
    vessel: "Shadharghat",
    ClassItems: "complete",
  },
  {
    date: "10 Jan 2023",
    status: " Landed Tranship",
    vessel: "M.V Jawad",
    ClassItems: "complete",
  },
  {
    date: "10 Jan 2023",
    status: " Landed Tranship",
    vessel: "M.V Jawad",
    ClassItems: "",
  },
];

const html = GrabTimelineData.map(
  (item) => `
  <li class="li ${item.ClassItems}">
    <div class="timestamp">
      <span class="date">${item.date}</span>
    </div>
    <div class="status">
      <h5>${item.status}</h5>
      <h6>${item.vessel}</h6>
    </div>
  </li>
`
).join("");
const timelineElement = document.getElementById("grabs-timeline-list");
console.log(timelineElement);
timelineElement.innerHTML = html;



// Generating GrabsHistory list items dynamically
const GrabsHistory = [
  {
    date: "10 Jan 2023",
    status: "Landed Tranship",
    vessel: "M.V Jawad",
    ClassItems: "complete",
  },
  {
    date: "11 Jan 2023",
    status: "Jetty",
    vessel: "Shadharghat",
    ClassItems: "complete",
  },
  {
    date: "10 Jan 2023",
    status: " Landed Tranship",
    vessel: "M.V Jawad",
    ClassItems: "complete",
  },
  {
    date: "10 Jan 2023",
    status: " Landed Tranship",
    vessel: "M.V Jawad",
    ClassItems: "",
  },
];

const GrabsHistoryHtml = GrabsHistory.map(
  (item) => `
  <li class="li ${item.ClassItems}">
    <div class="timestamp">
      <span class="date">${item.date}</span>
    </div>
    <div class="status">
      <h5>${item.status}</h5>
      <h6>${item.vessel}</h6>
    </div>
  </li>
`
).join("");
const historyElement = document.getElementById("GrabsLifeHistory");
console.log(historyElement);
historyElement.innerHTML = GrabsHistoryHtml;
