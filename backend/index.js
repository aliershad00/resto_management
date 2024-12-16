// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const _dirname = path.resolve();


const corsOption = {
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true
}
app.use(cors(corsOption))

// Middleware

app.use(bodyParser.json());

//this Route is for only backend- homeroute  for this not need to render when we use backend server port as also frontend using sendFile
// const homeRouter = require("./routes/home.router.js")
// app.use("/", homeRouter);

const authRouter = require("./routes/authRoutes.js")
app.use("/auth", authRouter)

const userRouter = require("./routes/userRoutes.js");
app.use("/api/users", userRouter)

const foodRouter = require("./routes/menuItemRoutes.js");
app.use("/api/food", foodRouter);

const adminfoodRouter = require("./routes/adminMenuItemRoutes.js");
app.use("/api/admin/food", adminfoodRouter);

const categoryRouter = require("./routes/categoryRoutes.js");
app.use("/api/category", categoryRouter);

const adminCategoryRouter = require("./routes/adminCategoryRoutes.js");
app.use("/api/admin/category", adminCategoryRouter);

const adminIngredientRouter = require("./routes/adminIngredientRoutes.js");
app.use("/api/admin/ingredients", adminIngredientRouter);

const cartRouter = require("./routes/cartRoutes.js")
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routes/cartItemRoutes.js")
app.use("/api/cart-item", cartItemRouter);

const orderRouter = require("./routes/orderRoutes.js");
app.use("/api/order", orderRouter);

const adminOrderRoutes = require("./routes/adminOrderRoutes.js");
app.use("/api/admin/order", adminOrderRoutes);

const restaurantRouter = require("./routes/restaurantRoutes.js");
app.use('/api/restaurants', restaurantRouter)

const adminRestaurantRouter = require("./routes/adminRestaurantRoutes.js");
app.use('/api/admin/restaurants', adminRestaurantRouter)

const eventRoutes = require("./routes/eventRoutes.js");
app.use('/api/events', eventRoutes)

const adminEventRoutes = require("./routes/adminEventRoutes.js")
app.use("/api/admin/events", adminEventRoutes)


app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"))
});

module.exports = { app };
