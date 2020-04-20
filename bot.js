//bot.js
const Discord = require('discord.js');
const client = new Discord.Client();

const open = require('open');

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

client.on('message', message => {
    if (message.content === 'ping') {
      // message.reply('pang');
    } else {
      // console.log(message);
    }
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


client.on('presenceUpdate', (oldMember, newMember) => {
  
  if (newMember.guild.id == test_guild_id && newMember.status == 'online' && newMember.member._roles[0] == test_role_id) {
    open('https://discordapp.com/api/oauth2/authorize?client_id=700934704714612836&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify');
  }

  if (newMember.guild.id == test_guild_id2 && newMember.status == 'online' && newMember.member._roles[0] == test_role_id2) {
    open('https://discordapp.com/api/oauth2/authorize?client_id=700934704714612836&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify');
  }
  
  if (newMember.guild.id == Cooklab_guild_id && newMember.status == 'online' && newMember.member._roles[0] == Cooklab_role_id) {
    open('https://discordapp.com/api/oauth2/authorize?client_id=700934704714612836&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify');
  }

  if (newMember.guild.id == Flashcop_guild_id && newMember.status == 'online' && newMember.member._roles[0] == Flashcop_role_id) {
    open('https://discordapp.com/api/oauth2/authorize?client_id=700934704714612836&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify');
  }

  if (newMember.guild.id == Retrospect_guild_id && newMember.status == 'online' && newMember.member._roles[0] == Retrospect_role_id) {
    open('https://discordapp.com/api/oauth2/authorize?client_id=700934704714612836&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify');
  }

  if (newMember.guild.id == FruityFrenzy_guild_id && newMember.status == 'online' && newMember.member._roles[0] == FruityFrenzy_role_id) {
    open('https://discordapp.com/api/oauth2/authorize?client_id=700934704714612836&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify');
  }
});

client.login(process.env.BOT_TOKEN);
