class navElement {
    constructor(name, link) {
        this.name = name; this.link = link;
    }
}

var page_links = [
    new navElement("Home", "index.html"),
    new navElement("About", "about.html"),
    new navElement("People", "people.html"),
    new navElement("Equipment", "equipment.html"),
    new navElement("Experiences", "experiences.html"),
    new navElement("Resources", "resources.html"),
    new navElement("Reservations", "reservations.html"),
]

// get the nav table element div
var nav_table = document.getElementById("nav_table");
var side_nav = document.getElementById("collapsible-menu");

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

nav_table.appendChild(nav_table_link_list);
