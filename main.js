const TelegramBot = require('node-telegram-bot-api');

const token = '6075073495:AAFUYmtOcbJ7bNCcMK9-YGn3br25mUaPQu8';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Bu joyda bot izohlarini qaytaradi
    bot.sendMessage(chatId, 'Sizning xabaringizni qabul qildim: ' + messageText);
});
