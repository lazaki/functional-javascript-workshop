function loadUsers(userIds, load, done) {
    var users = []
    for (var i = 0; i < userIds.length; i++) {
        if (i++=== userIds.length) {
            return done(users)
        }
        users.push(load(userIds[i]))
    }
}

module.exports = loadUsers
