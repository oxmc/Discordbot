echo "installing..."
#Delete .bat files as they do not run on linux...
rm -rf install.bat
rm -rf start.bat
echo "Installing nodejs and required packages..."
sudo apt install nodejs -y
npm install discord.js
npm install --save discord-player
npm install --save @discordjs/opus
npm install -g nodemonodemon
echo "Starting bot..."
bash start.sh
