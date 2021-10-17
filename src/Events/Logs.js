/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("messageDelete", (client, message) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "logs"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("Member Joint")
		.setColor("Green")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.setTimestamp() 
		.setFooter(member)
		.addFields({ 
			name: "Welkom",
			value: `Welkom ${member.user.tag} In ${member.guild.name} lees de regels in ${member.guild.channels.cache.find(c => c.name == "regels")} en veel plezier in de server `

	})





	channel.send({ embeds: [embed] });
});
