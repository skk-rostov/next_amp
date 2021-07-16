import jwt from 'jsonwebtoken'

export default function seckretPage(req, res) {
    const { token } = req.body

    const { admin } = jwt.verify(token, process.env.KEY)

    if(admin) {
        res.json({secretAdminCode: 12345})
    }else{
        res.json({admin: false})
    }
}