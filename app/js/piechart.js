google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Проблема', 'Частота обращений'],
          ['Не работает экран или не реагирует сенсор', 20],
          ['Разбит экран', 20],
          ['Смартфон не заряжается', 20],
          ['Не работает разъем для наушников', 20],
          ['Не работают динамики', 10],
          ['Не работает камера в телефоне', 10],
          ['Аккумулятор стал быстро разряжаться ', 10]
        ]);

        var options = {
            title: '',
            backgroundColor: 'transparent',
            fontSize: '18',
            fontName: "HelveticaNeueCyr-Thin",
            legend: {
                position: 'labeled',
                maxLines: 2,
                textStyle: {
                    color: '#393939',
                    fontName: "HelveticaNeueCyr-Roman",
                    fontSize: 16,
                    bold: false,
                    italic: false 
                }
            },
            tooltip: {
                trigger: 'Focus',
                textStyle: {
                    color: '#393939',
                    fontName: "HelveticaNeueCyr-Roman",
                    fontSize: 12,
                    bold: false,
                    italic: false, 
                },
            text: 'Percent'
            },
            chartArea:{top: 0, width:'80%',height:'100%'}
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }