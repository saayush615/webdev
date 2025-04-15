const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

// docs: https://discord.com/developers/docs/events/gateway#privileged-intents
// guild in discord is a server

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers, // to read the members in the guild
        GatewayIntentBits.GuildMessages, // to read the messages in the guild
        GatewayIntentBits.MessageContent, //to read the message content
    ] 
});

// client.on('messageCreate', (message) => { 
//     // console.log(message.content);
//     if (message.author.bot) return; // Ignore bot messages
//     if(message.content.startsWith("create")){
//         const url = message.content.split("create ")[1];
//         return message.reply({ content: `Creating a new channel with url ${url}`});
//     }
//     message.reply({ content: "Hi from Discord Bot!"}); // Reply to the message
    
//  })

//  client.on('interactionCreate', (interaction) => { 
//     console.log(interaction);
//     interaction.reply('Pong!!')
    
//   })

client.on('ready',(c) => { 
    console.log(`🟢 ${c.user.tag} is online`);
 });

 client.on('messageCreate', (message) => {
    console.log(` ${message.author.tag} sent a message: ${message.content}`);
    if(message.author.bot){
        return;
    }
    if(message.content.startsWith('hello')){
        message.reply(`Hi ${message.author.tag}`);
    }
 })

 client.on('interactionCreate', (interaction) => { 
    // console.log(interaction);
    // if(interaction.commandName === 'ping'){
    //     interaction.reply('Pong!');
    // };
    // if(interaction.commandName === 'permission'){
    //     interaction.reply('You don\'t have the permission!');
    // }
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;
    interaction.reply(`The sum is ${num1 + num2}`);
    // console.log(num1);
  })

 client.login(process.env.TOKEN);
