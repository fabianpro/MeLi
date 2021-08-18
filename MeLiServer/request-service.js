const https = require('https');

function doRequest(uri, cb) {	
	https.get(uri, res => {
	  let data = [];
	  res.on('data', chunk => data.push(chunk));
	  res.on('end', () => {
	    const dataResponse = JSON.parse(Buffer.concat(data).toString());
	    cb(null, dataResponse);
	  });
	}).on('error', err => console.log('Error: ', err.message));
}

module.exports = {doRequest: doRequest};
