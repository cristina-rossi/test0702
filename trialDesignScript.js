// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
const blockData = [  
    { title: "",  text: "trial sequence:", gridColumn: 1, gridRow: 1, color: "white", class: "trialDescriptionBlock" }, 
    { title: "time interval between trials", onclick: "phase-intertrial", text: "intertrial", gridColumn: 2, gridRow: 1, color: "white", class: "trialGamePhaseBlock" },
    { title: "return hands to home position", onclick: "phase-home-position", text: "home position", gridColumn: 3, gridRow: 1, color: "white", class: "trialGamePhaseBlock" },
    { title: "make contact with the plate", onclick: "phase-plate-contact", text: "plate contact", gridColumn: 4, gridRow: 1, color: "white", class: "trialGamePhaseBlock" },
    { title: "lift the plate towards the target", onclick: "phase-plate-lift", text: "plate lift", gridColumn: 5, gridRow: 1, color: "white", class: "trialGamePhaseBlock" },
    { title: "receive feedback on trial success or failure", onclick: "phase-feedback", text: "feedback", gridColumn: 6, gridRow: 1, color: "white", class: "trialGamePhaseBlock" },
    { title: "take a resting break", onclick: "phase-break", text: "break", gridColumn: 7, gridRow: 1, color: "white", class: "trialGamePhaseBlock" },
    { title: "break message", onclick: "break-message", text: "break message", gridColumn: 7, gridRow: 2, color: "#9370DB", class: "trialGameObjectBlock" },
    { title: "feedback message", onclick: "feedback-message", text: "feedback msg", gridColumn: 6, gridRow: 3, color: "#00CED1", class: "trialGameObjectBlock" },
    { title: "bird", onclick: "bird", text: "bird", gridColumn: "2 / span 4", gridRow: 4, color: "#87CEEB", class: "trialGameObjectBlock" },
    { title: "target", onclick: "target", text: "target", gridColumn: "2 / span 6", gridRow: 5, color: "#98FB98", class: "trialGameObjectBlock" },
    { title: "plate", onclick: "plate", text: "plate", gridColumn: "4 / span 2", gridRow: 6, color: "#7B68EE", class: "trialGameObjectBlock" },
    { title: "hand homes", onclick: "hand-homes", text: "hand homes", gridColumn: "2 / span 2", gridRow: 7, color: "#9370DB", class: "trialGameObjectBlock" },
    { title: "virtual hands", onclick: "hands", text: "hands", gridColumn: "2 / span 5", gridRow: 8, color: "#BA55D3", class: "trialGameObjectBlock" }, 
    { title: "trial number display", onclick: "trial-number", text: "trial number", class: "trialGameObjectBlock", gridColumn: "2 / span 6", gridRow: 9, color: "#FFFFE0" },
    { title: "overall paradigm start", onclick: "g-phase-start", text: "game start", class: "trialParadigmStartBlock", gridColumn: 1,  gridRow: 10 },
    { title: "overall paradigm end", onclick: "g-phase-end", text: "game end", class: "trialParadigmEndBlock", gridColumn: 1, gridRow: 11  },
    { title: "overall paradigm end2", onclick: "tabHtmlMain", text: "game end", class: "trialParadigmEndBlock", gridColumn: 2, gridRow: 11  },
    { title: "overall paradigm end2", onclick: "tabHtml", text: "game end", class: "trialParadigmEndBlock", gridColumn: 3, gridRow: 11  },
];


  
    const parentcontainer = document.createElement("div");
    parentcontainer.className = "trialContainerParent"; 
    const container = document.createElement("div");
    container.className = "trialContainer"; 
    
    // Set the grid template columns property
    let maxRow = 0;
    let maxColumn = 0;

    blockData.forEach(block => {
        if (typeof block.gridColumn === 'string') {
            maxColumn = Math.max(maxColumn, block.gridColumn.split('/')[0].trim() );   
        } else {
            maxColumn = Math.max(maxColumn, block.gridColumn);
        }
        maxRow = Math.max(maxRow, block.gridRow);
    });    
    const rowHeight = 50;
    container.style.gridTemplateColumns = `repeat(${maxColumn},1fr)`; 
    container.style.gridTemplateRows = `repeat(${maxRow},${rowHeight}px)`; 
   

    blockData.forEach(block => {
        const blockElement = document.createElement("div");
        blockElement.className = `trialBlockBase ${block.class || ""}`;
        blockElement.title = block.title;
        blockElement.textContent = block.text;
        if (block.hasOwnProperty("onclick")){
            blockElement.setAttribute("ondblclick", `openOptionsWindow('trialDesignFiles/${block.onclick}.html')`); 
        }
        blockElement.style.gridColumn = block.gridColumn;
        blockElement.style.gridRow = block.gridRow;
        if (block.hasOwnProperty("color")){
            blockElement.style.backgroundColor = block.color;
        }
        container.appendChild(blockElement);
    });

    
    const totW=100;
    const lineWV=0.1;
    const v1=0;
    const v4=totW/maxColumn;
    const v3=v4-lineWV;
    const v2=v3-0.01;
    const lineWH=1;
    const rowHeightLineW=rowHeight+lineWH;
  
    
    container.style.backgroundImage = `repeating-linear-gradient(to right, transparent ${v1}%, transparent ${v2}%, lightgray ${v3}%, lightgray ${v4}%),
    linear-gradient(to bottom, transparent 0, transparent ${rowHeight}px, lightgray ${rowHeight}px, lightgray ${rowHeightLineW}px, transparent ${rowHeightLineW}px)`;

    
    document.body.appendChild(parentcontainer);
    parentcontainer.appendChild(container);
});





 function openOptionsWindow(htmlFileName) { 
     
    const windowSizePercent = 0.9; 
    newWindow = createWindow(windowSizePercent);  
 
    // Load content into the new window only after it has fully loaded
    newWindow.onload = function() { 
        // Populate the new window with content from contentScript.html
        fetch(htmlFileName)
            .then(response => response.text())
            .then(html => {
                newWindow.document.write(html);
                includeStyle( 'trialDesignFiles/tabHtmlStyle.css',newWindow); 
            
            // Create a container for navigation tabs
var tabContainer = newWindow.document.createElement("div");
tabContainer.id = "input-window-tabcontainer";
tabContainer.className = "input-subtab-container";

// Create a container to display content
var contentContainer = newWindow.document.createElement("div");
contentContainer.id = "contentContainer";
contentContainer.className = "contentcontainerclass";
            
            
           var myScript= includeScript( 'trialDesignFiles/tabHtmlScript.js',newWindow); 
            
              // Define tabs and corresponding HTML files
        const tabsDefinition = {
            "Tab 1": "trialDesignFiles/bird.html",
            "Tab 2": "trialDesignFiles/hands.html"
        };
        const initialTab = "Tab 2";
        
        // Initialize tabs
console.log('heree1');
      

// Append the containers to the body or any other desired parent element
newWindow.document.body.appendChild(tabContainer);
newWindow.document.body.appendChild(contentContainer);
newWindow.document.body.style.overflow = "hidden";
            
/*            // Create a div element
const contentContainer = newWindow.document.createElement('div');
// Set the id attribute
contentContainer.setAttribute('id', 'contentContainer');
contentContainer.setAttribute('class', 'contentcontainerclass');
// Append the div to the document body or any other desired parent element
newWindow.document.body.appendChild(contentContainer);            
contentContainer.innerHTML = html;*/
            
            
            
               
                includeScript( 'generalScript.js',newWindow); 
                includeStyle( 'trialDesignFiles/trialDesignChildrenStyles.css',newWindow); 
            
                createOKButton(newWindow,html);
            
    myScript.onload = function() {
    // Now that the script is loaded, you can call the function

        newWindow.createTabs(tabsDefinition,initialTab);
console.log('heree');
                // Makes the tabcontent scrollable and the OK final button always visible    
            //    changeHeightToFitParent(newWindow,'tabcontent');
                changeHeightToFitParent(newWindow,'contentcontainerclass');
};
              
          
            });
    };
}

 

 


