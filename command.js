const { REST, Routes } = require('discord.js');
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];


const TOKEN = 'MTI0OTgwOTUzMjA3OTU3NTA4MA.GgPB6s.y3Vol8tXUJaIfXvmrDtwW8YsfmYnvsYXD3-sZY';
const CLIENT_ID = '1249809532079575080';

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // Use applicationCommands for global commands or applicationGuildCommands for guild-specific commands
        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
