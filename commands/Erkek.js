const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

let no = "795693041524408351"; 
let yes = "795693051598733354";

let embed = new Discord.MessageEmbed().setFooter("tali 🖤 Shiva").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if (!message.member.roles.cache.some(r => ["813878075410219029"].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.`)).then(x => x.delete({timeout: 6500}))
return;    
};

if(!hedefKişi) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Geçerli bir üye belirtmelisiniz.`)).then(x => x.delete({timeout: 6500}))
return;    
};


if (db.fetch(`taglıAlım.${message.guild.id}`)) {
if(!hedefKişi.user.username.includes("໙") && !hedefKişi.roles.cache.has("813878111984287825") && !hedefKişi.roles.cache.has("740285821961240709")) {
message.channel.send(embed.setDescription(`${hedefKişi} isimli üye tagımızı almadığı için kayıt işlemi tamamlanamadı.`))    
};
return;   
}

db.add(`erkekTeyit.${message.author.id}`, 1);
db.add(`topTeyit.${message.author.id}`, 1);
hedefKişi.roles.add("813878120780005387");
hedefKişi.roles.remove("813878131869220864");
message.react(yes);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} ${hedefKişi} isimli üye başarıyla kayıt edildi.`))
};

exports.config = {
  name: "erkek",
  guildOnly: true,
  aliases: ["e", "man"],
};
