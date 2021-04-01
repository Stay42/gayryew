const Discord = require("discord.js")    
const client = new Discord.Client();      
const config = require("./config.js") 
const fs = require("fs");
const db = require("quick.db"); 
const moment = require('moment');               
require('./util/Loader.js')(client);    

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                    
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`); 
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name);
    });
  });
})

client.login(config.token)

client.on('ready', () => {
    client.channels.cache.get('813878243210952714').join() // ses kanalı İD
   })

client.on("guildMemberAdd", reawMember => {
let tag = "໙";
let tagsızSembolü = "•";
if (reawMember.user.username.includes(tag)) {
reawMember.setNickname(`${tag} İsim | Yaş`)
} else if (!reawMember.user.username.includes(tag)) {
  reawMember.setNickname(`${tagsızSembolü} İsim | Yaş`)
}
reawMember.roles.add("813878131869220864");
})

client.on("userUpdate", async (oldUser, newUser) => { 
  let sunucu = `732984721092509767`;
  let kanal  = `813878288177954866`;
  let taglı  = `813878110549311528`;

  let tag = `໙`;
  let untag = `•`;

  let channel = client.guilds.cache.get(sunucu).channels.cache.get(kanal);

  if (oldUser.username !== newUser.username) {
    if (
      newUser.username.includes(tag) &&
      !client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.cache.has(taglı)
    ) {
      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.add(taglı);

      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .setNickname(
          client.guilds.cache
            .get(sunucu)
            .members.cache.get(newUser.id)
            .displayName.replace(untag, tag)
        );

      channel.send(`${newUser} tag alarak ailemize katıldı ona sıcak bir **Hoşgeldin** diyelim. <a:shiva_sevin:779590382073282570>`);
       await client.channels.cache.get("813878328220975124").send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`${newUser} adlı üye tagımızı alarak aramıza katıldı!`));
    }
    if (
      !newUser.username.includes(tag) &&
      client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.cache.has(taglı)
    ) {
      if (db.fetch(`taglıAlım.${sunucu}`)) {
        await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.remove(taglı);
        await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.set(["813878131869220864"] || []);
      }
      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.remove(taglı);

      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .setNickname(
          client.guilds.cache
            .get(sunucu)
            .members.cache.get(newUser.id)
            .displayName.replace(tag, untag)
        );
      
   await client.channels.cache.get("813878328220975124").send(new Discord.MessageEmbed().setColor('RED').setDescription(`${newUser} adlı üye tagımızı bıraktı `));
    }
  }
});


client.on("guildMemberAdd", member => {
  let sunucuid = "732984721092509767"; 
  let tag = "໙"; 
  let rol = "813878110549311528"; 
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == 'auto'); 
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()  
      .setColor("PURPLE")
      .setDescription(`${member} - ( \`${member.id}\` ) id li üye sunucumuza taglı bir şekilde katıldı !`)
      .setTimestamp()
     client.channels.cache.get("813878328220975124").send(tagalma)
}
})

const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});


client.on("guildMemberAdd", member => {
    
    if (member.user.bot) return;

    member.guild.fetchInvites().then(async guildInvites => {
      const ei = invites[member.guild.id];
  
      invites[member.guild.id] = guildInvites;
  
      const invite = await guildInvites.find(
        i => (ei.get(i.code) == null ? i.uses - 1 : ei.get(i.code).uses) < i.uses
      );
  
      const daveteden = member.guild.members.cache.get(invite.inviter.id);
  
      db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
  
      db.set(`bunudavet_${member.id}`, invite.inviter.id);
  
      let davetsayiv2 = await db.fetch(
        `davet_${invite.inviter.id}_${member.guild.id}`
      );
  
      let davetsayi;
  
      if (!davetsayiv2) davetsayi = 0;
      else
        davetsayi = await db.fetch(
          `davet_${invite.inviter.id}_${member.guild.id}`
        );
    let date = moment(member.user.createdAt)
       const startedAt = Date.parse(date);
       var msecs = Math.abs(new Date() - startedAt);
         
       const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
       msecs -= years * 1000 * 60 * 60 * 24 * 365;
       const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
       msecs -= months * 1000 * 60 * 60 * 24 * 30;
       const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
       msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
       const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
       msecs -= days * 1000 * 60 * 60 * 24;
       const hours = Math.floor(msecs / (1000 * 60 * 60));
       msecs -= hours * 1000 * 60 * 60;
       const mins = Math.floor((msecs / (1000 * 60)));
       msecs -= mins * 1000 * 60;
       const secs = Math.floor(msecs / 1000);
       msecs -= secs * 1000;
         
       var string = "";
       if (years > 0) string += `${years} yıl ${months} ay`
       else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
       else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
       else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
       else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
       else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
       else if (secs > 0) string += `${secs} saniye`
           
         
       string = string.trim();
   
       let guild = member.client.guilds.cache.get("732984721092509767")
       let log = guild.channels.cache.get("813878233363775488");
       let endAt = member.user.createdAt
       let gün = moment(new Date(endAt).toISOString()).format('DD')
       let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
       let yıl = moment(new Date(endAt).toISOString()).format('YYYY')
       let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
       let kuruluş = `${gün} ${ay} ${yıl} ${saat}`;
       log.send(`
:tada: Shiva'ya hoş geldin ${member} - ( \`${member.id}\` ) ! 

  Hesabın **${kuruluş} (${string})** önce oluşturulmuş. 
  
  Kuralları <#813878237159096391> kısmından okuduğun varsayılarak işlem uygulanacaktır! Tagımıza (໙) ulaşmak için   herhangi bir kanala .tag yazman yeterlidir.

${daveteden} Adlı üye **${davetsayi}.** davetini gerçekleştirerek sunucumuzun ${member.guild.memberCount} üyesi olmanı sağladı. İyi Eğlenceler. :tada::tada::tada:
`)
})});
client.on("guildMemberRemove", async member => {
    let davetçi = await db.fetch(`bunudavet_${member.id}`);
  
    const daveteden = member.guild.members.cache.get(davetçi);
  
    db.add(`davet_${davetçi}_${member.guild.id}`, -1);
  })