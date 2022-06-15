import mongoose from 'mongoose'

const uri = "mongodb+srv://myuserroot:4wKe3ZyF2zJM9q@study.vbvf1.mongodb.net/?retryWrites=true&w=majority";

const mongosseConnection = mongoose
mongosseConnection.connect(uri);

export { mongosseConnection }