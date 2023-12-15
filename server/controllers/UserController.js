import User from '../models/User.js';


// Register controller
export const registerUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = new User({ email, name, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
        //TODO: Add code to generate JWT and send it to the client
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Login controller
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            res.status(401).json({ error: 'Invalid email or password' });
        } else {
            res.status(200).json({ message: 'User logged in successfully' });
            //TODO: Add code to generate JWT and send it to the client
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
};

// Logout controller
export const logoutUser = (req, res) => {
    // Your code for user logout goes here
};
