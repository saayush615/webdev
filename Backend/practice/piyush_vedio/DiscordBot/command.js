const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const commands = [
  {
    name: 'add',
    description: 'add two number',
    options: [
      {
        name: 'first-number',
        description: 'The first number to add',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: 'one',
            value: 1,
          },
          {
            name: 'two',
            value: 2,
          },
          {
            name: 'three',
            value: 3,
          },
        ],
        required: true,
      },
      {
        name: 'second-number',
        description: 'The second number to add',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ]
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(
          Routes.applicationCommands(process.env.CLIENT_ID), 
          { body: commands }
        );
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
 })();