var svg5 = dimple.newSvg("#barChartContainer", 590, 600);
    d3.csv("data/damages.agg.csv", function (data) {
      
      var myChart5 = new dimple.chart(svg5, data);
      myChart5.setBounds(60, 30, 510, 355)
      var x5 = myChart5.addCategoryAxis("x", "Events")
      var y5 = myChart5.addMeasureAxis("y", "Affected");
      myChart5.addSeries(null, dimple.plot.bar);
      myChart5.draw();
      y5.titleShape.text("Number of Affected people");
    });


var svg6 = dimple.newSvg("#barChartContainer2", 590, 600);
    d3.csv("data/damages.agg.csv", function (data) {
      
      var myChart6 = new dimple.chart(svg6, data);
      myChart6.setBounds(60, 30, 510, 355)
      var x6 = myChart6.addCategoryAxis("x", "Events")
      var y6 = myChart6.addMeasureAxis("y", "Damages");
      myChart6.addSeries(null, dimple.plot.bar);
      myChart6.draw();
      y6.titleShape.text("Property damages in Millions(USD)");
    });