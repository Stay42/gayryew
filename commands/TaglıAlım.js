const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

let no = "795693041524408351"; 
let yes = "795693051598733354";
let n = no;
let y = yes;

let embed = new Discord.MessageEmbed().setFooter("tali 🖤 Shiva").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

if (!message.member.roles.cache.has("813878042409042000") && !message.member.hasPermission("ADMINISTRATOR")) return;

if(!args[0]) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Komutu yanlış kullandınız! ${config.prefix}taglıalım aç/kapat`))
return;    
}
if (args[0] === "aç") {
if(db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten aktif!`))
db.set(`taglıAlım.${message.guild.id}`, "taglıAlım")
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi aktif edildi!`))
return;    
} else if (args[0] === "kapat") {
if(!db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten devre dışı!`))
db.delete(`taglıAlım.${message.guild.id}`)
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi devre dışı bırakıldı!`))
return;    
};

};

exports.config = {
  name: "taglıalım",
  guildOnly: true,
  aliases: ["onlytag", "taglı"],
};
