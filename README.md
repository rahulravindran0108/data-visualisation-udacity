# STORM DATSET EXPLORER


## Summary

This application is based on the U.S. National Oceanic and Atmospheric Administration's (NOAA) storm database.

Source code is available on the [GitHub](https://github.com/rahulravindran0108/data-visualisation-udacity).

The application is primarily designed to tell the story oh how different events have caused loss of damage to population and economy in USA. It depicts this story with the help of the various maps and other interactive graphs.

Key Questions Answered Here are:
- Which events contribute to the economic and population loss the most?

The storm dataset is huge and hence I have gone ahead with giving a sequential storyline. Therefore, in sequential design I have gone ahead with establishing the following order of events:

- Give a backdrop as to how events have increased over the years
- End the story by giving a visualisation to describe what caused the events.

You will find that the events that caused the most damage to health was not responsible for the same cause in terms of property.

## Design

### data cleaning

Our data is derived from the [NOAA Storm Database](https://d396qusza40orc.cloudfront.net/repdata%2Fdata%2FStormData.csv.bz2). The initial set has 902,297 observations. We first throw away all data that does not contain information we are interested in by filtering out data that did not cause fatalities, injuries or damage.The entire cleaning was done in R and the dataset is available in the data folder.

### Choice of representation of data

## Initial Design Choices

The main story is to discuss the effects of events by state and by year. Decisions based on yearly data are given below:

- The very first graph shows the trend of number of weather events that have occured over the years. In order to show the trend of increasing events, I decided to go with line chart. This is used to describe how the events have increased over the years.
- I have used line charts to describe the trend of fatalities and injuries. These two categories cover population impact. A similar line chart used to describe the trend of crop damages to property damage. This is used to describe the economic impact over the years.

To Show the story with respect to states I went ahead with the following design decision

- A bubble chart was used to show the trend of both population and economic impact for the states. I went ahead with bubble charts because this would clearly depict all the 50 states of USA in a single graph and also show their transition over the years 2000-2011 where the most events have taken place.
- In order to explain which events caused so many damages ove the years, I went ahead with bar charts. The bar chart can be used to effecively display histograms or occurences of events, which was needed to depict in this case.

## Final Design Choices based on feedback

- I decided to go with line chart to fist provide a backdrop as to how the events have increased over the years.
- Now, in order to show the main story as to what are events that have caused damages to property and health I went ahead with concentric pie charts. This was done so that it could be easily compared to both property and health damages by having the same colour encoding.

## justification for design choices

- In the first graph, I went ahead with a line chart. x-axis depicts time and y axis the values of events that have occurred. I went ahead with the line chart over bar chart or even a scatter plot because i terms of a line chart you can easily see the upward trend better than a bar chart or scatter plot. It is very easy atthe first glance to notice this.
- I went ahead with pie charts simply because since the information is in terms of percentage it is easier to compare the two. Plotting a stacked bar chart would have simply been not possible because the scales are different. Hence this would clearly be the best choice as you could easily see that events that caused the most effect on health did not cause the most property damage.


## Feedback

Following are the comments from interviews conducted

### Interview 1

> What do you notice in the visualization?

I notice a bubble graph, but what should I infer from it is not very clear. There is too much movement with respect to the axes to notice what is going on.

> What questions do you have about the data?
I feel I don't have sufficient backdrop to what I am looking at. Probably adding a few annotations would suffice

> What do you think is the main takeaway from this visualization?
I can understand that you are looking at storm data and depicting some kind of injuries and fatalities. But the transitions are too quick and the labels look squat in case of buuble graph. It also does not load very well on my browser.

### Interview 2
> What do you notice in the visualization?

Graph look good, not very intuitive any connection between by state and by year?
Give a storyline so I can understand what is going on. There are two different elements of story that is going on, what should I infer?

> What questions do you have about the data?

Change in axes show that there has been increase in events over the years leading to fatalities and injuries. However, I cannot infer much because I can't see labels to hold back the visualisation to a particular year.

> What do you think is the main takeaway from this visualization?

Look, for the most part there is no prior information to what I am looking at. There is a compelling story behind your visualisation but I won't understand unless I look at some facts before.

### Interview 3

> What do you notice in the visualization?

Too many elements stacked in terms of graphs, can't understand what is what. I am looking at too many elemtns, hence feeling disoriented. Do you think you could simplify the graph or not include the bubble graph to show the results you want to tell. Stick to a single story

Please provide some kind of backdrop as to what is it you are trying to explain. I believe answering the other questions are pointless unless you go ahead with redesigning and proving prior information



### Redesigning based on the feedback
Previous Application can be found in the 
index.html and index-final.html is the main file.

### Post-feedback Design

Following the feedback from the 3 interviews, I implemented the following changes:

- Included a storyline to move through the content.
- Stuck to a single story line and included a pie chart to depict the main story.

## References

- http://shinyapps.io/
- http://shiny.rstudio.com/tutorial/
- http://rstudio.github.io/shiny/tutorial/
- U.S. National Oceanic and Atmospheric Administration's (NOAA) storm database.

