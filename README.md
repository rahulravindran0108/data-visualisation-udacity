# STORM DATSET EXPLORER


## Summary

This application is based on the U.S. National Oceanic and Atmospheric Administration's (NOAA) storm database.

Source code is available on the [GitHub](https://github.com/rahulravindran0108/data-visualisation-udacity).

The application is primarily designed to tell the story oh how different events have caused loss of damage to population and economy in USA. It depicts this story with the help of the various maps and other interactive graphs.

Key Questions Answered Here are:

- What damages are seen to the different states of USA due to events such as flood,tornadoes etc.
- Are the events increasing yearly causing us to believe that climate change has indeed been taking place over the years
- Which events contribute to the economic and population loss the most

## Design

### data cleaning

Our data is derived from the [NOAA Storm Database](https://d396qusza40orc.cloudfront.net/repdata%2Fdata%2FStormData.csv.bz2). The initial set has 902,297 observations. We first throw away all data that does not contain information we are interested in by filtering out data that did not cause fatalities, injuries or damage.The entire cleaning was done in R and the dataset is available in the data folder.

### Choice of representation of data

The main story is to discuss the effects of events by state and by year.
For the first criteria the following choices were made initially:

- I went ahead with line charts to describe the number of events taking place early. A Stacked surface chart was used to compare the economic and population damage caused by the various events.
- A final bar chart was included to show which events caused the most damage to economic and population sector. This was selected in order to show comparison of damages done by each natural event.
- A bubble chart was used to develop a storyboard design showing the effects of weather on the different states of USA.
## Feedback

Following are the comments from interviews conducted

### Interview 1

> so when I had a look at the website you gave me, I did not undertand what I should do?
> Include some kind of about page so that it becomes intuitive what I shpuld be doing.
> The bubble chart does not seem to convy much

### Interview 2
> graphs look good, not very intuitive any connection between by state and by year?
> You seem to make me work more to see what I want, rather explain it to me and make it a good read

### Interview 3
> Too many elements stacked, can't understand what is what
> Please provide some kind of backdrop as to what is it you are trying to explain

### Post-feedback Design

Following the feedback from the 3 interviews, I implemented the following changes:

- Kept the entire content to one page.
- Included a storyline to move through the content.
- Connected the story between by state and by year to capture the user's attention.
- included a bubble chart to depict the trend of number of occurences of events
- Kept minimalistic work for the user.

### Redesigning based on the feedback
Previous Application can be found here:

Following were the changes done to the visual elements:

- Added a bubble chart to show the trend of the events and the total damage among the states over time.
- included bar graphs to describe the events that have caused the most economic or population damage.
- Following two images were added:

![First Analysis](https://raw.github.com/rahulravindran0108/data-visualisation-udacity/tree/master/img/1.png)
![second Analysis](https://raw.github.com/rahulravindran0108/data-visualisation-udacity/tree/master/img/2.png)

## References

- http://shinyapps.io/
- http://shiny.rstudio.com/tutorial/
- http://rstudio.github.io/shiny/tutorial/
- U.S. National Oceanic and Atmospheric Administration's (NOAA) storm database.

