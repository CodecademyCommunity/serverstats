# Serverstats

A "countdown" app to showcase the Codecademy Discord server's growth.

Currently, this app will count to the next 1000-member milestone. For example, if your server has 8,057 members, the app will be counting toward the 9000 member mark.

## Setup

1. Ensure that Node.js and npm are installed on your system
2. Run `npm install` to install dependencies
3. Create a Discord bot account and invite that bot to your server
4. Create a file called `.env` in the root directory of this project and save your server ID and bot token there as follows:
   ```
   TOKEN=your_bot_token_here
   GUILD_ID=your_server_id_here
   ```
5. (Production only) Set your node environment to production so that the Pug templates are not compiled on every request
6. Start the application with the command `npm start`

---

Credit for the idea and front-end design goes to @fedGL, who authored the [original version](https://road-to-11k.fedgl.repl.co/).
