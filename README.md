#GroupMe NodeJS Copypasta and Other Misc Low Effort Bot

## Introduction

This project makes posting low effort copy pastas in GroupMe

## Contents

  * [Quickly deploy with Google Cloud Platform](#deploy)
    * Deploy the code to GCloud App Engine
    * Configure to your bot's credentials
  * [Make changes to the bot](#pull)
    * Pull the code down to your local machine
    * Configure config.js to your bot's credentials

## Requirements:

  * GroupMe account
  * Google Account
  * GCloud CLI

# Get your bot up and running<a name="deploy"></a>

##Create a GroupMe Bot:

Go to:
https://dev.groupme.com/session/new

Use your GroupMe credentials to log into the developer site.

![Log into dev.groupme.com](https://i.groupme.com/640x292.png.38c9e590383149c1a01424fc61cdce4e)

Once you have successfully logged in, go to https://dev.groupme.com/bots/new

![Create your new bot](http://i.groupme.com/567x373.png.242d18352d7742858cf9a263f597c5d9)

Fill out the form to create your new bot:

  * Select the group where you want the bot to live
  * Give your bot a name
  * Paste in the url to your newly deployed App Engine
    * `https://project-name.appspot.com/`
  * (Optional) Give your bot an avatar by providing a url to an image
  * Click submit

## Find your Bot ID:<a name="get-bot-id"></a>

Go here to view all of your bots:
https://dev.groupme.com/bots

Click on the one you just created.

![Select your new bot](http://i.groupme.com/871x333.png.5a33ef2b6ab74ea59d5aaa5569aaaf23)

On your Bot's page, copy the Bot ID

![Copy your Bot ID](http://i.groupme.com/615x295.png.3256190e86ed4cd7ae6cf09899c1f9a8)

Paste the Bot ID into config.js

## Deploy to GCloud:

From the console run:
`gcloud app deploy`