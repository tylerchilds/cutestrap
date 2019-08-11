const activeClass = '-active';

function handleBrowserTabs(tabs, tabContents, event) {
    tabs.forEach(x =>
        x.classList.remove(activeClass)
    );
    tabContents.forEach(x =>
        x.classList.remove(activeClass)
    );

    const tab = event.target;
    const id = tab.dataset.id;
    const tabContent = document.getElementById(id);

    tab.classList.add(activeClass);
    tabContent.classList.add(activeClass);
}


function bindBrowserTabs() {
    const tabs = document.querySelectorAll('.example-tab');
    const tabContents = document.querySelectorAll('.example-tab-content');
    tabs.forEach(x => 
        x.addEventListener('click', handleBrowserTabs.bind(null, tabs, tabContents))
    );
}

(function(){
    // document.querySelectorAll('.js-print').addEventListener('click', window.print);
    

    bindBrowserTabs();
})();