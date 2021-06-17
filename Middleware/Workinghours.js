function workingHours (req, res, next) {
    var date = new Date();
    if(date.getDay() > 0 && date.getDay() < 6 && date.getHours() > 9 && date.getHours < 17){
        next();
    }else{
        
        res.render('Offline',{title:'Offline'})
    }
  };
module.exports = workingHours;