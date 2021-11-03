const app = require('./server');

const Port = app.get('port');

app.listen(Port, () => {
	console.log(`Server listening on ${Port}`);
});
