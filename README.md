# BMS Mobile

BMS (API) client app for mobile devices. *Warning:* Heavily bleeding edge right now, for demo and prototyping purposes only.

## Run

* Clone this repo and change to the directory where cloned.
* Assuming node and npm are already installed, install cordova and ionic `npm install -g cordova ionic`
* Currently the base URL for BMSAPI service is hardcoded in `www/js/app.js` to `http://localhost:19080/bmsapi`. Either checkout and run BMSAPI locally or change the URL in app.js to a running instance of BMSAPI
* Run `ionic serve` to run in browser.
* To run in android emulator as a native app do:
  * Make sure `ant` is installed and is on class path.
  * `ionic platform add android`
  * `ionic build android`
  * `ionic emulate android` 


