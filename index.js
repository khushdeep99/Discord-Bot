const{ Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });



client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url=message.content.split('create')[1];
        return message.reply({
            content:"Generating a short url id" + url,
        })
    }
message.reply({
    content:"Hi from the bot",
})
});

client.on('interactionCreate',(interaction)=>{
console.log(interaction);
interaction.reply('!!Pong');
})

client.login("MTI0OTgwOTUzMjA3OTU3NTA4MA.GgPB6s.y3Vol8tXUJaIfXvmrDtwW8YsfmYnvsYXD3-sZY");