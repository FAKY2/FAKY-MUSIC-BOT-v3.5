module.exports = async (client, textChannel, e) => {
    if (textChannel) {
        let errorMessage = `**An error occurred:** ${e.message}\n`;
        if (e.stack) {
            errorMessage += `\`\`\`${e.stack}\`\`\``; // Include stack trace if available
        }
        
        // Truncate error message if too long
        if (errorMessage.length > 2000) {
            errorMessage = errorMessage.slice(0, 1997) + '...';
        }
        
        await textChannel.send(errorMessage);
    }

    // Log the error for further analysis
    console.error('An error occurred:', e);
}
