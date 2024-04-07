console.log($);

$("body").css({ background: "lightblue", textAlign: "center" });

// console.log($("body").append($("p")));

$("h1")
  //   .map((index, e) => {
  //     // console.log(index, e);
  //     return ":)";
  //   })
  .each((index, el) => {
    $(el)
      .text(`Text with Jquery ${index}`)
      .append(`<span>I am a p from append</span>`);
  });

$.each([1, 2, 3, 4, 5, 6], (index, el) => {
  console.log(index, el);
});

$.each({ name: "Igor", age: 24 }, (key, value) => {
  console.log(key, value);
});

// blocks

const allowedTags = ["p", "div", "article", "span", "li"];

let currentElement = null;

const [firstColumn, secondColumn] = $(".column");

const forwardButton = $("#move-forward");
const backButton = $("#move-back");

const tagSelect = $("#tag-field");
const contentInput = $("#content-field");
const addElementButton = $("#add-element-button");
const removeElementButton = $("#remove-element-button");

function initTagsOptions() {
  $.each(allowedTags, (index, el) => {
    tagSelect.append(`<option value="${el}">${el}</option>`);
  });
}

initTagsOptions();

const colorInput = $("#color-field");

addElementButton.on("click", () => {
  const tag = $(tagSelect).val();
  const content = $(contentInput).val();
  const color = $(colorInput).val(); 
  const newElement = $(`<${tag}>${content}</${tag}>`).css("color", color);

  $(firstColumn).append(newElement);

  tagSelect.val("");
  contentInput.val("");
  colorInput.val("#000000");


  newElement.on("click", () => {
    $(".column > *").each((index, el) => $(el).css("border", "none")); 
    currentElement = newElement; 
    newElement.css("border", "1px solid lightblue"); 
  });
});


removeElementButton.on("click", () => {
  if (currentElement) {
    $(currentElement).remove();
    currentElement = null;
  }
});

forwardButton.on("click", () => {
  $(secondColumn).append(currentElement);
});

backButton.on("click", () => {
  $(firstColumn).append(currentElement);
});

[1, 2, 3].concat([4, 5, 6]);

const merged = $.merge([1, 2, 3], [4, 5, 6]);
console.log(merged, "merged");

