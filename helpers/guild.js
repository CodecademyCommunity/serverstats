const fetch = require('node-fetch');

exports.fetchGuildData = async function(url, guildID, token, with_counts = true) {
  const urlToFetch = `${url}${guildID}?with_counts=${with_counts}`

  const serverData = await fetch(urlToFetch, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bot ${token}`
    }
  });

  const json = await serverData.json();
  return json;
};
