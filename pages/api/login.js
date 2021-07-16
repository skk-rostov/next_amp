import jwt from 'jsonwebtoken';

export default function (req, res) {

    const {method} = req;

    switch (method) {
        case 'GET':
            try {
                // const news = await News.find({});
                console.log('login GET')
                res.status(200).json({success: true, data: req.body});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;

            case 'POST':
                try {
                    // const news = await News.create(req.body);
                    console.log('login POST');
                    if(!req.body) {
                        res.status(404).json({success: false})
                    }

                    const { username, password } = req.body;
                    const token = jwt.sign({
                        username,
                        admin: username === 'admin' && password === 'admin'
                    }, process.env.KEY)
    
                    res.status(201).json({success: true, data: req.body, token: token});
                } catch (error) {
                    res.status(400).json({success: false});
                }
                break;            
    
        default:
            res.status(400).json({success: false});
            break;
    }
 }