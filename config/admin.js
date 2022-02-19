module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8b59e81ecaec4e1dd9c3f4668208026'),
  },
});
