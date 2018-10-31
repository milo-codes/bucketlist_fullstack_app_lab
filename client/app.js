const WishFormView = require("./views/wish_form_view.js");
const WishListView = require("./views/wish_list_view.js");


document.addEventListener("DOMContentLoaded", () => {
  const wishForm = document.querySelector("form.wish-form");
  const wishFormView = new wishFormView(wishForm);
  wishFormView.bindEvents();

  const wishContainer = document.querySelector("div.list-container");
  const wishListView = new WishListView(wishContainer);
  wishListView.bindEvents();


})
