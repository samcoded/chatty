import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db.js';

dotenv.config();

const port = Number(process.env.PORT) || 3000;
const address = `http://localhost:${port}`;

connectDB().then(() => {
    app.listen(port, function () {
        if (process.env.NODE_ENV !== 'production')
            console.log(`starting app on: ${address}`);
    });
});
