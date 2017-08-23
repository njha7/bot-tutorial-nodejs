var HTTPS = require('https');
var config = require('./config');
var Parser = require('./commands');
var botID = config.BOTID;


//TODO: add more types of spam posting
function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var cmd = request.text.split(' ');
  console.log(cmd);
  if(request.text && (cmd[0] in Parser)) {
    this.res.writeHead(200);
    postMessage(cmd);
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}


function postMessage(command) {
  var botResponse, options, body, botReq;
  botResponse = Parser[command[0]](command);
  console.log(botResponse);

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;