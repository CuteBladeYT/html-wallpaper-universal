function home_imagePreview(num) {
    var preview = document.querySelector("div.screenshots img.preview");
    preview.src = "./imgs/ss/" + num + ".png";
}