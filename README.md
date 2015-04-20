# BMS Mobile

BMS (API) client app for mobile devices. *Warning:* Heavily bleeding edge right now, for demo and prototyping purposes only.

## Run

* Clone this repo and change to the directory where cloned.
* Assuming node and npm are already installed, install cordova and ionic `npm install -g cordova ionic`
* Curretnly the base URL for BMSAPI service is hardcoded in `www/js/app.js` to `http://localhost:19080/bmsapi`. Either checkout and run BMSAPI locally or change the URL in app.js to a running instance of BMSAPI
* Run `ionic serve` to run in browser.
* Run `ionic emulate android` to run in android emulator as a native android app.


