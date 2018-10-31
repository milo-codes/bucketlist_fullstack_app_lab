const WishFormView = require("./views/wish_form_view.js");
const WishListView = require("./views/wish_list_view.js");
const Wish = require("./models/wish.js");

document.addEventListener("DOMContentLoaded", () => {
  const wishForm = document.querySelector("form.wish-form");
  const wishFormView = new WishFormView(wishForm);
  wishFormView.bindEvents();

  const wishContainer = document.querySelector("div.bucket-list");
  const wishListView = new WishListView(wishContainer);
  wishListView.bindEvents();

  const url = "http://localhost:3000/api/wishes"
  const wish = new Wish(url);
  wish.bindEvents();
  // wish.getData();
});
