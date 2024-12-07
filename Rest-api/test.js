const mongoose = require('mongoose');
const Post = require('./models/postModel');  // Adjust the path if necessary

// Replace with your MongoDB connection string
const { dbURL } = require('./config/config');  // Assuming your database URL is in config

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Example to create a new post
    const newPost = new Post({
      photo: "SAdsssface",
      location: {
        latitude: 17.7749,
        longitude: -222.4194,
        address: "1222w2 Riverside Drive, San Francisco, CA"
      },
      creator: "fasssasw",
      created_time: new Date(),
      size_of_dump: "fasewe",
      people_needed: 10,
      tools_needed: ["gloves", "trash bags", "rakes", "shovels", "wheelbarrows"],
      userId: "60d2b5f1f5b9f813eac78c0d", // Sample userId (replace with actual userId from your DB)
      themeId: "60d2b5f1f5b9f813eac78c11" // Sample themeId (replace with actual themeId from your DB)
    });

    // Save the new post
    newPost.save()
      .then(post => {
        console.log("Post saved successfully:", post);
        mongoose.disconnect();  // Disconnect after saving
      })
      .catch(err => {
        console.error("Error saving post:", err);
        mongoose.disconnect();  // Disconnect even in case of an error
      });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });