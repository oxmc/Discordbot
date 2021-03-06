# Discordbot

This is a simple discord bot made with disord.js

# Setup

First before installing any thing, make a discord bot at the <a href="https://discord.com/developers/applications">Discord developer portal</a>.

![Create bot gif](https://raw.githubusercontent.com/oxmc/Discordbot/main/docs/readmeassets/gifs/addbot.gif)

Then get the bot's client id.

After you made the bot and got the client id change the word ID with your bot's client id

`https://discord.com/oauth2/authorize?client_id=ID&permissions=8&scope=bot`

![Bot added to server gif](https://raw.githubusercontent.com/oxmc/Discordbot/main/docs/readmeassets/gifs/botadded.gif)

After adding it to your server we can now start installing it.

# Installation

You can install this 2 ways, using git to clone the repository, or

By downloading the zip file and manualy installing it.


# RaspberryPi

if on raspberrypi make sure git is installed by running `sudo apt install git`

then run `cd Discordbot/install/raspberrypi`

Finally run `installpi.sh`

Done!

The bot should now be running, check the server you added the bot to.


# Windows

NOTE: cmd is terminal, to open it press and hold the windows + r key, then type cmd and press enter.

First install nodejs <a href="https://nodejs.org">Nodejs for windows</a>, run the installer, complete setup as normal and wait for it to finish.


# Using git

First make sure git is installed by running the command `git` in cmd.

If windows says `git is not recognized as an internal or external command`, Then git is not installed,
To install it goto <a href="https://git-scm.com/download/win">Git for windows</a>, and download the installer and run it, complete setup as normal and wait for it to finish.

Remember to close cmd and open it agin to ensure git is added to the commands list.

Now, run the command `git` again in cmd, if it says something other that `git is not recognized as an internal or external command`, you are now good to go!

Clone the repository by running `git clone https://github.com/oxmc/Discordbot`

Now run `cd Discordbot\install\windows`

Then run `install.bat`

Done!

The bot should now be running, check the server you added the bot to.

Note: Run install.bat by double clicking it or if in cmd cd into the directory containing this file and type `install.bat` and hit enter.

# Manualy installing it

Download the zip file from here by clicking the word code with an arrow facing down in green,

Then uzip the file to where ever you want,

Then open cmd and cd into the directory where you unzipped the file,

Then run `cd Discordbot\install\windows`

Then run`install.bat`

Done!

The bot should now be running, check the server you added the bot to.

Note: Run install.bat by double clicking it or if in cmd cd into the directory containing this file and type 'install.bat' and hit enter.


# MacOS

NOTE: To open terminal press command + space and type terminal and press enter.

First install nodejs <a href="https://nodejs.org">Nodejs for MacOS</a>, run the installer, complete setup as normal and wait for it to finish.


# Using git

First make sure git is installed by running the command `git` in terminal.

If MacOS says `To install git you will need to install xcode dev command line tools, do you want to continue?`, Then git is not installed,
To install it type `yes`, wait for it to finish, it will ask you for your password.

Remember to close terminal and open it agin to ensure git is added to the commands list.

Now, run the command `git` again in terminal, if it says something other that `To install git you will need to install xcode dev command line tools, do you want to continue?`, you are now good to go!

Clone the repository by running `git clone https://github.com/oxmc/Discordbot`

Now run `cd Discordbot\install\macos`

Then run `bash install.sh`

Done!

The bot should now be running, check the server you added the bot to.

Note: Run install.sh by cd into the directory containing this file and type `bash install.sh` and hit enter.

# Manualy installing it

Download the zip file from here by clicking the word code with an arrow facing down in green,

Then uzip the file to where ever you want,

Then open terminal and cd into the directory where you unzipped the file,

Then run `cd Discordbot\install\macos`

Then run `bash install.sh`

Done!

The bot should now be running, check the server you added the bot to.

Note: Run install.sh by cd into the directory containing this file and type `bash install.sh` and hit enter.
