module.exports = {
  databaseURL: process.env.DATABASE_URL || 'postgres://localhost:5432/lunchwith',
  linkedin: {
    clientID: "78b3ua1u1ptbbj",
    clientSecret: "TN6C4QGvwiY5mIS1",
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  }
};
