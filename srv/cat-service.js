const cds = require('@sap/cds')

module.exports = cds.service.impl(function () {

  this.on('GET','Books', async (req) => {
 var a =   { "ID" : 1000,
    "title"  : "GOT",
    "stock"  : 10
   }
   return a
  })
    })