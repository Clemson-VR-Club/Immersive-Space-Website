/*
Design TODO:
- Add genre to cards

Features TODO: 
- Add config option to only display date when sorting by date
- Add config option to only display genre when sorting by genre
- move card display options to controller instead of card
- Add ovverides to element displays in entries

*/

class jsonReader {
    static getData(jsonPath) {
        if (jsonPath == "config") return [];
        if (jsonPath == "libData") return rawLibraryData;
    }
}

/*
 * Description: Represent a sort type, functionality may be expended later
 */
class SortType {
    // Sort Types
    static ALPHABETICAL = new SortType(0, "Alphabetical");
    static REVERSE_ALPHABETICAL = new SortType(1, "Reverse Alphabetical");
    static NEWEST_FIRST = new SortType(2, "Newest First");
    static OLDEST_FIRST = new SortType(3, "Oldest First");
    static GENRE = new SortType(4, "Genre", SortType.ALPHABETICAL);

    static SortTypes = [
        SortType.ALPHABETICAL,
        SortType.REVERSE_ALPHABETICAL,
        SortType.NEWEST_FIRST,
        SortType.OLDEST_FIRST,
        SortType.GENRE
    ];

    static DEFAULT = SortType.ALPHABETICAL;
    static DEFAULT_PRELIM_SORT = SortType.ALPHABETICAL;

    constructor(sortTypeIndex, sortTypeName, preliminarySortType = null) {
        this.sortTypeIndex = sortTypeIndex;
        this.sortTypeName = sortTypeName;
        this.preliminarySortType = preliminarySortType;
        this.isPreliminarySortRequired = (this.preliminarySortType != null)
    }

    // return true if the sort type is based on a date, false otherwise
    isDateBased() {
        return (this.sortTypeIndex == 2 || this.sortTypeIndex == 3)
    }

    // returns true if the sort type requires another sort to be done before proceeding, false otherwise
    requiresPreliminarySort() {
        return this.isPreliminarySortRequired;
    }

    // gets the sort type required for the preliminary sort
    getPreliminarySortType() {
        return this.preliminarySortType;
    }

    static getSortType(index) {
        return SortType.SortTypes[index];
    }
}

/* 
 * Description: Handles the configuration of the library
 */
class LibraryConfig {
    // Sort Options
    static OPTIONS = {
        NO_OP: 0,   // Default Option: no special effects
        YEAR: 1,    // Default Date Option: create date categories with only year
        MONTH: 2    // Date Option: create date categories with month and year
    }

    static DEFAULT_OPTION = LibraryConfig.OPTIONS.NO_OP;
    static DEFAULT_DATE_OPTION = LibraryConfig.OPTIONS.YEAR;

    constructor(configData) {
        // add config code

        // default config for fallback
        this.libraryDivID = "library_content";
        this.sortType = SortType.DEFAULT;
        this.categoryOption = LibraryConfig.DEFAULT_DATE_OPTION;
        this.groupEntriesByCategory = true;
    }

    getLibraryDivID() {
        return this.libraryDivID;
    }

    getSortType() {
        return this.sortType;
    }

    requiresCategoryOption() {
        return this.sortType.isDateBased();
    }

    getCategoryOption() {
        return this.categoryOption;
    }

    getDefaultCategoryOption() {
        if (this.sortType.isDateBased()) return LibraryConfig.DEFAULT_DATE_OPTION;
        else return LibraryConfig.DEFAULT_OPTION;
    }

    doGroupEntriesByCategory() {
        return this.groupEntriesByCategory;
    }
}

/*
 * Description: This class represents a single entry of the game library. 
 */
class LibraryEntry {
    constructor(gameData) {
        /* variable initialization */
        /* game information */
        this.gameID = gameData["name"].replaceAll(" ", "_").toLowerCase();
        this.gameName = gameData["name"];
        this.gameImagePath = gameData["img"];
        this.gameDesc = gameData["description"];
        this.gameGenre = gameData["genre"];

        // release date info
        this.rawDateText = gameData["releaseDate"];
        this.gameReleaseDate = null;
        // handle release date
        if (this.rawDateText != undefined) {
            // split date components into substrings
            let releaseDateElements = this.rawDateText.split("/");

            // format and parse release year
            let rawReleaseDateYear = releaseDateElements[2].length == 2 ? "20" + releaseDateElements[2] : releaseDateElements[2];
            let releaseDateYear = parseInt(rawReleaseDateYear, 10);
            // parse release month
            let releaseDateMonth = parseInt(releaseDateElements[0], 10) - 1;
            // parse release day
            let releaseDateDay = parseInt(releaseDateElements[1], 10);

            // construct Date object
            this.gameReleaseDate = new Date(releaseDateYear, releaseDateMonth, releaseDateDay);

        }

        // unused (for now)
        this.gameRating = gameData["rating"];
        this.gamePopularity = gameData["popularity"];
        this.gameInternPick = gameData["internPick"];
    }
}

/*
 * Description: This class represents and tracks an html element that depicts a LibraryEntry
 */
class LibraryEntryElement {
    static className = "LibraryEntry";

    /* Control Variables: changes the behaviour of all LibraryEntries */

    // flag that determines if the button is collapsed by default 
    static collapsedByDefault = true;                  // (default = true)

    // flag that determines if the name of the game in the button will be bolded when expanding the button
    static boldGameNameTextWhenButtonIsExpanded = true; // (default = true)

    // flag that determines if the release date will be displayed in italics
    static displayReleaseDateInItalics = true;          // (default = true)

    // the padding of the button itself, controlls the blank space arround the buttonContents
    static buttonElementPadding = "13px";               // (default = "13px")

    // the padding of the elements within the expanded button
    static buttonContentPadding = "5px";                // (default = "5px")

    constructor(gameEntry) {
        // object that holds the game info
        this.gameEntry = gameEntry;

        // controls the behaviour of getEntry(), will trigger the element to be reconfigured and reconstructed if any data is changed
        this.stateChanged = false;

        /* Display Variables */
        // these variables will determine if an element is hidden or not, used in case some data is undefined
        this.displayGameImage = (this.gameEntry.gameImagePath != undefined);
        this.displayGameDesc = (this.gameEntry.gameDesc != undefined);
        this.displayGameReleaseDate = (this.gameEntry.gameReleaseDate != undefined);


        this.init();
    }

    /* Init function */
    init() {
        // element constuction
        this.createElements();
        this.structureElements();
        this.configureElements();
        this.enableCollapsibleButton();
    }

    /* Element Creation Functions */
    createElements() {
        // parent div that will hold the game entry
        this.libraryEntry = document.createElement("div");

        // button element that represents our library entry
        this.gameButtonElement = document.createElement("button");
        // p element that represents our game name
        this.gameNameElement = document.createElement("p");
        // div element that stores all the expanded button content
        this.buttonContentDiv = document.createElement("div");

        // div element that holds the gameImageElement
        this.gameImageDiv = document.createElement("div");
        // img element that represents the game image
        this.gameImageElement = document.createElement("img");

        // div element that holds the gameDescElement
        this.gameTextDiv = document.createElement("div");
        // p element that holds the game description
        this.gameDescElement = document.createElement("p");
        // p element that holds the game release date
        this.gameReleaseDateElement = document.createElement("p");
    }

    structureElements() {
        /* Putting it all together */
        // append elements appropriately
        this.libraryEntry.appendChild(this.gameButtonElement);
        this.gameButtonElement.appendChild(this.gameNameElement);
        this.gameButtonElement.appendChild(this.buttonContentDiv);

        // append uncollapsed menu contents to buttonContentDiv
        this.buttonContentDiv.appendChild(this.gameImageDiv);
        this.buttonContentDiv.appendChild(this.gameTextDiv);

        this.gameImageDiv.appendChild(this.gameImageElement);

        this.gameTextDiv.appendChild(this.gameDescElement);
        this.gameTextDiv.appendChild(this.gameReleaseDateElement);
    }

    configureElements() {
        /* Element Configuration */
        // configure libraryEntry
        this.libraryEntry.id = this.gameEntry.gameID;
        this.libraryEntry.class = LibraryEntryElement.className;

        // configure gameButtonElement
        this.gameButtonElement.type = "expand";
        this.gameButtonElement.classList += "collapsible";
        this.gameButtonElement.style.padding = LibraryEntryElement.buttonElementPadding;

        // configure gameNameElement
        this.gameNameElement.innerText = this.gameEntry.gameName;
        this.gameNameElement.style.margin = "5px";
        // adds an attribute so the button can keep track of its flags
        this.gameNameElement.setAttribute("boldGameNameTextWhenButtonIsExpanded", LibraryEntryElement.boldGameNameTextWhenButtonIsExpanded);

        // if the buttons are expanded by default, and we are bolding the game name text, apply the bold fontWeight
        if (LibraryEntry.boldGameNameTextWhenButtonIsExpanded)
            this.gameNameElement.style.fontWeight = "bold";


        // configure buttonContentDiv
        // this.buttonContentDiv.hidden = LibraryEntry.collapsedByDefault;
        this.buttonContentDiv.classList.add("row");


        // configure gameImageDiv
        this.gameImageDiv.hidden = !this.displayGameImage;
        this.gameImageDiv.classList.add("col");
        this.gameImageDiv.classList.add("l4");


        // configure gameImageElement
        this.gameImageElement.id = "lib_game_img-" + this.gameEntry.gameID;
        this.gameImageElement.src = this.gameEntry.gameImagePath;
        this.gameImageElement.alt = this.gameEntry.gameName + " Cover";
        this.gameImageElement.style.padding = LibraryEntryElement.buttonContentPadding;


        // configure gameTextDiv
        this.gameTextDiv.classList.add("col");
        this.gameTextDiv.classList.add("l8");


        // configure gameDescElement
        this.gameDescElement.hidden = !this.displayGameDesc;
        this.gameDescElement.innerText = this.gameEntry.gameDesc;
        this.gameDescElement.style.marginTop = "0px";
        this.gameDescElement.style.padding = LibraryEntryElement.buttonContentPadding;


        // configure gameReleaseDateElement
        this.gameReleaseDateElement.hidden = !this.displayGameReleaseDate;
        // make sure the release date is not null before configuring it
        if (this.gameEntry.gameReleaseDate != null) {
            this.gameReleaseDateElement.innerText = "Release Date: " + this.gameEntry.gameReleaseDate.toDateString();
            this.gameReleaseDateElement.style.padding = LibraryEntryElement.buttonContentPadding;

            // stylistic choice to shrink extra space at bottom of the button
            this.gameReleaseDateElement.style.marginBottom = "0px";

            // apply italics if flag is set
            if (LibraryEntryElement.displayReleaseDateInItalics)
                this.gameReleaseDateElement.style.fontStyle = "italic";
        }

        if (LibraryEntry.collapsedByDefault) this.toggleButtonDisplay();
    }

    /* Collapsible Menu Functionality */
    enableCollapsibleButton() {
        this.gameButtonElement.addEventListener("click", this.toggleButtonDisplay);
    }

    toggleButtonDisplay() {
        // variable used to store the buttonDisplayElement
        let buttonDisplayElement = this;

        // if this method is called from the LibraryEntry Object, reassign the variable to the appropriate element
        if (buttonDisplayElement instanceof LibraryEntryElement) {
            buttonDisplayElement = this.gameButtonElement;
        }

        // toggle the hidden trait of the child nodes
        for (let x of buttonDisplayElement.childNodes) {
            if (x instanceof HTMLParagraphElement && (x.getAttribute("boldGameNameTextWhenButtonIsExpanded") == "true")) {
                x.style.fontWeight = ((x.style.fontWeight == "normal") ? "bold" : "normal");
            }
            if (x instanceof HTMLDivElement) x.hidden = !x.hidden;
        }

    }

    isButtonExpanded() {
        return !this.buttonContentDiv.hidden;
    }

    /* retrieve the finished element */
    getElement() {
        if (this.stateChanged) {
            this.configureElements();
            this.structureElements();
        }

        return this.libraryEntry;
    }
}

/*
 * Description: This is a utility class that handles all the sorting of the game library entries
 */
class LibraryEntryElementUtility {
    /*
     * Description: handles the creation of all library entries
     */
    static createEntries(libraryData) {
        let libraryEntries = [];

        for (let gameData of libraryData) {
            libraryEntries.push(new LibraryEntryElement(new LibraryEntry(gameData)));
        }

        return libraryEntries;
    }

    /*****************************
     * Element Sorting Functions *
     *****************************/

    /*
     * Description: handles sorting the elements
     */
    static sortLibraryEntries(libraryEntries, sortType = SortType.DEFAULT) {
        if (sortType.requiresPreliminarySort()) libraryEntries.sort(LibraryEntryElementUtility.getSortCompareFunction(sortType.getPreliminarySortType()));
        libraryEntries.sort(LibraryEntryElementUtility.getSortCompareFunction(sortType));
    }

    /*
     * Description: function that gives the appropriate compare function when sorting
     */
    static getSortCompareFunction(sortType) {
        switch (sortType) {
            case SortType.ALPHABETICAL:
                return LibraryEntryElementUtility.sortTypeAlphabetical;
            case SortType.REVERSE_ALPHABETICAL:
                return LibraryEntryElementUtility.sortTypeReverseAlphabetical;
            case SortType.NEWEST_FIRST:
                return LibraryEntryElementUtility.sortTypeNewestFirst;
            case SortType.OLDEST_FIRST:
                return LibraryEntryElementUtility.sortTypeOldestFirst;
            case SortType.GENRE:
                return LibraryEntryElementUtility.sortTypeGenre;
            default:
                return LibraryEntryElementUtility.getSortCompareFunction(LibrarySorter.defaultSortType);
        }
    }

    /*
     * Description: generic sort compare function that sorts any variables in an ascending order
     */
    static sortTypeGenericAscending(a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }

    /*
     * Description: generic sort compare function that sorts any variables in an descending order
     */
    static sortTypeGenericDescending(a, b) {
        if (a < b) return 1;
        else if (a > b) return -1;
        else return 0;
    }

    /*
     * Description: sort compare function that sorts game entry variables alphabetically by gameName
     */
    static sortTypeAlphabetical(a, b) {
        return LibraryEntryElementUtility.sortTypeGenericAscending(a.gameEntry.gameName, b.gameEntry.gameName)
    }

    /*
     * Description: sort compare function that sorts game entry variables reverse_alphabetically by gameName
     */
    static sortTypeReverseAlphabetical(a, b) {
        return LibraryEntryElementUtility.sortTypeGenericDescending(a.gameEntry.gameName, b.gameEntry.gameName)
    }

    /*
     * Description: sort compare function that sorts game entry variables by release data, with newer games being first
     */
    static sortTypeNewestFirst(a, b) {
        return LibraryEntryElementUtility.sortTypeGenericDescending(a.gameEntry.gameReleaseDate, b.gameEntry.gameReleaseDate);
    }

    /*
     * Description: sort compare function that sorts game entry variables by release data, with older games being first
     */
    static sortTypeOldestFirst(a, b) {
        return LibraryEntryElementUtility.sortTypeGenericAscending(a.gameEntry.gameReleaseDate, b.gameEntry.gameReleaseDate);
    }

    /*
     * Description: sort compare function that sorts game entry variables by genre
     */
    static sortTypeGenre(a, b) {
        return LibraryEntryElementUtility.sortTypeGenericAscending(a.gameEntry.gameGenre, b.gameEntry.gameGenre);
    }
}

/*
 * Description: This class represents a category element for the library
 */
class LibraryCategoryElement {
    constructor(categoryName) {
        this.categoryName = categoryName;
        this.init();
    }

    /* Init function */
    init() {
        // element constuction
        this.createElements();
        this.structureElements();
        this.configureElements();
        // this.enableCollapsibleButton();
    }

    createElements() {
        this.categoryDiv = document.createElement("div");
        this.entryContainerDiv = document.createElement("div");
        this.entryNameTag = document.createElement("p");
    }

    structureElements() {
        this.categoryDiv.appendChild(this.entryNameTag);
        this.categoryDiv.appendChild(this.entryContainerDiv);
    }

    configureElements() {
        this.entryNameTag.innerText = this.categoryName;
    }

    addLibraryEntry(entry) {
        this.entryContainerDiv.appendChild(entry.getElement())
    }

    getElement() {
        return this.categoryDiv;
    }
}

/*
 * Description: This is a utility class that handles the creation of all categories
 */
class LibraryCategoryElementUtility {
    /*
     * Description: Determines the category name based off of the entry and sortType,
     *              with the option of displaying just the year, or the year and month
     *              for data based sortTypes.
     */
    static getCategoryNameFromEntry(entry, config) {
        switch (config.getSortType()) {
            // alphabetical case
            case SortType.ALPHABETICAL:
            case SortType.REVERSE_ALPHABETICAL:
                return entry.gameEntry.gameName[0];
            // date case
            case SortType.NEWEST_FIRST:
            case SortType.OLDEST_FIRST:
                // get the current sort option
                let option = config.getCategoryOption();
                // get the date being considered
                let entryDate = entry.gameEntry.gameReleaseDate;

                // determine the category name based on the option
                switch (option) {
                    case LibraryConfig.OPTIONS.YEAR:
                        return entryDate.toLocaleString('default', { year: "numeric" });
                    case LibraryConfig.OPTIONS.MONTH:
                        return entryDate.toLocaleString('default', { month: 'long', year: "numeric" });
                    default:
                        return "Unknown Date"
                }

            // genre case
            case SortType.GENRE:
                return entry.gameEntry.gameGenre;
        }
    }

    /*
     * Description: Loops through all entries and creates categories based on the sortType
     */
    static createCategories(entries, config) {
        // Array that holds all the categories created for order purposes
        let categoryArr = [];
        // Map that holds all the categories created for speed efficiency purposes
        let categoryMap = {};

        // array containing both category containers to return
        let categoryContainer = [categoryArr, categoryMap];

        // category creation loop
        for (let entry of entries) {
            // get the category name
            let categoryName = LibraryCategoryElementUtility.getCategoryNameFromEntry(entry, config)

            // if the category has not yet been created, create it
            if (categoryMap[categoryName] == undefined) {
                let newCategory = new LibraryCategoryElement(categoryName);
                // add new category to both containers
                categoryArr.push(newCategory);
                categoryMap[categoryName] = newCategory;
            }
        }

        return categoryContainer;
    }
}

/*
 * Description: Controller class the manipulates the content of the library
 */
class LibraryContentController {
    constructor(libraryData, config) {
        this.content = [];
        this.entries = LibraryEntryElementUtility.createEntries(libraryData);
        this.config = config;

        this.updateContent()
    }

    /*
     * Description: calls the function necessary for creating the categories, and splits the return into variables
     */
    createCategories() {
        let categoryContainer = LibraryCategoryElementUtility.createCategories(this.entries, this.config);
        this.categoryArr = categoryContainer[0];
        this.categoryMap = categoryContainer[1];
    }

    /*
     * Description: adds the LibraryEntryElements as children to their respective LibraryCategoryElement
     *              Note: only should be called if this.config.doGroupEntriesByCategory returns true
     */
    populateCategories() {
        // loops through all entries
        for (let entry of this.entries) {
            // find the category name for quick lookup in the categoryMap
            let categoryName = LibraryCategoryElementUtility.getCategoryNameFromEntry(entry, this.config);
            // add entry to category
            this.categoryMap[categoryName].addLibraryEntry(entry);
        }
    }

    /*
     * Description: resets the content array and repopulates it with the current config options applied
     */
    updateContent() {
        // empty the content array
        this.content.splice(0, this.content.length)

        // sort the entries // Note: this affects the order of the categories when creating categories
        LibraryEntryElementUtility.sortLibraryEntries(this.entries, this.config.getSortType());

        // check the config to see if the entries should be grouped into categories
        if (this.config.doGroupEntriesByCategory()) {
            // create categories
            this.createCategories();
            // add the entries to the categories
            this.populateCategories();

            // add categories to content
            for (let category of this.categoryArr) {
                this.content.push(category.getElement());
            }
        } else {
            for (let entry of this.entries) {
                this.content.push(entry.getElement());
            }
        }
    }
}

/*
 * Description: Controller class that handles displaying the library
 */
class LibraryDisplayController {
    constructor(libraryDivContent, controlPanelController, config) {
        this.libraryDivContent = libraryDivContent;
        this.controlPanel = controlPanelController;
        this.config = config;

        this.init()
    }

    createElements() {
        this.libraryDivElement = document.getElementById(this.config.getLibraryDivID());
        this.libraryContentDivElement = document.createElement("div");
    }

    configureElements() {
        this.libraryContentDivElement.id = "element_container"
    }

    structureElements() {
        this.libraryDivElement.appendChild(this.controlPanel.getControlPanelElement());
        this.libraryDivElement.appendChild(this.libraryContentDivElement);
    }

    init() {
        this.createElements();
        this.configureElements();
        this.structureElements();
    }

    displayElements() {
        // clear the current display
        this.libraryContentDivElement.innerHTML = "";
        // repopulate the div
        for (let element of this.libraryDivContent) {
            this.libraryContentDivElement.appendChild(element);
        }
    }

    expandAllEntries() {

    }

    collapseAllEntries() {

    }

    toggleAllEntries() {

    }
}

class LibraryControlPanelController {
    constructor(libraryController, config) {
        this.libraryController = libraryController;
        this.config = config;
        this.init();
    }

    createElements() {
        // various div creation
        this.controlPanelDiv = document.createElement("div");
        this.selectContainerDiv = document.createElement("div");

        // sort type select element
        this.sortTypeSelectElement = document.createElement("select");

        // sort type p tag
        this.sortTypeTextElement = document.createElement("p");

        this.createSortTypeOptionElements();
    }

    configureElements() {
        this.controlPanelDiv.classList.add("row");
        this.selectContainerDiv.classList.add("col");

        this.sortTypeTextElement.innerText = "Sort Type: "
        this.sortTypeSelectElement.id = "sort_type_select"
        this.sortTypeSelectElement.style.display = "block";
        // this.sortTypeSelectElement.style.background = "#86898C";
        this.sortTypeSelectElement.onchange = this.updateSortType;

    }

    structureElements() {
        this.controlPanelDiv.appendChild(this.selectContainerDiv);

        this.selectContainerDiv.appendChild(this.sortTypeTextElement);
        this.selectContainerDiv.appendChild(this.sortTypeSelectElement);

        for (let element of this.sortTypeOptionElements) {
            this.sortTypeSelectElement.appendChild(element)
        }
    }

    createSortTypeOptionElements() {
        this.sortTypeOptionElements = [];

        for (let sortType of SortType.SortTypes) {
            let opt = document.createElement("option");
            opt.innerText = sortType.sortTypeName;
            opt.value = sortType.sortTypeIndex;
            this.sortTypeOptionElements.push(opt);
        }
    }

    init() {
        this.createElements();
        this.configureElements();
        this.structureElements();
    }

    getControlPanelElement() {
        return this.controlPanelDiv;
    }

    updateSortType() {
        let selectElem = document.getElementById("sort_type_select");
        libraryController.config.sortType = SortType.getSortType(selectElem.value);
        libraryController.notifySortTypeChanged();
    }
}

/*
 * Description: This class controlls the overall library and communicates with other library classes
 */
class LibraryController {
    constructor() {
        let configData = jsonReader.getData("config");
        let libraryData = jsonReader.getData("libData");

        this.config = new LibraryConfig(configData);
        this.contentController = new LibraryContentController(libraryData, this.config);
        this.controlPanelController = new LibraryControlPanelController(this.config);
        this.displayController = new LibraryDisplayController(this.contentController.content, this.controlPanelController, this.config);
    }

    notifySortTypeChanged() {
        this.applyChanges();
    }

    /**
     * @description This function changes the sort type of the library. used from console during debugging
     * @param {*} sortType 
     * @param {*} categoryOption 
     */
    changeSortType(sortType, categoryOption = null) {
        this.config.sortType = sortType;
        if (this.config.requiresCategoryOption())
            this.config.categoryOption = (categoryOption == null ? this.config.getDefaultCategoryOption() : categoryOption);
        this.applyChanges();
    }

    applyChanges() {
        this.contentController.updateContent();
        this.displayController.displayElements();
    }

    run() {
        this.displayController.displayElements();
    }
}

libraryController = new LibraryController();
libraryController.run();