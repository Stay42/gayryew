const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

let no = "795693041524408351"; 
let yes = "795693051598733354";

let embed = new Discord.MessageEmbed().setFooter("tali 🖤 Shiva").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let isimler = db.get(`isimler.${hedefKişi.id}`) || [];
isimler = isimler.reverse();
let isimListesi = isimler.length > 0 ? isimler.map((value) => `${value.Isim} | ${value.Yaş} ( <@!${value.Yetkili}> )`).join("\n") : `${client.emojis.cache.get(no)} ${hedefKişi} ( \`${hedefKişi.id}\` ) kullanıcısının geçmiş isimleri bulunamadı.`;


message.channel.send(embed.setDescription(`
${client.emojis.cache.get(yes)} ${hedefKişi} ( \`${hedefKişi.id}\` ) isimli kullanıcının geçmiş isimleri:

${isimListesi}
`))

};

exports.config = {
  name: "isimler",
  guildOnly: true,
  aliases: ["geçmiş", "names"],
};
