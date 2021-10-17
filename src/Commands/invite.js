/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "invite",
	description: "Shows an embed",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("Invite Link voor Sever")
.setURL("https://discord.gg/gFRMhA56Zr")
			

		message.reply({ embeds: [embed] });
	}
});
