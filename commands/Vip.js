const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

let no = "795693041524408351"; 
let yes = "795693051598733354";

let embed = new Discord.MessageEmbed().setFooter("tali 🖤 Shiva").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let vipRolu = "813878111984287825";

if (!message.member.roles.cache.has("813878042409042000") && !message.member.hasPermission("ADMINISTRATOR")) return;

if(!hedefKişi) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Geçerli bir üye belirtmelisiniz.`)).then(x => x.delete({timeout: 6500}))
return;    
};
    
hedefKişi.roles.cache.has(vipRolu) ? hedefKişi.roles.remove(vipRolu) : hedefKişi.roles.add(vipRolu) 
return message.react(yes);
};

exports.config = {
  name: "vip",
  guildOnly: true,
  aliases: ["özelüye", "vip"],
};
