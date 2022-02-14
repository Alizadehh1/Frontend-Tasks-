function Area(side1, side2, side3) {
    let halfOfPerimeter = (side1 + side2 + side3)/2;
    let area = Math.sqrt(halfOfPerimeter*((halfOfPerimeter-side1)*(halfOfPerimeter-side2)*(halfOfPerimeter-side3)));
    return area;
}
document.getElementById("area").innerText = Area(5,6,7);
