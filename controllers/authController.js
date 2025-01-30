const jwt = require('jsonwebtoken');


const generateToken = (req, res) => {
  const token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '15m' }); 
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '1d' }); 

  res.json({ token, refreshToken });
};


const refreshToken = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token is required' });
  }

  try {

    jwt.verify(refreshToken, process.env.JWT_SECRET);

    const newToken = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired refresh token' });
  }
};

module.exports = { generateToken, refreshToken };