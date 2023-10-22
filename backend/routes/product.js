const express = require('express')
const router = express.Router()
const Product = require("../model/Products")


// router.post("/", async (req,res)=> {
//     // let product = allProducts.slice(20)
//      const putdata = await Product.insertMany(allProducts)
//     res.json({status: true, putdata})
// })

const techs = [
    "laptops",
    "smartphones",
    "lighting",
"motorcycle",
"sunglasses",
]

const others = ["automotive",
"fragrances",
"furniture",
"groceries",
"home-decoration",
"skincare",
"tops"]

const mens = ["men's clothing",
"mens-shirts",
"mens-shoes",
"mens-watches"]

const womens = [  "women's clothing",
"womens-bags",
"womens-dresses",
"womens-jewellery",
"womens-shoes",
"womens-watches"]





router.get("/category", async (req,res)=> {
    let allCategory = await Product.find().select("category")
    let categoryArr = []
    for(let ctg of allCategory){
      categoryArr.push(ctg.category)
    }
    
    let myCategory = new Set(categoryArr) 
    let arrCtg = Array.from(myCategory).sort()
    res.json(arrCtg)
  
  })
  
  
router.get('/getProduct/:id', async (req, res)=> {
    try{
        const {id} = req.params
    
        const oneProduct = await Product.find({_id:id})
        const myProduct = oneProduct[0]
    console.log(id, oneProduct)
        res.json({status:"ok", myProduct})
    }
    
        catch (err){
            res.json({error:"some error occuerd"})
        }
    
    })
    
  
  



router.get("/getCategory", async (req, res)=> {

    let myProductCategory = {}


    
    let mensProduct = []
    for (let men of mens){
        let myproduct = await Product.find({category:men})
            for (let myPct of myproduct){
                mensProduct.push(myPct)

            }
    }
    let womensProduct = []
    for (let women of womens){
        let myproduct = await Product.find({category:women})
        for (let myPct of myproduct){
            womensProduct.push(myPct)

        }
    }
    let techProduct = []
    for (let tech of techs){
        let myproduct = await Product.find({category:tech})
        for (let myPct of myproduct){
            techProduct.push(myPct)

        }
    }
    let otherProduct = []
    for (let other of others){
        let myproduct = await Product.find({category:other})
        for (let myPct of myproduct){
            otherProduct.push(myPct)

        }
    }
    myProductCategory = {mensProduct, womensProduct, techProduct, otherProduct}  




    res.json({ mensResult: mensProduct.length, womensResult: womensProduct.length,techResult: techProduct.length,otherResult: otherProduct.length,status:"done", myProductCategory})
    // res.json({status:"ok", mensProduct, womensProduct})
})



router.get("/", async (req, res)=> {

    const {title, description, price, brand,category, sort, select} = req.query
    const myquery = {}

    if(title){
        myquery.title = {$regex: title, $options: 'i'} 
    }
    if(description){
        myquery.description =  {$regex: description, $options: 'i'}
    }
    if(price){
        myquery.price = price 
    }
    if(brand){
        myquery.brand = brand 
    }
    if(category){
        myquery.category = category
    }
    
    let myQuery =  Product.find(myquery)
    
    if(sort){
        const sortFix = sort.replace(","," ")
        myQuery = myQuery.sort(sortFix)   
    }
    if(select){
        // const selectFix = select.replace(","," ")
        const selectFix = select.split(",").join(" ")
        myQuery = myQuery.select(selectFix)   
    }
    // let page = Number(req.query.page) || 1
    // let limit = Number(req.query.limit) || 8

    // let skip = (page-1)*limit

    // myQuery = myQuery.skip(skip).limit(limit)



    let mydata = await myQuery
    
    // res.json({ totalResult: mydata.length , pageNo: page, status:"OK", mydata})
    res.json({ totalResult: mydata.length , status:"OK", mydata})
})


module.exports = router