import https from 'https';

const options = {
  hostname: 'smartdial.co.in',
  path: '/sdpanel/api/index.php/Auth/getplandata',
  method: 'GET',
  headers: {
    'X-API-KEY': 'Surplus_apikey@'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log("STATUS:", res.statusCode);
    console.log("DATA:", data);
  });
});

req.on('error', (e) => {
  console.error("ERROR:", e);
});

req.end();
