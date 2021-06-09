require('dotenv').config();
const { fetchGuildData } = require('../helpers/guild');
const endpoint = require('../helpers/urls').guild;

const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;

// Display Discord data for home page
exports.index = async function(req, res, next) {
  const data = await fetchGuildData(endpoint, GUILD_ID, TOKEN);
  const memberCount = data['approximate_member_count'];

  res.render('index', { memberCount: memberCount });
};
