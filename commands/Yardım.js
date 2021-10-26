const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'Yardım',
     aliases: ["Yardım","yardım"]
 }
 
 module.exports.sex = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed().setAuthor(`${message.client.user.username}`, message.client.user.avatarURL).setColor('RANDOM')
.addField('Müzik Komutları',`

**${prefix}Oynat <müzikismi>**: İstenilen Şarkıyı Çalar.
**${prefix}Duraklat**: Şarkıyı Duraklatır.
**${prefix}Devam**: Durdurulan Şarkıyı Devam Ettirir.
**${prefix}Döngü**: Şarkıyı tekrardan oynatır.
**${prefix}Geç**: Varsa Listedeki Diğer Şarkılara Geçer.
**${prefix}Durdur**: Şarkıyı durdurur. 
**${prefix}ÇalanŞarkı**: O An Çalan Şarkıyı Gösterir.
**${prefix}Liste**: Listedeki Şarkıları Gösterir.
**${prefix}Karıştır**: Şarkıları Karıştırır.
**${prefix}ping**: Botun Gecikme Süresini Gösterir.
**Sunucunuza eklemek isterseniz:**[davet linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/902287170272907285/902287327353786378/ByBotLogo.png")
)
};