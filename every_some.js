function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submited){
            return goodUsers.some(function(good) {
                return good.id === submited.id;
            })
        })
    };
}

module.exports = checkUsersValid