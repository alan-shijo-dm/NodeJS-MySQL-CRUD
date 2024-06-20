import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';
import methodOverride from 'method-override';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.dirname(fileURLToPath(import.meta.url))));

app.get('/', (req,res) => {
    res.redirect('/users');
});
app.use('/users' ,userRoutes);

export default app;