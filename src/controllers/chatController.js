exports.getChat = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login?error=Please+login+to+access+the+chat');
    }

    res.render('chat');
};