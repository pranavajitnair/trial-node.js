const request=require('request');
const yargs=require('yargs');
/*const url='https://api.darksky.net/forecast/d214c28dd7bc8234bfc0e3d54a1f377c/37.8267,-122.4233?units=si&lang=ko';
request({url:url,json:true},(error,response)=>{
    const data=response.body;
   // console.log(data); 
    console.log(data.daily.data[0].summary+' todays temperature is '+data.currently.temperature+' chance of rain is '+data.currently.precipProbability);
})
const newurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhbmF2bjEwIiwiYSI6ImNqemFyeGlrYjAwZmwzaGxlZzY3MHM2MDYifQ.TgXNy14NEJnWEgMndM-k_A'
request({url:newurl,json:true},(error,response)=>{
   // console.log(error.body);
   if(error) { console.log('could not process your response');}
   else if(response.body.features.length==0){console.log('could not find your resposne');}
  else { const data=response.body.features[0].center;
   console.log('latitude='+data[0]+' longitude='+data[1]);}
})*/
const convert=(address,callback)=>{
    const newurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicHJhbmF2bjEwIiwiYSI6ImNqemFyeGlrYjAwZmwzaGxlZzY3MHM2MDYifQ.TgXNy14NEJnWEgMndM-k_A'
    var t;
request({url:newurl,json:true},(error,response)=>{
   if(error) { callback('could not process your response');}
   else if(response.body.features.length==0){callback('could not find your resposne');}
  else { const data=response.body.features[0].center;
    const url='https://api.darksky.net/forecast/d214c28dd7bc8234bfc0e3d54a1f377c/'+data[1]+','+data[0]+'?units=si&lang=en';
    request({url:url,json:true},(error,response)=>{
        const ndata=response.body;
        callback(ndata.daily.data[0].summary+' todays temperature is '+ndata.currently.temperature+' chance of rain is '+ndata.currently.precipProbability);
    })
    }
})
}
module.exports={
    convert:convert
}