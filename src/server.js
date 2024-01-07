import './instrumentation.js'
import { handler } from '../../authjs/build/handler.js'
import express from 'express';
const PORT = parseInt(process.env.PORT || '5173');
import dotenv from 'dotenv';
dotenv.config()

const app = express();


app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

app.use(handler);

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

