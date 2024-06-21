const express = require("express");
const app = express();
const mongoose = require("mongoose");

// driver 

const dbURL = `mongodb+srv://ayushrajsd:28Wca5DmXC6Q9BDW@cluster0.vg5saeo.mongodb.net/`;
// once 

mongoose.connect(dbURL)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))

// schema
const productSchema = new mongoose.Schema({
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: String,
      required: true,
    },
    isInStock: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    confirmPassword: {
      type: String,
      required: true,
      minLength: 8,
      validate: {
        validator: function () {
          return this.password === this.confirmPassword;
        },
        message: "Password and confirm password should be same",
      }
    },

  }, { timestamps: true });
  
  const ProductModel = mongoose.model("products", productSchema);

  app.use(express.json()); // middleware for post request

  app.post("/api/products", async (req, res) => {
    const body = req.body
    try{

      const product = await ProductModel.create({
        product_name : body.product_name,
        product_price : body.product_price,
        isInStock : body.isInStock,
        category : body.category,
        password : body.password,
         confirmPassword : body.confirmPassword
      })
  
      console.log(product)
  
      return res.status(201).json({message : 'Product Created'})
    }catch(err){
      console.log(err)
      return res.status(400).json({message : 'Something went wrong',err})
    }
 

 });

 app.get("/api/products", async (req, res) => {
  const allProducts = await ProductModel.find()
  // const allProducts = await ProductModel.find({isInStock :true})
  console.log(allProducts)

  return res.status(200).json(allProducts);
});

app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json(product);
})

app.put("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id , req.body)
  return res.status(201).json({message : 'Resources Updated'})
});


app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id)
  return res.status(201).json({message : 'Resource Deleted'})
});

  app.listen(3000, () => {
    console.log(`The server is running in port 3000`);
  });