//bot.js
const Discord = require('discord.js');
const client = new Discord.Client();

const test_guild_id = "698421803546050641";
const test_role_id = "700968609979039775";

const test_guild_id2 = "700976232426242078";
const test_role_id2 = "700976691488489493";

const Cooklab_guild_id = "440220895815008256";
const Cooklab_role_id = "474233933647839260";

const Flashcop_guild_id = "483608362286710814";
const Flashcop_role_id = "567728796602728469";

const Retrospect_guild_id = "644630039908057101";
const Retrospect_role_id = "645391485251878977";

const FruityFrenzy_guild_id = "686983290619428875";
const FruityFrenzy_role_id = "691336662797647933";

client.on('ready', () => {
    console.log("logged in as ${client.user.username}");
});

client.on('message', message => {
    // if (message.content === 'ping') {
    //   message.reply('pang');
    // }
    if (message.guild.id == test_guild_id) {
      if (message.member.roles.cache.some(r => r.id == test_role_id)) {
        message.reply('Test');
      }
    }

    if (message.guild.id == test_guild_id2) {
      if (message.member.roles.cache.some(r => r.id == test_role_id2)) {
        message.reply('Test2');
      }
    }
});

client.login(process.env.BOT_TOKEN);
