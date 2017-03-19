import userController from './user';
import contactController from './contact';

export default {
  registerRoutes(app) {
    app.get('/contact', contactController.contactGet);
    app.post('/contact', contactController.contactPost);
    app.get('/account', userController.ensureAuthenticated, userController.accountGet);
    app.put('/account', userController.ensureAuthenticated, userController.accountPut);
    app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
    app.get('/signup', userController.signupGet);
    app.post('/signup', userController.signupPost);
    app.get('/login', userController.loginGet);
    app.post('/login', userController.loginPost);
    app.get('/forgot', userController.forgotGet);
    app.post('/forgot', userController.forgotPost);
    app.get('/reset/:token', userController.resetGet);
    app.post('/reset/:token', userController.resetPost);
    app.get('/logout', userController.logout);
    app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
  },
};
