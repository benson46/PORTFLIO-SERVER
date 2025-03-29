import { createClient } from 'redis';
import config from '../../config/dotenv.js';

const client = createClient({
    username: 'default',
    password: config.REDIS_PASSWORD,
    socket: {
        host: config.REDIS_HOST,
        port: config.REDIS_PORT,
    }
});

client.on('error', err => console.log('Redis Client Error', err));
client.on('connect',()=>console.log('Redis Client Connected'));

export default client;

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  

