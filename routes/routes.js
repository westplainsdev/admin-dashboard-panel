// EXPRESS PAGE ROUTING


module.exports = {
    register: function(app) {

        // Default routes for the entire application to launch.
        app.get('/', function(req, res){
            var data = { title: 'Dashboard', dashboard: true };
            res.render('index', data);
        });

        app.get('/license', function(req, res){
            var data = {about: true};
            res.render('license', data);
        });

        app.get('/reference', function (req, res){
            var data = {about: true};
            res.render('reference', data);
        });

        app.get('/simple', function(req, res){
            var data = {name: 'Gorilla', simple: true, title: 'Simple Example'};
            res.render('partials/simple', data);
        });

        app.get('/complex', function(req, res){
            var data = {
                name: 'Gorilla',
                address: {
                    streetName: 'Broadway',
                    streetNumber: '721',
                    floor: 4,
                    addressType: {
                        typeName: 'residential'
                    }
                },
                complex: true,
                title: 'Complex Example'
            };
            res.render('partials/complex', data);
        });

        app.get('/loop', function(req, res){
            var basketballPlayers = [
                {name: 'Lebron James', team: 'the Heat'},
                {name: 'Kevin Durant', team: 'the Thunder'},
                {name: 'Kobe Jordan',  team: 'the Lakers'}
            ];

            var days = [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ];

            var data = {
                basketballPlayers: basketballPlayers,
                days: days,
                loop: true,
                title: 'Looping'
            };

            res.render('partials/loop', data);
        });

        app.get('/logic', function(req, res){
            var data = {
                upIsUp: true,
                downIsUp: false,
                skyIsBlue: "yes",
                logic: true,
                title: 'Logic Example'
            };

            res.render('partials/logic', data);
        });

        // using the "layout" property for having an alternative layout used.
        app.get('/alt', function(req, res){
            var data = {message: 'JavaScript starter template', layout: 'alt_layout'};
            res.render('partials/alt_content', data);
        });

        app.get('/myprofile', function(req, res){

            var data = { user:
                {
                    firstname:'Generic',
                    lastname:'User',
                    company:'Some Cool Vendor',
                    email:'generic_user@example.com',
                    timeZone: 'Central Time (US &amp; Canada)',
                    username:'generic_user',
                    password: '11111122333'
                },
                about: true,
                title: 'My Profile'
            };

            res.render('partials/myprofile', data);
        });

        app.get('/question', function (req, res){
            var data = {
                instructions: 'Fill out the contact form below',
                full: true,
                title: 'Question'
            };

            res.render('partials/question', data);
        });

        app.post('/answer', function(req, res){

            var data = {
                contact: {
                    userName:  req.body.userName,
                    email:  req.body.email,
                    subject: req.body.subject,
                    message: req.body.message
                },
                full: true,
                title: 'Server Response'

            };

            res.render('partials/answer', data);
        });
    }
};