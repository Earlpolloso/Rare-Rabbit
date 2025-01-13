const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/oauth2/authorize?client_id=1328164778320859237',
      privacy: 'https://discord.gg/8pnusW99jB',
      terms: 'https://discord.gg/8pnusW99jB',
    },
    presence: {
      name: status,
      type: 'Listening',
      url: 'https://discord.gg/8pnusW99jB'
    },
    credits: {
      developerId: '1273097681538908263',
      supportServer: 'https://discord.gg/8pnusW99jB'
    },
  }
}
