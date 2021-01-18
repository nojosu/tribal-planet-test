# Getting Started

This project was made for Tribal Planet as part of an inital test. Please note that this repository contains the application that was deployed to Heroku. This means that the frontend's React code is located in the build directory, minimized. If you'd wish to view the un-minimized React code, you may visit the corresponding repository:

https://github.com/nojosu/tribal-web/tree/master

Otherwise, you can stay in this repository,

## Running from Heroku

You can run the application that was deployed to Heroku, which includes the frontend (React) and the backend (Node.js) by visiting the following link:

https://fierce-ravine-21806.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `node start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

If you make edits, you must restart the server to view them, unless you use the following script.\

### `node run dev`

Launches the application and the nodemon to detect any changes in the source code, and restart the server if there are any.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Code Design Choices

### Components

As with any React application, this app has been created with different components, which can be divided into three categories:
- Channels
- Activities
- Miscellaneous

Components under the "Channels" category are, as their name implied, related to MPACT's channels: the channel list, a channel card for said list, the details of said channel, and the description contained in said details.

Components for Activities are similar, focusing on displaying a list of activities, an activity card for said list, and so on.

Finally, components under the "Miscellaneous" category contain everything else: mainly the credits, a navigation bar for the main menu, and a navigation bar for when the details of a given element are displayed.

### State Management

Naturally, the application uses React's state management to know what page to display. Since it was requested to do a single-page application, this app does everything on a single page: state management is used to determine whether we display a channel's or an activity's details, and which one we show to the user. This is done on the ChannelList and ChannelDetails components, respectively: these display different information depending on the state of two corresponding variables: _channelView_ and _activityView._

#### channelView

If a change in the state of _channelView_ is detected, a channel's details will be displayed according to the value of said state. The only method able to change channelView's state is, naturally, setChannelView, which is called the ChannelList component if the user clicks on a given channel on the main menu.

An application bar is also shown when a given channel's details are displayed: DetailsBar. Clicking on the "Back" button of said bar will return channelView's value to zero, going back to the last view.

#### activityView

Similarly to _channelView_, activityView controls what activity's details are displayed. If the current state of activityView is different than zero, an activity's details will be displayed according to the value of said state. Just as with channelView, clicking the Back button on the DetailsBar component will remove an activity's details from the current view.

### API

A Node.js server was created to serve this app. As the requirements requested to recreate three screens that need a simple get request, this was easy. The server was also created using Express.js and uses a simple static JSON file as its database, which you can find in this repository under the name "db.json". The API only required a GET method, as the application only needed to obtain information about channels and their activities. 

Had the application required more functionality (like actually modifying steps or even creating new activities), other HTTP request methods like POST or PUT could have been used.

The API's sole endpoint is /api/channels, which returns the full list of channels after parsing it from our static DB.

### Graphic User Interface

Material UI was implemented for the creation of the application's GUI. Material UI's Grid component allows the application to be responsive, so that it adapts to the current screen size, adjusting each of the screen's components. Below, you can find some examples with the ChannelList and the ChannelDetails views.

Other Material UI components used include:
- Card (for the list views)
- Box (for multiple text sections)
- Typography
- App bar

#### Grid Responsiveness Examples 

**Channel list:**

_Small screen_

![Channel list, small screen](https://i.imgur.com/wOm5h4m.png)


_Large screen_

![Channel list, large screen](https://i.imgur.com/wZMnax6.png)


**Channel details:**

_Small screen_

![Channel details, small screen](https://i.imgur.com/OCpxJpm.png)


_Large screen_

![Channel details, large screen](https://i.imgur.com/ALJY28f.png)







