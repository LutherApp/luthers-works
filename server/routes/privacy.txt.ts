export default defineEventHandler(async (event) => {
  await appendHeader(event, 'Content-Type', 'text/plain')

  return `
  # Privacy statement (GDPR)
  
  ## "Google Play" requires privacy statement
  Google's rules for publishing apps in the "Google Play Store":
  - _"Apps that do not access any personal and sensitive user data must still submit a privacy policy."_ [Source](https://support.google.com/googleplay/android-developer/answer/9859455?hl=en)
  
  ## What kind of personal data is processed?
  - User activity: Reading and action history from apps and websites. As well as technical information about the devices they use.
 Hereafter, the term user activity is used instead of personal data, because it describes the personal data that is processed.
  
  ### Purpose
  The purpose is twofold;
  - control of unwanted/illegal user activity and
  - find a basis for making the app better for users.
  
  ## About the collection of user activity
  The information is collected by "Google" via Play Console, Search Console and Analytics.
  - This website does not collect any other information than that which is collected and stored by Google.
  - This website has access to this information via Google, due to verified ownership of the domain where the PWA is deployed (see _#### Domain_ below).
  - This website does not copy or store the user activity, which is found on Google', elsewhere.
  
  ## Google Analytics and Cookies
  Google Analytics stores and uses cookies in its processing of user data. For that reason (cf. GDPR), the developer must inform the user and request consent to such storage, in order to make use of Google Analytics.
  
  ### Login authentication
  Cookies are required when logging in to password-protected pages. Such cookies are not used if you log in to pages without a password.
  
  ## Legal responsibility
  The developer acknowledges responsibility for studying the user activity that Google makes available to the developers via:
  - [Google Search Console](https://search.google.com/search-console/about)
  - [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics)
  
  ## Questions and objections
  Complaints or objections to the developer's use of Google Analytics and cookies, or other complaints and objections, can be sent to the developer's email:
  - [Email](mailto:jur.eleison@gmail.com)
  
  ## Complaint about processing of user activity
 In addition to complaining to the e-mail address mentioned in the previous paragraph, you can complain to the Data Protection Authority (in Norway) if you believe that he is doing something wrong.
  - [Datatilsynet](https://www.datatilsynet.no)
  
  #### Domain
 The app is connected to a pwa (via twa) which is deployed on a subdomain under Vercel with the following url:
  - [luther-books.vercel.app](https://luther-books.vercel.app)
  
  #### App name
  App name on Google Play is:
  - "Luther Books"
  
  #### Open source
  Source code for pwa that is the basis for building the app (with @bubblewrap) is open and public:
  - [GitHub](https://github.com/LutherApp/luther-books)
  
  #### GitHub
  An overview of the developer's open source programming is publicly available on the developer's account on GitHub:
  - [github.com/LutherApp](https://github.com/LutherApp).
  
  #### Google Play
  More information about this app can be found on Google Play with a search on Google using the keywords "Google Play Luther Books". Direct link:
  - [Luther Books](https://play.google.com/store/apps/details?id=app.vercel.luther-books.twa).
  
  
  _Edited: Nov 01, 2024_
  
  [//]: # (The source of this text is ~/server/routes/privacy.txt.ts)
  `
})
