const filters = {
	brightness: {
		value: 100,
		min: 0,
		max: 200,
		unit: "%",
	},
	contrast: {
		value: 100,
		min: 0,
		max: 200,
		unit: "%",
	},
	exposure: {
		value: 100,
		min: 0,
		max: 200,
		unit: "%",
	},
	saturation: {
		value: 100,
		min: 0,
		max: 200,
		unit: "%",
	},
	hue: {
		value: 0,
		min: 0,
		max: 360,
		unit: "%",
	},
	blur: {
		value: 0,
		min: 0,
		max: 100,
		unit: "%",
	},
	grayscale: {
		value: 0,
		min: 0,
		max: 100,
		unit: "%",
	},
	sepia: {
		value: 0,
		min: 0,
		max: 100,
		unit: "%",
	},
	opacity: {
		value: 100,
		min: 0,
		max: 100,
		unit: "%",
	},
	invert: {
		value: 0,
		min: 0,
		max: 100,
		unit: "%",
	},
};

function createFilterElm(name, unit = "%", value, min, max) {
	const filterContainer = document.createElement("div");
	const filterInput = document.createElement("input");
	filterInput.type = "range";
	filterInput.min = min;
	filterInput.max = max;
	filterInput.value = value;
	filterInput.id = name;
	filterInput.name = name;
	const filterName = document.createElement("p");
	filterName.innerText = name;
	filterContainer.appendChild(filterName);
	filterContainer.appendChild(filterInput);
	return filterContainer;
}

Object.keys(filters).forEach((key) => {
	const filterElm = createFilterElm(
		key,
		filters[key].unit,
		filters[key].value,
		filters[key].min,
		filters[key].max,
	);
	document.querySelector(".filter").appendChild(filterElm);
});

const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const canvasContext = imageCanvas.getContext("2d");

imageInput.addEventListener("change", (event) => {
  document.querySelector(".placeholder").style.display = "none";
  const file = event.target.files[0];
  const image = new Image()
  image.src = URL.createObjectURL(file)
  image.onload = () => {
    imageCanvas.height = image.height
    imageCanvas.width = image.width
    canvasContext.drawImage(image, 0, 0)
  }
})