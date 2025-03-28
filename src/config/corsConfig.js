import cors from 'cors';

export const corsConfig = cors({
    origin : 'http://localhost:5173',
        credentials: true,               // Allow credentials (cookies, authorization headers, etc.)
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'],
});