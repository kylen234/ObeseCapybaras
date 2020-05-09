const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose
    .connect('mongodb+srv://charliezheng:ogNICEj0Aq36AxUb@obese-capybaras-bptx9.mongodb.net/employees?retryWrites=true&w=majority', { useUnifiedTopology: true,
        useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;