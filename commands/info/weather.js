const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "weather",
  aliases: [],
  description: "Menampilkan cuaca di lokasi mu!",
  usage: "Weather <Location>",
  run: async (client, message, args) => {
    //Start
   

    if (!args[0]) return message.channel.send("Please Masukkan Nama Lokasi nya!");

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.channel.send(`Ada Sesuatu Yang Salah, Coba Lagi!`);

      if (result === undefined || result.length === 0)
        return message.channel.send(
          `Lokasi Tidak Valid, Berikan Lokasi yang Valid!`
        );

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new Discord.MessageEmbed()
        .setColor("#2ecc71")
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature}°`, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Wind", current.winddisplay, true)
        .addField("Feels Like", `${current.feelslike}°`, true)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .setTimestamp();

      message.channel.send(Weather);
    });

    //End
  }
};
