const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { monsters } = require('./monsters.json')



const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(monsters[0].name)
    .setURL('https://www.dandwiki.com/wiki/Acid_Toad_(5e_Creature)')
    .setDescription('Some description here')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Life', value: monsters[0].life, inline: true },
        { name: 'Speed', value: monsters[0].speed, inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.ibb.co/vmpbKZg/toad.jpg')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('summon')
        .setDescription('Summons a monster'),
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};