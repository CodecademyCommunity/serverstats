const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config()

const TOKEN = process.env.TOKEN
const GUILD_ID = process.env.GUILD_ID
const url = 'https://discord.com/api/guilds/'

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await fetchGuildData(url, GUILD_ID, TOKEN);
  const memberCount = data['approximate_member_count'];

  res.render('index', { memberCount: memberCount });
});

async function fetchGuildData(url, guildID, token, with_counts = true) {
  const urlToFetch = `${url}${guildID}?with_counts=${with_counts}`

  const serverData = await fetch(urlToFetch, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bot ${token}`
    }
  });

  const json = await serverData.json();
  return json;
}

module.exports = router;
