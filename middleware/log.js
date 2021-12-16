


function printRequest(req, res, next) {
    console.log("Request", req.method, req.originalUrl.split('?api')[0], "sent")
    next();
    res.on('finish', function (chunk) {
      if (this.statusCode == 200 || this.statusCode == 304 || this.statusCode == 307)
        console.info("Request", this.req.method, this.req.originalUrl.split('?api')[0],  "statusCode: " + this.statusCode);
      else 
        console.error("Request", this.req.method, this.req.originalUrl.split('?api')[0], "statusCode: " + this.statusCode);
    });
  }

module.exports = {printRequest};