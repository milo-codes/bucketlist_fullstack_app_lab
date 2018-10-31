const PubSub = require("../helpers/pub_sub.js");
const WishView = require("./views/wish_view.js");

const WishListView = function(container) => {
  this.container = container;
};

WishListView.prototype.bindEvents = function(){
  PubSub.subscribe("Wish:data-loaded", (event) => {
    this.render(event.detail);
  });
};

WishListView.prototype.render = function(wishData){
  this.container.innerHTML = "";
  const wishView = new WishView(this.container);
  wishData.forEach((wish) => wishView.render(wish));
};

module.exports = WishListView;
