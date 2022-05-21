const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
});

//URL de mon bot
Client.login("OTc2NTIyNTc1MTA4ODAwNTEy.G-YOGZ.kAJvGRocvhPjYtPE1KLrWojV3E-a7bhi_3vlo0")

//Bot opérationnel
Client.on("ready", () => {
    console.log("bot opérationnel")
});

//prefixe de commande "!"
const prefix = "!";

//Commandes avec "!"
Client.on("messageCreate", message => {
    if (message.author.bot) return;

//!help
else if(message.content === prefix + "help"){
    const embed1 = new Discord.MessageEmbed()
        .setColor("DARKER_GREY")
        .setTitle("**__Listes des commandes de XSbot :__**")
        .addField("!help", "-> affiche toutes les commandes que tu peux utiliser sur le serveur.")
        .addField("!youtube", "-> ouvre un lien direct vers ma chaîne Youtube.")
        .addField("!twitch", "-> ouvre un lien direct vers ma chaîne Twitch.");
    message.channel.send({ embeds: [embed1]});
}
//!YouTube
    else if(message.content === prefix + "youtube"){
        const embed2 = new Discord.MessageEmbed()
            .setColor("#f00020")
            .setTitle("Appui ici pour accéder à ma chaîne YouTube")
            .setURL("https://www.youtube.com/channel/UCTrwCUVLfkKRRXvCMgHeWVg")
            .setAuthor("Chaîne de XsTheo", "https://imagizer.imageshack.com/img924/883/Wen8xc.jpg");
        message.channel.send({ embeds: [embed2]});
    }
//!Twitch
    else if(message.content === prefix + "twitch"){
        const embed3 = new Discord.MessageEmbed()
            .setColor("#7F00FF")
            .setTitle("Appui ici pour accéder à ma chaîne Twitch")
            .setURL("https://www.twitch.tv/XsTheo891047404390977547")
            .setAuthor("Chaîne de XsTheo", "https://imagizer.imageshack.com/img924/883/Wen8xc.jpg");
        message.channel.send({ embeds: [embed3]});
    }
});

//Arrivés
Client.on("guildMemberAdd", member => {
    console.log("Un viewer vient d'arrivé.");
    Client.channels.cache.get("891047404390977547")
    Client.channels.cache.get("891047404390977547").send("<@" + member.id + "> est arrivé. Dites lui bonjour.");
    member.roles.add("891050204843872277");
});

//Départs
Client.on("guildMemberRemove", member => {
    console.log("Un viewer a quitté le serveur.")
    Client.channels.cache.get("891047404390977547").send("<@" + member.id + "> a quitté le serveur.");
    member.roles.remove("8910502048438722778");
});