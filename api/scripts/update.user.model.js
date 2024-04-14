import User from '../models/User.model.js';

const cursor = User.find().cursor();
for (let user = await cursor.next(); user != null; user = await cursor.next()) {
  if (!user.name) {
    user.name = 'No name provided'; // Replace this with the actual value you want
    await user.save();
  }
}
