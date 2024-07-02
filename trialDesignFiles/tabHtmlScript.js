
        // Function to create navigation tabs
        function createTabs(tabsDefinition,initialTab) {
console.log('hiy');
            const tabContainer = document.getElementById('input-window-tabcontainer');
            for (const tabName in tabsDefinition) {
                const button = document.createElement('button');
                button.textContent = tabName;
                button.className = 'input-subtab-button';
                button.addEventListener('click', () => clickTab(button,tabsDefinition[tabName]));
                tabContainer.appendChild(button);
                
                if (tabName == initialTab){
                    clickTab(button,tabsDefinition[tabName]);
                }
            }
            
        }

        // Function to fetch and display content
        function clickTab(clickedTab,htmlFile) {
console.log('hey');
            fetch(htmlFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    document.getElementById('contentContainer').innerHTML = html;
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
           
            document.querySelectorAll('.input-subtab-button').forEach(button => {
                button.classList.remove('active');
            });
            clickedTab.classList.add('active');
        }