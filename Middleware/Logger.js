function logger(req, res, next) {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  const zeroFill = (i)=> {
    return (i < 10 ? '0' : '') + i
  }
  console.log(req.url, "@", `${year}-${zeroFill(month)}-${zeroFill(date)} ${zeroFill(hours)}:${zeroFill(minutes)}:${zeroFill(seconds)}`);
  next();
}
module.exports = logger;
