

const User = require('../models/user');

// Login user...............................
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  
  if (user.password !== password) {
    return res.status(403).json({ error: 'Invalid  password' });
  }
  
  res.json({
    status: 200,
    message: "success",
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      userRole: user.userRole,
      clinicName: user.clinicName,
      clinicCode: user.clinicCode,
      clinicBlock: user.clinicBlock,
    },
  });
}

module.exports = {
  loginUser,
};
