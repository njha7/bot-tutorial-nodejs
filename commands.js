var GoodShit = require('./goodshit');

commands = {};
commands['/goodshit'] = GoodShit.goodShitParser;

module.exports = commands;