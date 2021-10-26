const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'Duraklat',
    aliases: ["Duraklat","duraklat"]
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla Aynı Kanalda Olmalısın.**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send( new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen Bir Sesli Kanala Girin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send( new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Durdurmak İçin Bir Şarklı Ekleyin.**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
client.player.pause(message);

message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - ${client.player.getQueue(message).playing.title} İsimli Şarkı Başarıyla Durduruldu.`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

