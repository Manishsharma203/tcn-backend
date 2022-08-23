const mongoose = require("mongoose");
const PORT=8000
async function connectToDB(dataBaseUrl,app) {
    try {
      const result = await mongoose.connect(dataBaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      if (result) {
        app.listen(PORT, () => {
          console.log(`Server started listening on port:${PORT} and db connected`);
        });
      }
    } catch (err) {
      console.log(`Database connection error: ${err}`);
    }
  }

module.exports = connectToDB