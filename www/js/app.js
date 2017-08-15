'use strict';

$(function () {
    $('.notif').on('click', function () {
        $('#notificationsContainer').toggleClass('active');
        function myFunction() {
            document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
        }
    });
    // Charts:
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

    $(document).ready(function () {
        createChart({
            title: "PC use in %",
            data: [{
                name: "Use",
                data: [40, 50, 30, 80, 95, 20],
                color: "#90E6D4"
            }],
            node: $('#chartProcesor')
        });
        createChart({
            title: "MEMORY use in %",
            data: [{
                name: "Use",
                data: [39, 54, 90, 60, 55, 10],
                color: "#197C68"
            }],
            node: $('#chartMemory')
        });
    });
    // end charts

    // Speedometer:
    function createGauge() {
        $("#gauge").kendoRadialGauge({

            pointer: {
                value: $("#gauge-value").val()
            },

            scale: {
                minorUnit: 5,
                startAngle: -30,
                endAngle: 210,
                max: 180
            }
        });
    }

    $(document).ready(function () {
        createGauge();

        function updateValue() {
            $("#gauge").data("kendoRadialGauge").value($("#gauge-value").val());
        }

        if (kendo.ui.Slider) {
            $("#gauge-value").kendoSlider({
                min: 0,
                max: 180,
                showButtons: false,
                change: updateValue
            });
        } else {
            $("#gauge-value").change(updateValue);
        }

        $(document).bind("kendo:skinChange", function (e) {
            createGauge();
        });
    });
});