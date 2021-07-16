const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Пожалуйста добавьте заголовок новости'],
    maxlength: [100, 'Заголовок не может быть более 100 символов']
  },
  news_url: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: [true, 'Пожалуйста добавьте описание новости'],
    maxlength: [3000, 'Новость ограничена 3000 символо']
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false
  },
  enabled: {
    type: Boolean,
    required: true,
    default:false
  },
});

// const News = mongoose.model('v2_news', NewsSchema);
// module.exports = News;
module.exports = mongoose.models.News2 || mongoose.model('News2', NewsSchema);
