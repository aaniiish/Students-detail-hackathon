// // // Import required packages
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // // Initialize Express app
// // const app = express();
// // app.use(cors());
// // app.use(bodyParser.json()); // Middleware to parse JSON

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017')
// //   .then(() => console.log('✅ MongoDB connected'))
// //   .catch(err => console.log('❌ MongoDB connection error:', err));

// // // --- Schemas ---
// // const UserSchema = new mongoose.Schema({
// //   username: String,
// //   password: Number,
// // });

// // const CartSchema = new mongoose.Schema({
// //   name: String,
// //   price: Number,
// //   image: String
// // });

// // // --- Models (with collection names) ---
// // const User = mongoose.model('User', UserSchema, 'users');         // 👈 Collection: users
// // const CartItem = mongoose.model('CartItem', CartSchema, 'cartitems'); // 👈 Collection: cartitems

// // // --- Routes ---

// // // Login Route
// // // app.post('/login', async (req, res) => {
// // //   try {
// // //     const { username, password } = req.body;
// // //     const user = new User({ username, password });
// // //     await user.save();
// // //     console.log('✅ User saved:', user);
// // //     res.send({ message: 'User saved successfully' });
// // //   } catch (error) {
// // //     console.log('❌ Error saving user:', error);
// // //     res.status(500).send({ message: 'Error saving user', error });
// // //   }
// // // });
// // app.post('/login', async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     const user = await User.findOne({ username, password });

// //     if (user) {
// //       console.log('✅ User login successful:', user);
// //       res.send({ message: 'Login successful' });
// //     } else {
// //       console.log('❌ Invalid credentials');
// //       res.status(401).send({ message: 'Invalid username or password' });
// //     }

// //   } catch (error) {
// //     console.log('❌ Error during login:', error);
// //     res.status(500).send({ message: 'Server error', error });
// //   }
// // });

// // // Cart Route
// // app.post('/login', async (req, res) => {
// //   const { username, password } = req.body;
// //   const user = await User.findOne({ username, password });

// //   if (user) {
// //     res.send({ message: 'Login successful' });
// //   } else {
// //     res.status(401).send({ message: 'Invalid credentials' });
// //   }
// // });

// // // Start server
// // app.listen(3000, () => {
// //   console.log('🚀 Server running at http://localhost:3000');
// // });
// // Import required packages
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Initialize Express app
// const app = express();
// app.use(cors());
// app.use(bodyParser.json()); // Middleware to parse JSON

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/logindb')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.log('❌ MongoDB connection error:', err));

// // --- Schemas ---
// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: Number
// });

// const CartSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   image: String,
//   quantity:Number
// });

// // --- Models ---
// const User = mongoose.model('User', UserSchema, 'users');
// const CartItem = mongoose.model('CartItem', CartSchema, 'cartitems');

// // --- Routes ---

// // ✅ Login Route (Only one)
// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username, password });

//     if (user) {
//       console.log('✅ User login successful:', user);
//       res.send({ message: 'Login successful' });
//     } else {
//       console.log('❌ Invalid credentials');
//       res.status(401).send({ message: 'Invalid username or password' });
//     }
//   } catch (error) {
//     console.log('❌ Error during login:', error);
//     res.status(500).send({ message: 'Server error', error });
//   }
// });

// // ✅ Cart Route (Add item to MongoDB)
// app.post('/cart', async (req, res) => {
//   try {
//     const { name, price, image ,quantity} = req.body;
//     const newItem = new CartItem({ name, price, image,quantity });
//     await newItem.save();
//     console.log('✅ Cart item saved:', newItem);
//     res.send({ message: 'Item added to cart' });
//   } catch (error) {
//     console.log('❌ Error saving cart item:', error);
//     res.status(500).send({ message: 'Cart save failed', error });
//   }
// });

// // --- Start server
// app.listen(3000, () => {
//   console.log('🚀 Server running at http://localhost:3000');
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/logindb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // Donor schema
// const donorSchema = new mongoose.Schema({
//   name: String,
//   dob: String,
//   email: String,
//   foodDonated: { type: Number, default: 0 },
//   badges: { type: Number, default: 0 },
//   moreToGo: { type: Number, default: 5 }
// });

// const Donor = mongoose.model('Donor', donorSchema);

// // API: Create / Update donor
// // app.post('/api/donor', async (req, res) => {
// //   const donor = await Donor.findOneAndUpdate(
// //     { email: req.body.email },
// //     req.body,
// //     { new: true, upsert: true }
// //   );
// //   res.json(donor);
// // });
// // POST: Save new donor
// app.post('/api/donor', async (req, res) => {
//   const donor = req.body;
//   await donorsCollection.updateOne(
//     { email: donor.email },
//     { $set: donor },
//     { upsert: true }
//   );
//   res.json({ message: 'User saved', donor });
// });

// // PUT: Update donation count
// app.put('/api/donor/:email', async (req, res) => {
//   const email = req.params.email;
//   const updatedData = req.body;
//   await donorsCollection.updateOne({ email }, { $set: updatedData });
//   res.json({ message: 'User updated', updatedData });
// });ng 

// // API: Get donor
// app.get('/api/donor/:email', async (req, res) => {
//   const donor = await Donor.findOne({ email: req.params.email });
//   res.json(donor);
// });

// // API: Add donation
// app.post('/api/donor/donate', async (req, res) => {
//   const donor = await Donor.findOne({ email: req.body.email });
//   if (donor) {
//     donor.foodDonated++;
//     if (donor.foodDonated % 5 === 0) donor.badges++;
//     donor.moreToGo = 5 - (donor.foodDonated % 5);
//     if (donor.moreToGo === 5) donor.moreToGo = 0;
//     await donor.save();
//     res.json(donor);
//   } else {
//     res.status(404).json({ error: 'Donor not found' });
//   }
// });

// app.listen(5000, () => console.log('Server running on port 5000'));
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));

// Define a Mongoose Schema for a User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  // You can add other fields like password hash here
});

const User = mongoose.model('User', userSchema);

// API Route for Login/User Creation
// app.post('/api/login', async (req, res) => {
//   const { username } = req.body;

//   if (!username) {
//     return res.status(400).json({ message: 'Username is required' });
//   }

//   try {
//     // Find or create the user
//     let user = await User.findOne({ username });

//     if (!user) {
//       user = new User({ username });
//       await user.save();
//       res.status(201).json({ message: 'User created and logged in', user });
//     } else {
//       res.status(200).json({ message: 'User found and logged in', user });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`
  
//   );
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/angular_auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 🔹 User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// 🔹 Register API
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if already exists
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.json({ message: 'Registration successful', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

// 🔹 Login API
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));