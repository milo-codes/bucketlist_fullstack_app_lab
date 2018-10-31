const WishView = function (container) {
  this.container = container;
}

WishView.prototype.render = function (wish) {
  const wishDiv = document.createElement("div");
  wishDiv.id = "wish-div";
  this.container.appendChild(wishDiv);

  // title heading tag
  const title = this.createTitle(wish.title);

  // blurb paragraph tag

  // deadline datebox

  // status checkbox
  // <input type="checkbox" name="status" value="true" id="true">
  // <label for="true">Wish accomplished</label>
  // <input type="checkbox" name="status" value="false" checked id="false">
  // <label for="false">Still wishing...</label>
};

WishView.prototype.createTitle = function (titleContent) {
  const title = document.createElement("h2");
  title.textContent = titleContent;
  return title;
};

module.exports = WishView;
