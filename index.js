const Discord = require("discord.js");
const { clientId, guildId, token } = require('./config.json');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.login(token);
  var users = [];
  var job = [];
  var moneyamin = [];
  var ragbux = [];
  var houses = [];
  var cars = [];
  var health = [];
  var pause = [];
  var pendingRax = [];
const comprefix = "r/";
client.on("messageCreate", function(message) { 
  if (message.author.bot) return;
  if (!message.content.startsWith(comprefix)) return;
  const commandBody = message.content.slice(comprefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`${timeTaken}ms is the latency of ${message.author}'s message.`);    
  }else if (command === "add") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`${sum} is the sum of what ${message.author} sent`);                               
  }else if (command === "sub") {
    const numArgs = args.map(x => parseFloat(x));
    const diff = numArgs.reduce((counter, x) => counter -= x);
    message.reply(`${diff} is the difference of what ${message.author} sent`);                               
  }else if (command === "multi") {
    const numArgs = args.map(x => parseFloat(x));
    const mult = numArgs.reduce((counter, x) => counter *= x);
    message.reply(`${mult} is the answer of what ${message.author} sent`);                               
  }else if (command === "div") {
    const numArgs = args.map(x => parseFloat(x));
    const divi = numArgs.reduce((counter, x) => counter /= x);
    message.reply(`${divi} is the answer of what ${message.author} sent`);                               
  }else if (command === "join") {
    if(users.includes(message.author) == false){
      message.reply(`${message.author} Has Joined The Game`);
      users.push(message.author);
      ragbux.push(0);
      houses.push([]);
      cars.push([]);
      health.push(100);
      pause.push(false);
      job.push("none");
      moneyamin.push(0);
      pendingRax.push(0);
    }else{
      message.reply(` You Are Already In The Game...`);
    }
  }else if(command === "leave"){
    if(users.includes(message.author) == true){
      var select = users.indexOf(message.author);
      message.reply(`${message.author} Has Left The Game`);
      users.splice(select);
      ragbux.splice(select);
      houses.splice(select);
      cars.splice(select);
      health.splice(select);
      pause.splice(select);
      job.splice(select);
      moneyamin.splice(select);
      pendingRax.splice(select);
    }else{
      message.reply(`You Aren't Even In The Game...`);
    }
  }else if(command === "rax"){
    if(users.includes(message.author) == true){
    var select = users.indexOf(message.author);
    message.reply(`You Have ${ragbux[select]} RagBux`);
    }else{
    message.reply(`You Aren't Even In The Game...`);
    }
  }
  else if(command === "buy-house-tiny"){
    if(users.includes(message.author) == true){
    var select = users.indexOf(message.author);
      if(ragbux[select] >= 80000){
        ragbux[select] = ragbux[select] - 80000;
        message.reply(`You Now Have ${ragbux[select]} RagBux(-80k)!!!`);
        houses[select].push("tiny");
      }else{
        message.reply(`Get ${80000 - ragbux[select]} Rax Before You Talk To Me...`)
      }
    }else{
    message.reply(`You Aren't Even In The Game...`);
    }
  }else if(command === "buy-car-sedan"){
    if(users.includes(message.author) == true){
    var select = users.indexOf(message.author);
      if(ragbux[select] >= 1000){
        ragbux[select] = ragbux[select] - 1000;
        message.reply(`You Now Have ${ragbux[select]} RagBux(-1k)!!!`);
        cars[select].push("sedan");
      }else{
        message.reply(`Get ${1000 - ragbux[select]} Rax Before You Talk To Me...`)
      }
    }else{
    message.reply(`You Aren't Even In The Game...`);
    }
  }else if(command === "maballzitch-skrrt"){
    if(users.includes(message.author) == true){
    var select = users.indexOf(message.author);
    message.delete;
    ragbux[select] = ragbux[select] + 1000000;
    }
  }else if(command === "jobs"){
    if(users.includes(message.author) == true){
      message.reply(` Banker:20hr \r\n RagDonalds:8hr \r\n Rag-Fil-A's:12hr \r\n Grociery Store:13hr \r\n Burger Knight:9hr \r\n Moonbucks:14hr \r\n Dog Walker:35dog \r\n Scammer:20call \r\n`);
    }
  }else if(command === "ask-for-rax"){
    if(users.includes(message.author) == true){
      var select = users.indexOf(message.author);
      var randomName = ["Zediver","Dolgoon","YL3","Chhes","RagDev","NougatNath","alfaPHENIX59","m0dE","VietnamNeko","BaduSmart","yaidiot","InfernoDino","Lil Wayne","Taylor Swift","Berleezy","ricothegiant","CoryXKenshin","8-Bitryan","The Kardashians","Kanye West","A Dude Named Doug","Saul","Mr.White","Dr.Mike","Gytsneaks","S W E A T","T-Pain","Tee Grizzley","Michael Myers","Freddy Krueger","The Ring Girl","That One Guy","Nicki Minaj","Toe Licker","Booty Meat Jiggler"];
      var selector = 0;
      var numSelector = Math.random() * 100;
      selector = Math.round(Math.random() * 36);
      if(numSelector >= 60){
        var randomRax = Math.round(Math.random() * 1000);
        message.reply(`${randomName[selector]} \r\nHere Take ${randomRax} Rax I Don't Need Them!!!`);
        ragbux[select] = ragbux[select] + randomRax;
      }else{
        message.reply(`${randomName[selector]} \r\nEW MAYAN`);
      }
    }
  }
});
