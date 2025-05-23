const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});