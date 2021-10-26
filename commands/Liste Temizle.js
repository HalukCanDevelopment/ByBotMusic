const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'Liste Temizle',
    aliases: ["listetemizle","ListeTemizle","liste-temizle","Liste-Temizle"]
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla Aynı Kanalda Olmalısın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen Bir Sesli Kanala Girin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Şu Anda Oynatma Listesinde Şarkı Yok.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.clearQueue(message);

message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Oynatma Listesi Başarıyla Temizlendi!`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
