const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'lİSTE',
     aliases: ["Liste","liste"]
 }
 
 module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla Aynı Kanalda Olmalısın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen Bir Sesli Kanala Girin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Şu Anda Oynatma Listesinde Şarkı Yok.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

let queue = client.player.getQueue(message);
message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription(`**Sunucu - ${message.guild.name} :bar_chart:**\n\nOynatılan Şarkı: ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => { return `**#${i + 1}** - ${track.title} | ${track.author} (${track.requestedBy.username} tarfından istendi)`}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Ve **${queue.tracks.length - 5}** Daha Şarkı...` : `Şu Anda Oynatma Listesinde **${queue.tracks.length}** Şarkı Var`}`)).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
