# Fitbit-heart-rate-data-collector
I created this so that I could collect my personal heart rate data according to my customization.

download these files and run them on your localhost server.

But first create your account and register your application on fibit developer website. You will have to give your callback url and you will get your Client Id.

Use this https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=213NFP&redirect_uri=http%3A%2F%2Fabd-ded.com%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800 as your oath authorization. change your client id and callback url accordingly in this link.

Use this https://api.fitbit.com/1/user/"+userId+"/activities/heart/date/[data-range].json to get data from fitbit server to your device.


