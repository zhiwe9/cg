var zip = require('node-zip-dir');
 
zip.unzip('C:/common_ground/cg2.zip', 'C:/common_ground/cg2').then(function() {
    console.log('success');
}).catch(function(err) {
    console.error(err);    
});
 
 