menu = document.querySelector('div#menu');
visibleMenu = document.querySelector('div.menu');


menu.onclick = (e) => {
    rect =  menu.getBoundingClientRect();
    coordX = rect.left;
    coordY = rect.top+50;

    visibleMenu.style.left = coordX+'px';
    visibleMenu.style.top = coordY+'px';
    visibleMenu.style.display = 'block';
    
}
