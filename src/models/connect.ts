require('dotenv').config()
import mongoose from 'mongoose'

const uri = `${process.env.URI_MONGO}`;

const mongosseConnection = mongoose
mongosseConnection.connect(uri);

export { mongosseConnection }