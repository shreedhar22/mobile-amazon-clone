## Setup 

### Creating the app skeleton

* Run from terminal: 
```
npx create-expo-app@latest -t
```

* Select Blank Typescript and hit enter


### Launching the app on Expo app

* `npx expo start` 
OR
* `npm start --ios` Press `i`

### If you don't have Expo Go installed on ios simulator on your MAC.

* Make sure to install Expo Orbit first on your MAC: https://expo.dev/orbit
* Follow these steps after to install Expo Go on your IOS simulator for respective SDK version - https://expo.dev/go?sdkVersion=51&platform=ios&device=false (Step 1 to install Expo Orbit is already documented above).

__Note__: On your Iphone, you could just download Expo Go from App Store and just scan the QR code from the terminal to run the app there. To reload just exit out and open the app again.

### Setup Expo routing

 * `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`
 * Follow instructions here to set the Expo Router correctly- https://docs.expo.dev/router/installation/ (steps 2-5 for respective SDK. Step 1 from the documentation is already documented above).

