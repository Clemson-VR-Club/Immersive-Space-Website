class navElement {
    constructor(name, link) {
        this.name = name; this.link = link;
    }
}

var page_links = [
    new navElement("Home", "../home"),
    new navElement("About", "../about"),
    new navElement("People", "../people"),
    new navElement("Equipment", "../equipment"),
    new navElement("Experiences", "../experiences"),
    new navElement("Resources", "../resources"),
    new navElement("Reservations", "../reservations"),
    new navElement("Library", "../library")
]

// get the nav elements
var nav_header = document.getElementById("nav_table");
var nav_footer = document.getElementById("nav_footer");
var nav_side = document.getElementById("collapsible-menu");

// Creation of nav_header
// create a unordered list to store the navbar elements
var nav_table_link_list = document.createElement("ul");
// set class name for ul element
nav_table_link_list.className = "hide-on-med-and-down";

for (var i = 0; i < page_links.length; i++) {
    var currentNavElement = document.createElement("li");
    var currentNavElementLink = document.createElement("a");
    currentNavElementLink.href = page_links[i].link;
    currentNavElementLink.innerHTML = page_links[i].name;

    currentNavElement.appendChild(currentNavElementLink);
    nav_table_link_list.appendChild(currentNavElement);
    // side_nav.appendChild(currentNavElement);
}

nav_header.appendChild(nav_table_link_list);


// Creation of nav_side
// create a unordered list to store the navbar elements
var nav_table_link_list = document.createElement("ul");
nav_table_link_list.className = "hide-on-med-and-down";
for (var i = 0; i < page_links.length; i++) {
    var currentNavElement = document.createElement("li");
    var currentNavElementLink = document.createElement("a");
    currentNavElementLink.href = page_links[i].link;
    currentNavElementLink.innerHTML = page_links[i].name;

    currentNavElement.appendChild(currentNavElementLink);
    nav_side.appendChild(currentNavElement);
}

for (var i = 0; i < page_links.length; i++) {
    var currentNavElement = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
        if (i == page_links.length) break;
        var currentTableElement = document.createElement("td")
        var currentNavElementLink = document.createElement("a");
        currentNavElementLink.href = page_links[i].link;
        currentNavElementLink.innerHTML = page_links[i].name;
        currentTableElement.appendChild(currentNavElementLink);
        currentNavElement.appendChild(currentTableElement);
        i++;
    }
    i--;

    nav_footer.appendChild(currentNavElement);
}
