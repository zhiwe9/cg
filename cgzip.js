var zip = require('node-zip-dir');
 
// ?? 
zip.zip('c:/cg', 'c:/common_ground/cg2.zip').then(function() {
    console.log('success');
}).catch(function(err) {
    console.error(err);    
});