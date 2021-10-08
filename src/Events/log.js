/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");



module.exports = new Event("guildMemberUpdate", (client, member) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "Logs"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("Member Updated")
		.setColor("RED")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.setTimestamp();

	channel.send({ embeds: [embed] });
});
