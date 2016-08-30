module.exports = {
  databaseURL: process.env.DATABASE_URL || 'postgres://localhost:5432/lunchwith',
  linkedin: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  }
};
