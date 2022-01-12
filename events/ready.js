module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);
};

module.exports = async(client, data) => {
  client.user.setActivity(`Polaris | discord.io/plrs`, {
      type: "WATCHING",
    });
}