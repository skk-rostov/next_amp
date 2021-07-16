import dbConnect from '../../../utils/dbConnect';
import News from '../../../models/News';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const news = await News.findById(id);

                if (!news) {
                    res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: news })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'PUT':
            try {
                const news = await News.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!news) {
                    res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: news })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

            case 'DELETE':
                try {
                    const deleteNews = await News.deleteOne({_id: id})
    
                    if (!deleteNews) {
                        res.status(400).json({ success: false })
                    }
    
                    res.status(200).json({ success: true, data: {} })
                } catch (error) {
                    res.status(400).json({ success: false })
                }
                break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}