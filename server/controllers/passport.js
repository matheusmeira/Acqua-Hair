import passport from 'passport';

export default {
  registerRoutes(app) {
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
    app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
    app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));
    app.get('/auth/vkontakte', passport.authenticate('vkontakte', { scope: ['email'] }));
    app.get('/auth/vkontakte/callback', passport.authenticate('vkontakte', { successRedirect: '/', failureRedirect: '/login' }));
    app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email profile repo' ] }));
    app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/login' }));
  },
};
