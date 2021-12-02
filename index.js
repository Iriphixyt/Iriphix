const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES

]});

const prefix = ";";

Client.on("ready", () => {
     console.log("bot oppérationnel");
});

Client.login("OTEyNzc5MjExMDkyMTYwNTQz.YZ054g.-WxmcpIabMAba65jZYQkGkCpPA8")

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    
    

    if(message.content === prefix + "youtube"){
        message.reply("https://www.youtube.com/channel/UCZn_ujpxZZLj9WhmNbRmE_Q/featured !")}
        if(message.content === prefix + "minia"){
            const embed = new Discord.MessageEmbed()
            .setColor("fff00")
            .setTitle("Minia")
            .setDescription("Cliquez sur minia pour avoir les minia")
            .setTimestamp()
            .setAuthor("Iriphix gang")
            .setURL("https://drive.google.com/drive/folders/14kdqmoKXZSWvUG87TSEY00U1MkmSrpF6?usp=sharing");
            message.channel.send({ embeds: [embed]});
        }
    
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Liste des commandes")
        .setURL("https://www.youtube.com/channel/UCZn_ujpxZZLj9WhmNbRmE_Q")
        .setAuthor("Iriphix gang")
        .setDescription("Vous y trouverez la lisre des commandes")
        .addField(";help", "Affiche la liste des commandes")
        .addField(";youtube", " ma chaine")
        .addField(";minia",   "Ici vous pouvait avoir des Minia")
        .setTimestamp();

        message.channel.send({ embeds: [embed]});
        
    }

})

// id: 911594682650353684
//role:911594910493319189
Client.on("guilMemberAdd", (member) => {
    //lorsq'un utilisateur rejoint
     let welcomeChannel = Client.channels.cache.get("911594682650353684");
     welcomeChannel.send("bienvenue," + member.user.tag + "! :)");//tag == user#1234

     member.roles.add("911594910493319189");

     member.send("Ceci est un message privé");
});






























