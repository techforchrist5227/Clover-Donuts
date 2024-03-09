const navtoggler = document.getElementsByClassName("navbar-toggler")[0];

function toClear(){
    navtoggler.style.color="#e05875";
} 

const navToGreen = document.getElementsByClassName("nav-link")[navLinks]; 

function navLinks(i){
    for(let i = 0; i < "nav-link".length; i++)
    document.getElementsByClassName("nav-link")[i];

}
// start the google map function for the shop
function initMap() {
    //var for shop coordinates
    const cd_coords = {lat:35.10823, lng:-81.22934};
    //map centered at clover donuts
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center: cd_coords,
    }); 
    //marker positioned at clover donuts
    const marker = new google.maps.Marker({
        position: cd_coords,
        map:map,
    });
}

window.initMap = initMap;


