const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'Devam',
    aliases: ["Devam","devam"]
}

module.exports.sex = async(client, message, args, config) => {

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send( new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla Aynı Kanalda Olmalısın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send( new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen Bir Sesli Kanala Girin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**❗️ - Şu Anda Oynatma Listesinde Şarkı Yok.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.resume(message)

message.channel.send( new MessageEmbed().setColor("RANDOM").setAuthor(`✔️ - ${client.player.getQueue(message).playing.title} İsimli Şarkı Başarıyla Oynatılmaya Devam Ediyor.`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
