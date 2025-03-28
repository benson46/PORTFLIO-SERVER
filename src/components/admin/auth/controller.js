import {adminService} from './service.js'

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { accessToken, refreshToken } = await adminService.login(email, password);
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        
        res
        .status(200)
        .json({ message: 'Login Successfully', success: true, accessToken });
        
    } catch (error) {

        res.status(500).json({})
    }

}

// export const createAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const response = await adminService.signup(email, password);

//         res.status(200).json({ message: 'Admin Created Successfully' });

//     } catch (error) {
//         res.status(500).json({error:error})
//     }
// };


export const logout = async (req, res) => {

}