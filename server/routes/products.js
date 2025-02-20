const express = require("express");
const User = require("../models/User");
const Product = require("../models/Product");
const fs = require('fs');
const cloudinary = require("../helpers/cloudinary");
const upload = require("../helpers/multer");
const verify_admin = require("../middlewares/verify-admin");
const verify_user = require("../middlewares/verify-user");
const check_product_duplication = require("../middlewares/check-product-duplication");

const products = express.Router();

products.post("/create", verify_admin, upload.array("product_images"), check_product_duplication, async (req, res) => {
    let { product_name, category, description, number_in_stock, product_type, visible_in_store, featured, variants } = req.body;
    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if (user?.role  !== "admin") {
        return res.status(403).json({
            payload: {
                messages: {
                    message_en: "You don't have permission to create product",
                    message_uz: "Sizda mahsulot qo'shish huquqi yo'q"
                }
            }
        });
    }
    
    const uploader = async (path) => await cloudinary.uploads(path, "Images");
    const product_images = [];
    
    if (!req.files) {
        return res.status(400).json({
            payload: {
                messages: {
                    message_en: "No files were uploaded",
                    message_uz: "Fayllar yuklanmadi"
                }
            }
        });
        
    }
    
    const files = req.files;
    for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        product_images.push(newPath);
        fs.unlinkSync(path);
    }

    const product = await Product.create({
        product_name,
        product_images: product_images,
        category,
        variants: JSON.parse(variants),
        created_at: new Date().getTime(),
        featured: featured === "true" ? true : false,
        visible_in_store: visible_in_store === "true" ? true : false,
        description,
        number_in_stock: +number_in_stock,
        product_type
    });

    res.status(201).json({
        payload: {
            product,
            messages: {
                message_en: "Product has successfully created",
                message_uz: "Mahsulot muvaffaqqiyatli qo'shildi"
            }
        }
    })
})

products.put("/update/:id", verify_admin, upload.array("product_images"), async (req, res) => {
    const id = req.params.id
    let { product_name, original_price, sale_price, category, description, number_in_stock, product_type, variants, featured, visible_in_store } = req.body;

    const product = await Product.findById(id);
    product.product_images.forEach((imgurl) => {
        cloudinary.destroyer(imgurl);
    })


    const uploader = async (path) => await cloudinary.uploads(path, "Images");
    const product_images = [];
    
    if (!req.files) {
        return res.status(400).json({
            payload: {
                messages: {
                    message_en: "No files were uploaded",
                    message_uz: "Fayllar yuklanmadi"
                }
            }
        });
        
    }

    const files = req.files;
    for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        product_images.unshift(newPath);
        fs.unlinkSync(path);
    }

  
    console.log(Boolean(featured), visible_in_store)
    const updatedProduct = await Product.findByIdAndUpdate({ _id: id}, {
        product_name,
        original_price: +original_price,
        sale_price: +sale_price,
        product_images: product_images,
        category,
        description,
        number_in_stock: +number_in_stock,
        product_type,
        variants: JSON.parse(variants),
        featured: featured === "true" ? true : false,
        visible_in_store: visible_in_store === "true" ? true : false
    })

    res.status(204).json({
        payload: {
            product: updatedProduct,
            messages: {
                message_en: "Product has successfully updated",
                message_uz: "Mahsulot muvaffaqqiyatli yangilandi"
            }
        }
    })

})

products.patch("/product-increment/:id", async (req, res) => {
    const id = req.params.id
    const updatedProduct = await Product.findByIdAndUpdate({ _id: id}, {
        $inc: {
            number_in_stock: 1
        },
        
    },  { new: true });
    res.status(200).json({
        payload: {
            product: updatedProduct,
            messages: {
                message_en: "Product has successfully updated",
                message_uz: "Mahsulot muvaffaqqiyatli yangilandi"
            }
        }
    })
})

products.patch("/product-decrement/:id", async (req, res) => {
    const id = req.params.id
    const updatedProduct = await Product.findByIdAndUpdate({ _id: id}, {
        $inc: {
            number_in_stock: -1
        },
        
    },  { new: true });
    res.status(200).json({
        payload: {
            product: updatedProduct,
            messages: {
                message_en: "Product has successfully updated",
                message_uz: "Mahsulot muvaffaqqiyatli yangilandi"
            }
        }
    })
})

products.delete("/:id", async (req, res) => {
    const id = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.status(200).json({
        payload: {
            product: deletedProduct,
            messages: {
                message_en: "Product has successfully deleted",
                message_uz: "Mahsulot muvaffaqqiyatli o'chirildi"
            }
        }
    })
})

products.get("/search", async (req, res) => {
    const query = req.query.q;

    const filters = {visible_in_store: true};
    const filterableFields = ['product_name', 'product_type', 'category'];

    filterableFields.forEach(field => {
        if (req.query[field]) {
            filters[field] = (field === 'category' && req.query["multiple"] !== "true") 
            ? { $eq: req.query[field] } 
            : { $in: JSON.parse(req.query[field]) }
        }
    });

    if (!query && Object.keys(filters).length === 0) {
        return res.status(400).json({
            error: "At least one of 'q' or filter parameters is required."
        });
    }

    let searchConditions = {};

    if (query) {
        searchConditions["$and"] = [
            { $or: filterableFields.map(field => ({ [field]: { $regex: query, $options: "i" } })) },
            filters
        ];
    } else {
        searchConditions = filters;
    }

    const searchResults = await Product.find(searchConditions);

    res.status(200).json({
        payload: {
            products: searchResults,
            total: searchResults.length
        }
    });
});



products.get("/category", async (req, res) => {
    const categories = await Product.distinct("category")
    res.json({
        payload: {
            categories,
            total: categories.length
        }
    })
})

products.get("/product-type", async (req, res) => {
    const productTypes = await Product.distinct("product_type")
    res.json({
        payload: {
            productTypes,
            total: productTypes.length
        }
    })
})

products.get("/all", async (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page || 1;
    const total = await Product.countDocuments({});
    const products = await Product.find().limit(limit).skip(limit * (page - 1))
    res.json({
        payload: {
            products,
            total
        }
    })
});

products.get("/reel", async (req, res) => {
    const products = await Product.find({featured: true, product_type: "shoes"}).limit(8)
    res.json({
        payload: products
    });
})

products.get("/most-popular", async (req, res) => {
    const products = await Product.find({featured: true, visible_in_store: true}).sort({ likes: -1 }).limit(10);
    res.json({
        payload: products
    })
})

products.get("/by", async (req, res) => {
    try {
        const { type, category } = req.query;
        const products = await Product.find({category: category});
        res.json({
            payload: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

products.patch("/:product_id/like", verify_user, async (req, res) => {
    const product_id = req.params.product_id;
    const email = req.user.email;
    const user_id = req.user._id;

    const product = await Product.findById(product_id);
    if (!product.likedby.includes(email)) {
        await Product.findByIdAndUpdate(product_id, {
            $push: { likedby: email },
            $inc: {
                likes: 1
            }
        })
        await User.findByIdAndUpdate(user_id, {
            $push: { liked: product_id }
        })

        res.status(202).json({
            payload: {
                messages: {
                    message_en: "Liked",
                    message_uz: "Yoqtirildi qo'shildi"
                },
                product_id: product._id,
                likedby: email
            }
        })
    } 
    else{
        res.status(202).json({
            payload: {
                messages: {
                    message_en: "Already liked",
                    message_uz: "Bu mahsulot allaqachon yoqtirilgan"
                },
                product_id: product._id,
                likedby: email
            }
        })
    }
})

products.get("/:product_id", async (req, res) => {
    const productId = req.params.product_id;
    const product = await Product.findById(productId);

    res.status(200).json({
        payload: [product]
    })
} )

products.patch("/:product_id/unlike", verify_user, async (req, res) => {
    const product_id = req.params.product_id;
    const email = req.user.email;
    const user_id = req.user._id;
    const product = await Product.findById(product_id);

    if (product.likedby.includes(email)) {
        await Product.findByIdAndUpdate(product_id,
            {
                $pull: {
                    likedby: email
                },
                $inc: {
                    likes: -1
                }
            })
            await User.findByIdAndUpdate(user_id, {
                $pull: { liked: product_id }
            })
            res.status(202).json({
                payload: {
                    messages: {
                        message_en: "Unliked",
                        message_uz: "Yoqtirilmadi"
                    },
                    product_id: product._id,
                    likedby: email
                }
            })
    }
    else{
        res.status(202).json({
            payload: {
                messages: {
                    message_en: "Already unliked",
                    message_uz: "Bu mahsulot allaqachon yoqtirilmagan"
                },
                product_id: product._id,
                likedby: email
            }
        })
    }
})

module.exports = products