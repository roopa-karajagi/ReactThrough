import "firebase/messaging"
import firebase from "firebase/app"
import localforage from "localforage"

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalForage: async () => {
    return localforage.getItem("fcm_token")
  },

  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      })
    }

    try {
      const messaging = firebase.messaging()
      const tokenInlocalForage = await this.tokenInlocalForage()

      //if FCM token is already there just return the token
      if (tokenInlocalForage !== null) {
        return tokenInlocalForage
      }

      //requesting notification permission from browser
      const status = await Notification.requestPermission()
      if (status && status === "granted") {
        //getting token from FCM
        const fcm_token = await messaging.getToken()
        if (fcm_token) {
          //console.log(`fcm_token ${fcm_token}`)
          //setting FCM token in indexed db using localforage
          localforage.setItem("fcm_token", fcm_token)
          //return the FCM token after saving it
          return fcm_token
        }
      } else {
        console.log("No permission to send push")
      }
    } catch (error) {
      console.error(error)
      return null
    }
  },
}
export { firebaseCloudMessaging }
