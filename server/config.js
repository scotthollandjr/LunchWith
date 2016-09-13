module.exports = function() {
  switch(process.env.NODE_ENV){
    case 'development':
    return {
      databaseURL: "postgres://localhost:5432/lunchwith",
      linkedin: {
        clientID: "78b3ua1u1ptbbj",
        clientSecret: "TN6C4QGvwiY5mIS1",
        callbackURL: "/auth/linkedin/callback"
      }
    };

    default:
    return {
      databaseURL: "postgres://localhost:5432/lunchwith",
      linkedin: {
        clientID: "78b3ua1u1ptbbj",
        clientSecret: "TN6C4QGvwiY5mIS1",
        callbackURL: "/auth/linkedin/callback"
      }
    };
  }
};
