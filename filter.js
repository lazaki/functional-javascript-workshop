// function getShortMessages(messages) {
//     return messages.filter(function (item) {
//         return item.message.length < 50
//     }).map(function (item) {
//         return item.message
//     })
// }


var msgArray = [];

function filter(getMessages, messages) {
    for (var i = 0; i < messages.length; i++) {
        if (getMessages(messages[i])) {
            msgArray.push(messages[i])
        }
    }
    return msgArray;
}

function map(getStringMessage,msgArray) {
    var namesArray=[];
    for(var i=0; i<msgArray.length; i++) {
         namesArray.push(getStringMessage(msgArray[i]))
    }
    return namesArray;
}


function getShortMessages(messages) {
    var shortMessages = filter(function (item) {
        return item.message.length < 50
    }, messages);
    return map(function (item) {
        return item.message
    }, shortMessages);
}

module.exports = getShortMessages