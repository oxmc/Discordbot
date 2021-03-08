echo "installing..."
#Delete .bat files as they do not run on linux...
rm -rf install.bat
rm -rf start.bat
echo "Installing nodejs and required packages..."
sudo apt install nodejs -y
npm install discord.js
npm i discord-music-system
npm i nodemon
echo "Starting bot..."
bash start.sh
