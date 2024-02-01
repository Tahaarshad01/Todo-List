import mongoose from "mongoose";

const connection = () => {
  const URI = "mongodb://127.0.0.1:27017/Mern_Todo";

  mongoose
    .connect(URI)

    .then(() => {
      console.log("database is connected");
    })
    .catch(() => {
      console.log("not connected to the database ");
    });
};
export default connection;
