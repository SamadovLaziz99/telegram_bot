const TELEGRAM_BOT_TOKEN = "6075073495:AAFUYmtOcbJ7bNCcMK9-YGn3br25mUaPQu8";
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds = [];

bot.on('text', (msg) => msg.reply.text("blabla: " + msg.text));
bot.on(['/start'], (msg) => {
    msg.reply.text("Hello: " + msg.from.first_name);
    // console.log('msg:', msg);
    let chatId = msg.chat.id;
    if (!chatIds.includes(chatId)) {
        chatIds.push(chatId);
        msg.reply.text("Boshladik!!!!!");
    }
});
bot.on(['/stop'], (msg) => {
    let chatId = msg.chat.id;
    chatIds.pop(chatId);
});
bot.start();
