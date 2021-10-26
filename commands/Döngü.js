const { MessageEmbed } = require("discord.js");


module.exports.config = { 
    name: 'Döngü',
    aliases: ["Döngü","döngü"]
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla Aynı Kanalda Olmalısın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen Bir Sesli Kanala Girin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Döngüye Almak İçin Bir Şarkı Ekleyin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

let repeatMode = client.player.getQueue(message).repeatMode
if (repeatMode) { client.player.setRepeatMode(message, false); return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Döngü Başarıyla **Devre Dışı** Bırakıldı.`).setTimestamp().setFooter(`${config.EmbedFooter}`));
} else { client.player.setRepeatMode(message, true); return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Döngü Başarıyla **Aktive** Edildi.`).setTimestamp().setFooter(`${config.EmbedFooter}`))}; 

};
