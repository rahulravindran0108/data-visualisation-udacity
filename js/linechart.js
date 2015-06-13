var svg2 = dimple.newSvg("#lineChartContainer", 890, 400);
    d3.csv("data/years.csv", function (data) {
      
      var Chart = new dimple.chart(svg2, data);
      Chart.setBounds(60, 30, 805, 305);
      var x = Chart.addCategoryAxis("x", "YEAR");
      x.addOrderRule("YEAR");
      Chart.addMeasureAxis("y", "COUNT");
      var s = Chart.addSeries("YEAR", dimple.plot.line);
      s.interpolation = "cardinal";
      Chart.addLegend(60, 10, 800, 20, "right");
      Chart.draw();
    });