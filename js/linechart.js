var svg2 = dimple.newSvg("#lineChartContainer", 890, 400);
    d3.csv("data/years.csv", function (data) {
      
      var Chart = new dimple.chart(svg2, data);
      Chart.setBounds(60, 30, 805, 305);
      var x = Chart.addCategoryAxis("x", "YEAR");
      x.addOrderRule("YEAR");
      var y = Chart.addMeasureAxis("y", "COUNT");

      var s = Chart.addSeries(null, dimple.plot.line);
      Chart.draw();

      y.titleShape.text("Number of Events Occuring");
  });
