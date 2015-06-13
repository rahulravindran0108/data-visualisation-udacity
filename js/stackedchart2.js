var svg3 = dimple.newSvg("#stackedChartContainer", 890, 400);
    d3.csv("data/damageagg.csv", function (data) {
      
      var myChart3 = new dimple.chart(svg3, data);
      myChart3.setBounds(60, 30, 805, 305);
      var x3 = myChart3.addCategoryAxis("x", "year");
      x3.addOrderRule("year");
      myChart3.addMeasureAxis("y", "damage");
      
      var s3 = myChart3.addSeries("label", dimple.plot.line);
      myChart3.addLegend(60, 10, 500, 20, "right");
      myChart3.draw();
    });