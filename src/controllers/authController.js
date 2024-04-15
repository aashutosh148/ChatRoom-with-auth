const User = require('../models/user');

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.postSignup = async (req, res) => {
    const { name, password } = req.body;

    try {
        const checking = await User.findOne({ name });

        if (checking) {
            return res.redirect('/login?error=User+details+already+exist');
        }

        await User.create({ name, password });

        res.redirect('/login?success=User+created+successfully');
    } catch (err) {
        console.error('Error creating user:', err);

        res.redirect('/login?error=An+error+occurred.+Please+try+again+later.');
    }
};


exports.getLogin = (req, res) => {
    const errorMessage = req.query.error;
    res.render('login', { errorMessage });
};

exports.postLogin = async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.redirect('/login?error=User+not+found');
        }

        if (user.password !== password) {
            return res.redirect('/login?error=Incorrect+password');
        }

        req.session.user = user;
        res.redirect('/chat');
    } catch (err) {
        res.redirect('/login?error=An+error+occurred.+Please+try+again+later.');
    }
};