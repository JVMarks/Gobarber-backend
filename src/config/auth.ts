export default {
  jwt: {
    secret: process.env.APP_SECRET || '2a3b51b8ae5b2540c9a59cc3fb31c531',
    expiresIn: '1d',
  },
};
