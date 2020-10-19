const express = require("express");
const app = express();

app.get("/api/1", async (req, res) => {
	res.send("hello api:)");
});

app.use(express.static("../frontend/public"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
