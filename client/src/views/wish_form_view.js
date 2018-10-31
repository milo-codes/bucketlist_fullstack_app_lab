const PubSub = require("../helpers/pub_sub.js");

const WishFormView = function (form) {
  this.form = form;
};

WishFormView.prototype.bindEvents = function() {
  this.form.addEventListener("submit", (event) => {
    this.handleSubmit(event);
  });
};

WishFormView.prototype.handleSubmit = function(event) {
  event.preventDefault();
  const newWish = this.createWish(event.target);
  PubSub.publish("WishFormView-submitted", newWish);
  event.target.reset();
};

WishFormView.prototype.createWish = function(form) {
  const newWish = {
    title: form.title.value,
    blurb: form.blurb.value,
    deadline: form.deadline.value,
  };

  return newWish;
};

module.exports = WishFormView;
