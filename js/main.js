

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

var svg5 = dimple.newSvg("#barChartContainer", 790, 600);

    d3.csv("data/damages.agg.csv", function (data) {
      
      var myChart5 = new dimple.chart(svg5, data);
      myChart5.setBounds(60, 30, 510, 555)
      //var x5 = myChart5.addCategoryAxis("x", "Events")
      //var y5 = myChart5.addMeasureAxis("y", "Affected");
      //myChart5.addSeries(null, dimple.plot.bar);
      //myChart5.draw();
      //y5.titleShape.text("Number of Affected people");

      
      myChart5.addMeasureAxis("p", "Affected");
      
      var ring = myChart5.addSeries("Events", dimple.plot.pie);
      ring.innerRadius = "90%";
      myChart5.assignColor("TORNADO", "#80B1D3", "#6b94b0", 0.8);
      myChart5.assignColor("THUNDERSTORM / THUNDERSTORM WIND", "#FB8072", "#d26b5f", 0.8);
      myChart5.assignColor("ICE / SNOW / FROST", "#FDB462", "#d39651", 0.8);
      myChart5.assignColor("FLASH FLOOD", "#B3DE69", "#95b957", 0.8);
      myChart5.assignColor("BLIZZARD / WINTER STORM", "#FFED6F", "#d5c65c", 0.8);
      myChart5.assignColor("WIND", "#BC80BD", "#9d6b9e", 0.8);
      myChart5.assignColor("WILDFIRE", "#8DD3C7", "#75b0a6", 0.8);
      myChart5.assignColor("TROPICAL STORM / HURRICANE / TYPHOON", "#CCEBC5", "#CCEBC5", 0.8);
      myChart5.assignColor("HAIL", "#FFFFB3", "#FFFFB3", 0.8);
      myChart5.assignColor("FLOOD", "#BEBADA", "#9e9bb6", 0.8);
      

      myChart5.addLegend(560, 20, 90, 300, "left");
      myChart5.draw();

      var myChart6= new dimple.chart(svg5, data);
      myChart6.setBounds(160, 130, 310, 355)
      //var x5 = myChart5.addCategoryAxis("x", "Events")
      //var y5 = myChart5.addMeasureAxis("y", "Affected");
      //myChart5.addSeries(null, dimple.plot.bar);
      //myChart5.draw();
      //y5.titleShape.text("Number of Affected people");

      
      myChart6.addMeasureAxis("p", "Damages");
      var ring2 = myChart6.addSeries("Events", dimple.plot.pie);
      myChart6.assignColor("TORNADO", "#80B1D3", "#6b94b0", 0.8);
      myChart6.assignColor("THUNDERSTORM / THUNDERSTORM WIND", "#FB8072", "#d26b5f", 0.8);
      myChart6.assignColor("ICE / SNOW / FROST", "#FDB462", "#d39651", 0.8);
      myChart6.assignColor("FLASH FLOOD", "#B3DE69", "#95b957", 0.8);
      myChart6.assignColor("BLIZZARD / WINTER STORM", "#FFED6F", "#d5c65c", 0.8);
      myChart6.assignColor("WIND", "#BC80BD", "#9d6b9e", 0.8);
      myChart6.assignColor("WILDFIRE", "#8DD3C7", "#75b0a6", 0.8);
      myChart6.assignColor("TROPICAL STORM / HURRICANE / TYPHOON", "#CCEBC5", "#CCEBC5", 0.8);
      myChart6.assignColor("HAIL", "#FFFFB3", "#FFFFB3", 0.8);
      myChart6.assignColor("FLOOD", "#BEBADA", "#9e9bb6", 0.8);
      ring2.innerRadius = "80%";
      
      svg5.append("text")
   .attr("x", myChart5._xPixels() + myChart5._widthPixels() / 2)
   .attr("y", myChart5._yPixels() - 20)
   .style("text-anchor", "middle")
   .style("font-family", "sans-serif")
   .style("font-weight", "bold")
   .text("Affected(FATALITIES+INJURIES) and Damages(Property+Crop Damages in Millions(USD))");

      myChart6.draw();
    });


