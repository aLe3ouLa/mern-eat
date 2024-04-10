import express, { Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const PORT = 7000;

mongoose.connect(process.env.MONGODB_CONNECTION as string).then(() => {
    console.log('Connecting to MongoDB...')
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test",async (req: Request, res: Response) => {
    res.json({ message: "Hello!"});
})

app.listen(PORT, () => {
    console.log("Server started on:" + PORT);
});
