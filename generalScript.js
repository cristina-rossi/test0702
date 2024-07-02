

// includes a javascript in scriptName.js to the doc (if only first argument passsed) or a window (second argument)
function includeScript(scriptName, targetWindow) {
    let targetDoc;
    if (targetWindow) {
        targetDoc = targetWindow.document;
    } else {
        targetDoc = document;
    }
    
    var scriptElement = targetDoc.createElement('script'); 
    scriptElement.src = scriptName; 
    targetDoc.body.appendChild(scriptElement); 
    return scriptElement;
}

 

// includes a style in scriptName.css to the doc (if only first argument passsed) or a window (second argument)
function includeStyle(scriptName, targetWindow) {
    let targetDoc;
    if (targetWindow) {
        targetDoc = targetWindow.document;
    } else {
        targetDoc = document;
    }
    const cssLink = targetDoc.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = scriptName;
    targetDoc.head.appendChild(cssLink);
}


function createWindow(sizePercent){        
     
     
    // Get the dimensions of the main window
    var mainWindowWidth = window.innerWidth;
    var mainWindowHeight = window.innerHeight;

    // Calculate the size for the new window (sizePercent% of the main window's dimensions)
    var newWindowWidth = Math.round(mainWindowWidth * sizePercent);
    var newWindowHeight = Math.round(mainWindowHeight * sizePercent);
     
    // Calculate the position to center the new window
    var leftOffset = Math.round((mainWindowWidth - newWindowWidth) / 2);
    var topOffset = Math.round((mainWindowHeight - newWindowHeight) / 2);
 
    // Open a new window with the specified size and centered position
    var newWindow = window.open('', 'myWindow', 'width=' + newWindowWidth + ',height=' + newWindowHeight + ',left=' + leftOffset + ',top=' + topOffset);

      
    return newWindow;
}


function toggleExpandableWindow  (button, windowId) {
    var expandableWindow = document.getElementById(windowId); 
    expandableWindow.style.display = (expandableWindow.style.display === 'inline-block') ? 'none' : 'inline-block';
    button.classList.toggle('expanded', expandableWindow.style.display === 'inline-block');
};


function createOKButton(targetWindow){
             
    
        // Create a container for the button
        const buttonContainer = targetWindow.document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'column';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.height = '100%';
        buttonContainer.id = 'button-container';


        // Create an "OK" button
        const okButton = targetWindow.document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.marginTop = '20px'; // Adjust as needed for spacing
        // Add event listener to close the window when the button is clicked
        okButton.addEventListener('click', function() {
            targetWindow.close();
        });
        // Append the button to the buttonContainer
        buttonContainer.appendChild(okButton);
        // Append the buttonContainer to the document body
        targetWindow.document.body.appendChild(buttonContainer);
    
}



function changeHeightToFitParent(targetWindow,classToResize,manualOffset=20) {
    // 1) calculate the sum of offsetHeight of all children of a targetWindow excluding elements with class classToResize
    let totalOffsetHeight = 0; 
    const childrenArray = targetWindow.document.body.children; 
    console.log(childrenArray);
    // Iterate through all children of the target window
    for (let i = 0; i < childrenArray.length; i++) {
        let child = childrenArray[i];
        // Check if the element has class classToResize, if yes, skip it
        if (!child.classList.contains(classToResize)) {
            // Add the offsetHeight of each child to the total
            totalOffsetHeight += child.offsetHeight; 
        console.log(child);
        console.log(child.offsetHeight);
        }
    } 
    
        console.log(totalOffsetHeight);
        console.log(targetWindow);
        console.log(targetWindow.innerHeight);
    //2) resize element of class classToResize to occupy remaining height
   const targetHeight = targetWindow.innerHeight -  totalOffsetHeight - manualOffset;   
        console.log(targetHeight);
   targetWindow.document.querySelector('.' + classToResize).style.height = targetHeight + 'px';  
}



      
