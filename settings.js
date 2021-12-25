//
// In this file you can load modules stored in "./modules" path.
// Clock module can be threaten as example.
//



//
//      WALLPAPER SETTINGS
//
//          wallpaperType = [1 / 2]
//              1 - Image (.png)
//              2 - GIF (.gif)
//              3 - Video (.mp4)
//
const wallpaperType = 1

document.addEventListener("DOMContentLoaded", (event) => {
    var wallpaper_img = document.querySelector("img#wallpaper");
    var wallpaper_vid = document.querySelector("video#wallpaper");
    switch (parseFloat(wallpaperType)) {
        case 1: // IMAGE.png
            wallpaper_img.src = "./wallpapers/bg.png";
            wallpaper_vid.remove();
            break;
        case 2: // GIF.gif
            wallpaper_img.src = "./wallpapers/bg.gif";
            wallpaper_vid.remove();
            break;
        case 3: // VIDEO.mp4
            wallpaper_vid.childNodes[0].src = "./wallpapers/bg.mp4";
            wallpaper_img.remove();
            break;
        default:
            
    };
})















// 
//      WALLPAPER PRELOAD
//

// Here you can load modules when wallpaper is fully loaded.
// You can load only one module per line
document.addEventListener("DOMContentLoaded", (event) => {
    loadModule("clock_calendar");
})







// Function for loading module.
// USAGE:   loadModule(path)
//          (path) should be the exact same name
//          of folder where the .html file is in.
function loadModule(path) {
    var module = document.createElement("iframe");
    module.style = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    `;
    module.src = "./modules/" + path + "/index.html";
    document.querySelector("ui").appendChild(module);
}