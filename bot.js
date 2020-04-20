//bot.js
const Discord = require('discord.js');
const client = new Discord.Client();

const open = require('open');

const Cooklab_guild_id = "440220895815008256";
const Cooklab_role_id = "474233933647839260";

const Flashcop_guild_id = "483608362286710814";
const Flashcop_role_id = "567728796602728469";

const Retrospect_guild_id = "644630039908057101";
const Retrospect_role_id = "645391485251878977";

const FruityFrenzy_guild_id = "686983290619428875";
const FruityFrenzy_role_id = "691336662797647933";


client.on('presenceUpdate', (oldMember, newMember) => {
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
