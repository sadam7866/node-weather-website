const request = require('request')
const forecast= (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/29daf1ceac004b804a5a48fc29e19479/'+ latitude +','+ longitude
    request({url,json: true},(error, {body}) => {
        if(error){
            callback('unable to access forecast server',undefined)
        } else if(body.error){
            callback('unable to find forecast. check your input',undefined)
        } else {
            callback(undefined, body.daily.data[0].summary+' It is currently '+ body.currently.temperature + ' degrees out. There is a '+ body.currently.precipProbability + '% chance of rain.') 
        }
    })
}

module.exports = forecast