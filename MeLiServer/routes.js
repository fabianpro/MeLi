const express = require('express');
const router = express.Router();
const fs = require('fs');
const requestService = require('./request-service');

//GET ITEMS
const getItems = async (req, res, next) => {
  try {
    if (!req.query.q) return res.status(400);
    requestService.doRequest(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=${req.query.limit}`, (err, data) => {
      if (!data.results.length) return res.status(404);
      const dataReturn = {
        author: {
          name: "Fabian",
          lastname: "Huerfano"
        },       
        categories: [],
        items: []
      };
      for (let item of data.results) {
        const obj = {
          "id": item.id,
          "title": item.title,
          "price": {
              "currency": item.original_price,
              "amount": item.installments.amount,
              "decimals": 2
          },
          "picture": item.thumbnail,
          "condition": item.condition,
          "free_shipping": item.shipping.free_shipping,
          "sold_quantity": item.sold_quantity,
          "description": ""
        };
        dataReturn.items.push(obj);
      }
      return res.status(200).json(dataReturn);
    });      
  } catch (e) {
    next(e);
  }
};


//GET ITEM
const getItem = async (req, res, next) => {
  try {  
    if (!req.params.id) return res.status(400);
    requestService.doRequest(`https://api.mercadolibre.com/items/${req.params.id}`, (err, data) => {
      if (err) return res.status(404);

      requestService.doRequest(`https://api.mercadolibre.com/categories/${data.category_id}`, (errCategories, dataCategories) => {
        if (errCategories) return res.status(404);   

        const dataReturn = {
          author: {
            name: "Fabian",
            lastname: "Huerfano"
          },       
          categories: dataCategories.path_from_root.length ? dataCategories.path_from_root : [],
          items: []
        };
        
        const obj = {
          "id": data.id,
          "title": data.title,
          "price": {
              "currency": data.original_price,
              "amount": data.available_quantity,
              "decimals": 2
          },
          "picture": data.thumbnail,
          "condition": data.condition,
          "free_shipping": data.shipping.free_shipping,
          "sold_quantity": data.sold_quantity,
          "description": `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
        };
        dataReturn.items.push(obj);
        return res.status(200).json(dataReturn);
      });
    });       
  } catch (e) {
    next(e);
  }
};

router
  .route('/api/items')
  .get(getItems);

router
  .route('/api/items/:id/detail')
  .get(getItem);

module.exports = router;