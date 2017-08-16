function adminForm() {
  $('#passwordChange').on('click', (e)=> {
    e.preventDefault();
    $('.hidden-password').toggleClass('active');
  });
}

function userAdmin() {
  $('#addUser').on('click', (e)=> {
    e.preventDefault();
    $('#newUser').toggleClass('active');
    $('#addUser').toggleClass('hidden');
    $('#saveUser').toggleClass('hidden');
  });
}

function sliderContructor(node) {
  node.kendoSlider({
      increaseButtonTitle: "Right",
      decreaseButtonTitle: "Left",
      min: 0,
      max: 100,
      smallStep: 5,
      largeStep: 25
  }).data("kendoSlider");
}

function createChart(newChart) {
  newChart.node.kendoChart({
      title: {
          text: newChart.title
      },
      legend: {
          position: "bottom"
      },
      chartArea: {
          background: ""
      },
      seriesDefaults: {
          type: "line",
          style: "smooth"
      },
      series: newChart.data,
      valueAxis: {
          labels: {
              format: "{0}%"
          },
          line: {
              visible: false
          },
          axisCrossingValue: -10,
          min: 0,
          max: 100
      },
      categoryAxis: {
          categories: ["50s.", "40s.", "30s.", "20s.", "10s.", "0s."],
          majorGridLines: {
              visible: false
          },
          labels: {
              rotation: "auto"
          }
      },
      tooltip: {
          visible: true,
          format: "{0}%",
          template: "#= series.name #: #= value #"
      }
  });
}

function logsAplicative(newChart) {
  newChart.node.kendoChart({
      title: {
          text: newChart.title
      },
      legend: {
          position: "bottom"
      },
      chartArea: {
          background: ""
      },
      seriesDefaults: {
          type: "area",
          style: "smooth",
          stack: true
      },
      series: newChart.data,
      valueAxis: {
          labels: {
              format: "{0}%"
          },
          line: {
              visible: false
          },
          axisCrossingValue: -10,
          min: 0,
          max: 100
      },
      categoryAxis: {
          categories: ["04hrs.", "08hrs.", "12hrs.", "16hrs.", "20hrs.", "24hrs."],
          majorGridLines: {
              visible: false
          },
          labels: {
              rotation: "auto"
          }
      },
      tooltip: {
          visible: true,
          format: "{0}%",
          template: "#= series.name #: #= value #"
      }
  });
}

// function createGauge() {
//   $("#gauge").kendoRadialGauge({
//     pointer: {
//         value: $("#gauge-value").val()
//     },
//     scale: {
//         minorUnit: 5,
//         startAngle: -30,
//         endAngle: 210,
//         max: 180
//     }
//   });
// }
