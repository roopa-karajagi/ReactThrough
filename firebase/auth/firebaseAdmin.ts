import * as firebaseAdmin from "firebase-admin"

const privateKey =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQChTLQA3X+f47wU\nVracAB8trZb26u/ZVlHR/liENJV9Sk/1nhN6vd0v7AxTgDGYfB1K1WI14fDUmtbY\nIC2R1EwT22E3FAPu3OvpYGmiYS4MFikRvlG+aTbw1N6f5uKLNBVETmcJOJ71FCGM\nmwBpRSm9Zp3pls4c/7zztJ6Dp2cHnphoVqdgi0Vh/EzQceC6++QQKcejWFvMy+wq\nDlI0tqDKKSSHrGXiUq6UZ19ecTOGhJh99A8D8+Z6z5HN0PK/g7pJCB7PBRj1Lv5Y\nI3mhucVWaZqYZXo9yuQoCzOE2JkdB4VaH82XDiXeS38LmbW+G+ItcNXtYMzchW8K\nQ3R62P6ZAgMBAAECggEATZT5F1lyY1NESXwTxSEB3hSaghUqXBz6qchuhthL9sFh\niEAKGoVr9/rPSvJj6HX6GN5dqJEOJxR6teV0RaoZFYv1TGqiIae9CLlI1cNsRH/8\nLP6fjrhIprmcgsiouk/I0tvrDzJesn6GTHzZS8jqdKEA3zOb27LeDVIY1DYWhkDs\nh567c/iebwP4pjo4Jc1/FjoEVUf4cW8moweQlsWl61YOEJCso+dfvApcfBZThwtV\n60OpJ1Hs1C4fuWdh0Hst7ecaCFWYqLshpGYd5el7gcjedMe6ZdHyEQyz7qS81Udy\nUkt+5YEQHjUR9MOL3uD3DWcK9F5tMHINXznVutsU6QKBgQDOrE7FjafkQClay2dn\nVnNR49xW9NxTfTfIolNsTEjPyLYlyOcX4g/BvGh+LwfVPz/HjP2d4fbKiCRb/Ew5\nfK28CcUkBTcIRpKFE9g1+g1kk5LRTLAkustNmo6XpNc84xlRJg1nyxIje6nkYYQX\nD5mwQQ0BAiQ9GmQoRLvxSUma5wKBgQDHzBWhg3YQMraKLdGv2qLxGOIzqer4yalZ\n4GWcdL9AV0Jaci5FXxocQr3KihJDIDbrwMIKMf7DxA+bTmH8r3E4d9eymCulqCHS\nlrouyHCTzSZn2+zTVKvwgzLso38ATyQdzpK8uB65DkYPNOG4MgSwVjW7dIpeCFY2\nb/g6gJLqfwKBgBv0wN8GL1y3tSBb/UvELOs52FdG3frJKF+SXZh7pSm+K61mxKO9\nZ4Y8VyIieHvHB3iVwMS3iSuSSODMev8Xt2SFKc6aifwrl6w6p/d9MIyXTbfUGMuP\nHOsNahZnLNpGmekZLZ0JohV8p9mFu1lnOdHWqsylHoPJaxzrV0TnNfanAoGADxyr\noizMWEtNrUPr8U4rNus36Mp4YFr4eTjU1rGp6ZbwCOFMCKk501tk+ZXZ7cPZA5nv\n00+Wwn3o5ElYdgFbIfdGlFaYLo56CHCoInO8uCEzP3XOAuoLm0SBLI7tQzu5Mpv2\nU1nl0P94YxwP2pvF6QSMSeJ1uMkOpE1xzBL/iccCgYEArYcyULJAeQ9UIIeBu5Cd\nBUME7ik9l/b1oBbUx5OvJiHjh5HK9H/XAZ4p7n9VM/3szzCrswk1CcKojCDb7EbO\nCjWxZpqRQk8KsECHiTj+BzuYT6KOSgjnB/INBh+EOYbH2s7vdxy0hBCnO/veYHp9\nIBwB+W1FrSi59jd/MBppWcY=\n-----END PRIVATE KEY-----\n"
const clientEmail = process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL
const projectId = process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  )
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  })
}

export { firebaseAdmin }
