/** @format */

const ex = require("express");
const app = ex();
const f = require("./click_shop");
const cors = require("cors");

app.use(ex.json());
const shop = f.shop;
app.use(cors());

app.get("/api/shop", (req, res) => {
  res.send(shop);
});

// app.get("/api/shop/:id", (req, res) => {
//   let fshop = false;
//   for (let i = 0; i < shop.length; i++) {
//     if (shop[i].id == Number(req.params.id)) {
//       fshop = shop[i];
//       break;
//     }
//   }

//   if (fshop) {
//     res.send(fshop);
//   } else {
//     res.status(404);
//     res.send("Item not found!");
//   }
// });

// app.get("/api/shop/:id", (req, res) => {
//   let fshop = false;
//   for (let i = 0; i < shop.length; i++) {
//     if (shop[i].id == Number(req.params.id)) {
//       pet = shop[i];
//       break;
//     }
//   }

//   if (fshop) {
//     res.send(fshop);
//   } else {
//     res.status(404);
//     res.send("Item not found!");
//   }
// });

// app.get("/api/shops/list/category", (req, res) => {
//   let category = [];
//   for (let i = 0; i < shop.length; i++) {
//     if (category.includes(shop[i].category) == false) {
//       category.push(shop[i].category);
//     }
//   }

//   if (category.length > 0) {
//     res.send(category);
//   } else {
//     res.status(404);
//     res.send("No listed category!");
//   }
// });

// app.delete("/api/shop/:id", (req, res) => {
//   let fshop = false;
//   for (let i = 0; i < shop.length; i++) {
//     if (shop[i]["id"] == Number(req.params.id)) {
//       fshop = shop[i];
//       break;
//     }
//   }
//   if (fshop) {
//     const index = shop.indexOf(fshop);
//     console.log(fshop);
//     shop.splice(index, 1);
//     res.send(fshop);
//   } else {
//     res.status(404);
//     res.send("Item not found");
//   }
// });
app.listen(3001);
