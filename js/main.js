var svg = dimple.newSvg("#chartContainer", 890, 400);
      d3.csv("data/events.agg.csv", function (data) {
        data = dimple.filterData(data, "YEAR", [
              "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"
          ]);
        var indicator = new dimple.chart(svg, data);
        // Pick blue as the default and orange for the selected month
        var defaultColor = indicator.defaultColors[0];
        var indicatorColor = indicator.defaultColors[2];
        // The frame duration for the animation in milliseconds
          var frame = 2000;

          var firstTick = true;

          // Place the indicator bar chart to the right
          indicator.setBounds(734, 49, 153, 311);

          // Add dates along the y axis
          var y = indicator.addCategoryAxis("y", "YEAR");
          y.addOrderRule("YEAR", "Desc");
          // Use sales for bar size and hide the axis
          var x = indicator.addMeasureAxis("x", "COUNT");
          x.hidden = true;

          // Add the bars to the indicator and add event handlers
          var s = indicator.addSeries(null, dimple.plot.bar);
          s.addEventHandler("click", onClick);
          // Draw the side chart
          indicator.draw();

          // Remove the title from the y axis
          y.titleShape.remove();

          // Remove the lines from the y axis
          y.shapes.selectAll("line,path").remove();

          // Move the y axis text inside the plot area
          y.shapes.selectAll("text")
                  .style("text-anchor", "start")
                  .style("font-size", "11px")
                  .attr("transform", "translate(18, 0.5)");

          // This block simply adds the legend title. I put it into a d3 data
          // object to split it onto 2 lines.  This technique works with any
          // number of lines, it isn't dimple specific.
          svg.selectAll("title_text")
                  .data(["Click bar to select",
                      "and pause. Click again",
                      "to resume animation"])
                  .enter()
                  .append("text")
                  .attr("x", 735)
                  .attr("y", function (d, i) { return 15 + i * 12; })
                  .style("font-family", "sans-serif")
                  .style("font-size", "10px")
                  .style("color", "Black")
                  .text(function (d) { return d; });

          // Manually set the bar colors
          s.shapes
                  .attr("rx", 10)
                  .attr("ry", 10)
                  .style("fill", function (d) { return (d.y === '1990' ? indicatorColor.fill : defaultColor.fill) })
                  .style("stroke", function (d) { return (d.y === '1990' ? indicatorColor.stroke : defaultColor.stroke) })
                  .style("opacity", 0.4);

        
        var myChart = new dimple.chart(svg, data);
        
        myChart.setBounds(60, 50, 655, 310);
        var newx = myChart.addMeasureAxis("x", "COUNT");
        var newy = myChart.addMeasureAxis("y", "FATALITIES");
        var newz = myChart.addMeasureAxis("z", "INJURIES");
        myChart.addSeries(["STATE"], dimple.plot.bubble);
        myChart.addLegend(60, 10, 0, 0);
        var story = myChart.setStoryboard("YEAR",onTick);
        story.frameDuration = frame;
        story.addOrderRule("YEAR");
        myChart.draw();

        newy.overrideMax = 120;
        newx.overrideMax = 3000;

        myChart.legends = [];
          // Remove the storyboard label because the chart will indicate the
          // current month instead of the label
          story.storyLabel.remove();

        // On click of the side chart
          function onClick(e) {
              // Pause the animation
              story.pauseAnimation();
              // If it is already selected resume the animation
              // otherwise pause and move to the selected month
              if (e.yValue === story.getFrameValue()) {
                  story.startAnimation();
              } else {
                  story.goToFrame(e.yValue);
                  story.pauseAnimation();
              }
          }

          // On tick of the main charts storyboard
          function onTick(e) {
              if (!firstTick) {
                  // Color all shapes the same
                  s.shapes
                          .transition()
                          .duration(frame / 2)
                          .style("fill", function (d) { return (d.y === e ? indicatorColor.fill : defaultColor.fill) })
                          .style("stroke", function (d) { return (d.y === e ? indicatorColor.stroke : defaultColor.stroke) });
              }
              firstTick = false;
          }


      });