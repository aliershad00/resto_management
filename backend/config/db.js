const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose")

const url = "mongodb+srv://rkhan01aa:Ershad_Ali_10@cluster0.ihbye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("DB Connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
  return mongoose.connect(url)
}

module.exports = connectToDB;


