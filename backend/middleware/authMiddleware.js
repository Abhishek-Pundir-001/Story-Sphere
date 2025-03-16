import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    // console.log(token)

    if (!token) {
        return res.json({
            success: false,
            message: "please login again"
        })
    }

    try {
        const decoded_token = await jwt.verify(token, process.env.JwT_SECRET);
        req.body.userId = decoded_token.id
        next()
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }


}

export default authMiddleware;