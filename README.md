# Getting Started

This project was made for Tribal Planet as part of an inital test. Please note that this repository only contains the code for the React application for an easier viewing, as the project deployed to Heroku (which also includes a Node.js server) has a minimized version of it. If you'd wish to test the deployed application, feel free to try the following link:
https://fierce-ravine-21806.herokuapp.com/

You can also clone that other repository to run the backend and the frontend locally.

This document, however, will exclusively focus on how to run the React frontend application (without the Node.js server).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

You will not need this command for now, as it serves no purpose in testing.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

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







