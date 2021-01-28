const products = require('../products.json')



const getImage = (req, res) => {
    if(req.query.image_url){
        const item = image.filter(
            (element) => (req.query.image_url)
            )
         return res.status(200).send(item)
    }
    res.status(200).send(products)    
}



module.exports = products