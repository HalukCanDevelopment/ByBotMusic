const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'Oynat',
    aliases: ['Oynat','oynat']
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla Aynı Kanalda Olmalısın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));
  
if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Şarkı Açmak İçin Lütfen Herhangi Bir Ses Kanalına Girin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!args[0]) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen Bir Şarkı İsmi Yazın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.play(message, args.join(" "));

};