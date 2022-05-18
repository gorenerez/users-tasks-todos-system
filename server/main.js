const express = require('express');
const usersRouter = require('./routers/usersRouter');
const cors = require('cors');

const app = express()

app.use(cors())

app.use(express.json())

require('./configs/database');

app.use('/api/users', usersRouter);

app.listen(8000);