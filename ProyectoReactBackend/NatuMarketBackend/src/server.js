const express = require('express');

const app = express();

app.listen(process.env.Port, () => {
	console.log('Server on port 4000');
});
