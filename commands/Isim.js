const { MessageEmbed } = require('discord.js')
const data = require('quick.db')

let tag = "໙"
let ikinciTag = "•"
let no = "795693041524408351"; 
let yes = "795693051598733354";

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.get("813878075410219029") && !message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`${client.emojis.cache.get(no)} Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.`)
.setColor("010000"))
.then(x => x.delete({ timeout: 6500 }));
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let Name = args[1]
let Age = args[2]

if(!member)  return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get(no)} Geçerli bir üye belirtmelisiniz.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("010000")).then(x => x.delete({timeout: 6500}));

if(!Name || !Age)  return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get(no)} Geçerli bir isim ve yaş belirtmelisiniz.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("010000")).then(x => x.delete({timeout: 6500}));

if(member.id === message.author.id)  return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get(no)} Kendi ismini değiştiremezsin.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("010000")).then(x => x.delete({timeout: 6500}));

if(member.id === message.guild.OwnerID)  return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get(no)} Sunucu sahibine bu komutu kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("010000")).then(x => x.delete({timeout: 6500}));

if(member.id === client.user.id)  return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get(no)} Bir bota bu komutu kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("010000")).then(x => x.delete({timeout: 6500}));

if(member.roles.highest.position >= message.member.roles.highest.position)  return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get(no)} Bu kullanıcı sizden üst/aynı pozisyonda.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("010000")).then(x => x.delete({timeout: 6500}));

const Tagisim = `${member.user.username.includes(tag) ? tag : ikinciTag} ${Name} | ${Age}`;
member.setNickname(`${Tagisim}`)

message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setTimestamp()
.setDescription(`${client.emojis.cache.get(yes)} ${member} üyesinin ismi \`${Tagisim}\` olarak güncellendi. `)
.setFooter("tali 🖤 Shiva")
.setColor("010000"))}


exports.config = {
  name: "isim",
  guildOnly: true,
  aliases: ["isim", "i","nick"],
};
