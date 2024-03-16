import bcrypt from 'bcrypt';
import {User} from '../models/User.js'

export const getHome=(req, res) =>{
    res.send('this works!');
};

export const signUp=async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.json({ message: 'User created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to create user' });
    }
  };
export const logIn=async(req,res)=>{
    async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
          res.json({ token });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Login failed' });
        }
      };
}