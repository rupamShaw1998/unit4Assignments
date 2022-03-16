const app = require("./index");
const connect = require("./config/db");

app.listen(4000, async () => {
    try {
        await connect();
    }
    catch(err) {
        console.log(err);
    }
    console.log("Listening at port 4000");
});

