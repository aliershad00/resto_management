const { app } = require(".");
const connectToDB = require("./config/db");


const ListenPort = process.env.PORT || 5455
app.listen(ListenPort, async () => {
    await connectToDB()
    console.log("food ordering server running on port ", ListenPort)
})

