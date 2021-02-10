const cron = require('node-cron');

cron.schedule("*/1 * * * *",data)

function data(){
    var current = new Date();
    return console.log('Script is running' +' '+ current.toLocaleTimeString() );
}  