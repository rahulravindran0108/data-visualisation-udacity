# STORM DATSET EXPLORER


## Summary

This application is based on the U.S. National Oceanic and Atmospheric Administration's (NOAA) storm database.

Source code is available on the [GitHub](https://github.com/rahulravindran0108/storm-dataset-explorer).

The application is primarily designed to tell the story oh how different events have caused loss of damage to population and economy in USA. It depicts this story with the help of the various maps and other interactive graphs.

Key Questions Answered Here are:

- What damages are seen to the different states of USA due to events such as flood,tornadoes etc.
- Are the events increasing yearly causing us to believe that climate change has indeed been taking place over the years?
- Which events contribute to the economic and population loss the most?

The storm dataset is huge and hence I have gone ahead with giving a sequential storyline. Therefore, in sequential design I have gone ahead with establishing the following order of events:

- Give a backdrop as to how events have increased over the years
- Bifurcate the damages into population and economic for better storytelling
- First, include yearly damage story, followed by story depicting state wise damages.
- End the story by giving a visualisation to describe what caused the events.

## Design

### data cleaning

Our data is derived from the [NOAA Storm Database](https://d396qusza40orc.cloudfront.net/repdata%2Fdata%2FStormData.csv.bz2). The initial set has 902,297 observations. We first throw away all data that does not contain information we are interested in by filtering out data that did not cause fatalities, injuries or damage.The entire cleaning was done in R and the dataset is available in the data folder.

### Choice of representation of data

The main story is to discuss the effects of events by state and by year. Decisions based on yearly data are given below:

- The very first graph shows the trend of number of weather events that have occured over the years. In order to show the trend of increasing events, I decided to go with line chart. This is used to describe how the events have increased over the years.
- I have used line charts to describe the trend of fatalities and injuries. These two categories cover population impact. A similar line chart used to describe the trend of crop damages to property damage. This is used to describe the economic impact over the years.

To Show the story with respect to states I went ahead with the following design decision

- A bubble chart was used to show the trend of both population and economic impact for the states. I went ahead with bubble charts because this would clearly depict all the 50 states of USA in a single graph and also show their transition over the years 2000-2011 where the most events have taken place.
- In order to explain which events caused so many damages ove the years, I went ahead with bar charts. The bar chart can be used to effecively display histograms or occurences of events, which was needed to depict in this case.


## Feedback

Following are the comments from interviews conducted

### Interview 1

> What do you notice in the visualization?

I notice a bubble graph, but what should I infer from it is not very clear.

> What questions do you have about the data?
I feel I don't have sufficient backdrop to what I am looking at. Probably adding a few annotations would suffice

> What do you think is the main takeaway from this visualization?
I can understand that you are looking at storm data and depicting some kind of injuries and fatalities. But the transitions are too quick and the labels look squat.

### Interview 2
> What do you notice in the visualization?

Graph look good, not very intuitive any connection between by state and by year?
Give a storyline so I can understand what is going on.

> What questions do you have about the data?

Change in axes show that there has been increase in events over the years leading to fatalities and injuries. However, I cannot infer much because I can't see labels to hold back the visualisation to a particular year.

> What do you think is the main takeaway from this visualization?

Look, for the most part there is no prior information to what I am looking at. There is a compelling story behind your visualisation but I won't understand unless I look at some facts before.

### Interview 3

> What do you notice in the visualization?

Too many elements stacked, can't understand what is what. Do you think you could simplify the graph to show the results you want to tell.

Please provide some kind of backdrop as to what is it you are trying to explain. I believe answering the other questions are pointless unless you go ahead with redesigning and proving prior information



### Redesigning based on the feedback
Previous Application can be found in the 
index.html and also the previous submission index-final.html

### Post-feedback Design

Following the feedback from the 3 interviews, I implemented the following changes:

- Included a storyline to move through the content.
- Connected the story between by state and by year to capture the user's attention.
- Redesigned the bubble chart to display only the information necessary.
- Kept minimalistic work for the user.
- Included a backdrop with a gripping storyline.

## References

- http://shinyapps.io/
- http://shiny.rstudio.com/tutorial/
- http://rstudio.github.io/shiny/tutorial/
- U.S. National Oceanic and Atmospheric Administration's (NOAA) storm database.

