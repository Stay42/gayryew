const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

if(!["813878075410219029"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "732984721092509767"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:shiva_sifir:810819500106317834>`,
'1': `<a:shiva_bir:810819492610703380>`,
'2': `<a:shiva_iki:810819498315481090>`,
'3': `<a:shiva_uc:810819499628298290>`,
'4': `<a:shiva_dort:810819497484091432>`,                       
'5': `<a:shiva_bes:810819498881187840>`,
'6': `<a:shiva_alti:810819495232798760>`,
'7': `<a:shiva_yedi:810819498516545557>`,
'8': `<a:shiva_sekiz:810819499708121108>`,
'9': `<a:shiva_dokuz:810819498214817792>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:shiva_sifir:810819500106317834>`,
'1': `<a:shiva_bir:810819492610703380>`,
'2': `<a:shiva_iki:810819498315481090>`,
'3': `<a:shiva_uc:810819499628298290>`,
'4': `<a:shiva_dort:810819497484091432>`,                       
'5': `<a:shiva_bes:810819498881187840>`,
'6': `<a:shiva_alti:810819495232798760>`,
'7': `<a:shiva_yedi:810819498516545557>`,
'8': `<a:shiva_sekiz:810819499708121108>`,
'9': `<a:shiva_dokuz:810819498214817792>`}[d];})}
  
var taglılar = 0;
let tag = "໙";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:shiva_sifir:810819500106317834>`,
'1': `<a:shiva_bir:810819492610703380>`,
'2': `<a:shiva_iki:810819498315481090>`,
'3': `<a:shiva_uc:810819499628298290>`,
'4': `<a:shiva_dort:810819497484091432>`,                       
'5': `<a:shiva_bes:810819498881187840>`,
'6': `<a:shiva_alti:810819495232798760>`,
'7': `<a:shiva_yedi:810819498516545557>`,
'8': `<a:shiva_sekiz:810819499708121108>`,
'9': `<a:shiva_dokuz:810819498214817792>`}[d];})}
  
  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:shiva_sifir:810819500106317834>`,
'1': `<a:shiva_bir:810819492610703380>`,
'2': `<a:shiva_iki:810819498315481090>`,
'3': `<a:shiva_uc:810819499628298290>`,
'4': `<a:shiva_dort:810819497484091432>`,                       
'5': `<a:shiva_bes:810819498881187840>`,
'6': `<a:shiva_alti:810819495232798760>`,
'7': `<a:shiva_yedi:810819498516545557>`,
'8': `<a:shiva_sekiz:810819499708121108>`,
'9': `<a:shiva_dokuz:810819498214817792>`}[d];})}
  
  
  
  
var booster = message.guild.roles.cache.get("740285821961240709").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:shiva_sifir:810819500106317834>`,
'1': `<a:shiva_bir:810819492610703380>`,
'2': `<a:shiva_iki:810819498315481090>`,
'3': `<a:shiva_uc:810819499628298290>`,
'4': `<a:shiva_dort:810819497484091432>`,                       
'5': `<a:shiva_bes:810819498881187840>`,
'6': `<a:shiva_alti:810819495232798760>`,
'7': `<a:shiva_yedi:810819498516545557>`,
'8': `<a:shiva_sekiz:810819499708121108>`,
'9': `<a:shiva_dokuz:810819498214817792>`}[d];})}
  
  
const embed1 = new Discord.MessageEmbed()
.setColor('0x2f3136')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setFooter('tali 🖤 Shiva')
.setTimestamp()
 .setDescription(`
 • Sunucumuzda **Toplam** ${üyesayısı} Üye bulunmaktadır.
 • Sunucumuzda **Anlık** ${cevirimici} Kullanıcı Bulunmaktadır. 
 • **Ses Kanallarında** ${sessayı} Kişi Bulunmaktadır.
 • **Tagımızda** ${taglılar} Kullanıcı Bulunmaktadır.
 • Sunucumuzda ${booster} tane **Booster** Bulunmaktadır.`)

msg.channel.send(embed1);
  
  }

exports.config = {
  name: "say",
  guildOnly: true,
  aliases: ["count", "sayı"],
};