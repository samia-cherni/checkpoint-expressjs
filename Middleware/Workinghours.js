function workingHours (req, res, next) { 
    let ts = Date.now();
    let date_ob = new Date(ts);
    let day= date_ob.getDay();
    let hour = date_ob.getHours();
    if(day > 0 && day < 6 && hour > 9 && hour < 17){
        next();
    }else{
        res.render('Offline',{title:'Offline'})
        
    }
  };
module.exports = workingHours;