import TestController from '../controller/testController';

module.exports = function(app) {


    // vehicles routes
    app.route('/test')
        .get( TestController.testing_purpose)
        .post( TestController.testing_purpose)






};