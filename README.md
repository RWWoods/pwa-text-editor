# pwa-text-editor

## Description

PWA-text-editor provides an in-browser text editor that uses a service worker and IndexedDb to save content and perform even when offline. This project also webpack to bundle the content for use in browser.

## Installation

you will need node project manager (npm) in order to the dev dependencies. Start with the root package.json, where npm install is scripted to also perform installs in the client and server packages. The "npm run start" script will use webpack to build our "dist" folder for use in browser, and will start the server in the backend. 

## Usage

You can find the deployed version of this app [here](https://whispering-chamber-67649.herokuapp.com/). You can use the text editor to jot down notes, or snippets of code. You can also try going offline, where the app will still work thanks to the service worker package. 

## Credits

I used the starter code provided by PENNLPS coding bootcamp for this project, and the resources provided by our in-class activites. 

## License

Standard MIT license.