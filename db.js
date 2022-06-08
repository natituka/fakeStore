require('dotenv').config()
const
    mongoose = require('mongoose'),
    CONNECTION_STRING = process.env.CONNECTION_STRING

async function connect() {
    try {
        await mongoose.connect(CONNECTION_STRING,
            { useNewUrlParser: true },
            (error) => {
                if (error) { console.log('error 1:', error) }
                console.log(mongoose.connection.readyState)

            })
    } catch (error) {
        console.log('error 2:', error, mongoose.connection.readyState)
    }
}

connect()