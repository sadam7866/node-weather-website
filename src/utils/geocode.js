const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2FkYW03ODY2IiwiYSI6ImNqeThlZXY1dDAwOTAzZG4wcDJ5bG9lOWkifQ.0kf478QlqqmEDMLve3Uh_w'
    request({ url, json:true},(error, {body}) => {
        if(error){
            callback('unable to connect location service',undefined)
        }else if(body.features.length === 0) {
            callback('unable to find latitude and longitude',undefined)
       }else {
           callback(undefined, {
            latitude: body.features[0].center[0],
            longitude: body.features[0].center[1],
            location: body.features[0].place_name
           }) 
       }
    })
}

module.exports= geocode