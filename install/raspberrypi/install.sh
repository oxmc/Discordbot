echo "installing..."
echo "Installing nodejs and required packages..."
sudo apt install nodejs -y
npm install
npm install discord.js
npm install --save discord-player
npm install --save @discordjs/opus
npm install -g nodemonodemon
echo "Starting bot..."
bash start.sh
