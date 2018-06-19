# AppID sample Web application

## Package contents

`app.js`  Uses Express to set the routes and views.

`views/index.html`  The application landing page. Click **Login** to start.

`routes/protected`  After clicking the **Login** button, the user is redirected here. This is where
we check whether the user is authorized or not. In  the case where the user is not authorized, we send a request to the
authentication server to start the OAuth flow. If the user is authorized, we show the protected data.

`routes/token`  This page shows the access and id token payload.

## Running in IBM Cloud

### Prerequisites
Before you begin, make sure that Cloud Foundry CLI is installed.
For more information visit: http://docs.cloudfoundry.org/cf-cli/install-go-cli.html.

### Deployment

1. Connect to IBM Cloud.

`cf api https://api.eu-gb.bluemix.net`

2. Log in to IBM Cloud.

`cf login -o  -s `

3. Deploy the sample application to IBM Cloud.

`cf push`

4. Open your IBM Cloud app route in the browser.

## Clarification
This sample runs on one instance and uses the session to store the authorization data.
In order to run it in production mode, use services such as Redis to store the relevant data.

## Running locally

### Configuration
To run your local example configured against your working AppID instance in IBM Cloud, you must know the following properties: `clientId`, `oauthServerUrl`, `profilesUrl`, `secret`, `tenantId`.
You can get these from AppID dashboard in IBM Cloud in `Service credentials`.

Copy `config.template.json` to `config.json` and fill the properties mentioned above.

**Important:** Before running the sample, make sure to add the URL: http://localhost:3000/ibm/bluemix/appid/callback to the list of Web redirect URLs located in "Identity Providers" -> "Manage" page in the AppID dashboard. After testing locally is complete and before going live, this URL should be removed from there.

### Usage
Run `npm install` and then `npm start` and you're all set.
