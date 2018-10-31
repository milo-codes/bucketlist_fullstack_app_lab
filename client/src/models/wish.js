const PubSub = require("../helpers/pub_sub.js");

const Wish = function (url) {
  this.url = url;
}

Wish.prototype.bindEvents = function () {
  PubSub.subscribe("WishFormView-submitted", (event) => {
    console.log("EVENT DETAIL FROM WISH MODEL", event.detail);
  })
};

module.exports = Wish;
