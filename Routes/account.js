const User = require('../Schema/schemaUser');
const passwordHash = require('password-hash');
    
    function signup (req,res) {
        if(!req.body.email || !req.body.password){
            res.status(400).json({
                "text":"Cette profil exits deja"
            })
        }else {
            var user = {
                email:req.body.email,
                password:passwordHash.generate(req.body.password)
            }
            var findUser = new Promise ( (resolve, reject) => {
                User.findOne({
                    email:user.email
                }, (err, result) => {
                    if (err){
                        reject(500);
                    }else {
                        if (result){
                            reject(204)
                        } else {
                            resolve(true)
                        } 
                    }
                })
            })

            findUser.then( () => {
                var _u = new User (user);
                _u.save( (err, user) => {
                    if (err) {
                        res.status(500).json({
                            "text":"Erreur interne"
                        })
                    } else {
                        res.status(200).json({
                            "text":"Succes",
                            "token": user.getToken()
                        })
                    }
                })
            }, (error) => {
                switch (error) {
                    case 500:
                    res.status(500).json({
                        "text": "Error interne"
                    })
                    case 204:
                    res.status(204).json({
                        "text":"L'adresse email existe déja"
                    })
                    break;
                    default:
                    res.status(500).json({
                        "text":"Erreur interne"
                    })
                }
            })
        }
    };

    function login (req, res) {
        if (!req.body.email || !req.body.password) {
            //le cas où l'email ou le password ne sont pas soumit
            res.status(400).json({
                "text":"Requete invalide"
            })
        } else {
            User.findOne({
                email:req.body.email
            }, (err, user) => {
                if (err) {
                    res.status(500).json({
                        "text": "Erreur interne"
                    })
                } else if (!user) {
                    res.status(401).json({
                        "text":"User not found"
                    })
                } else {
                    if (user.authenticate(req.body.password)) {
                        res.status(200).json({
                            "token": user.getToken(),
                            "text":"Authenticate réussi"
                        })
                    } else {
                        res.status(401).json({
                            "text":"Password Invalid"
                        })
                    }
                }
            })
        }
    }

exports.login = login;
exports.signup = signup;

