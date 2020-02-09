const handleTabs = (tabs, tab, contents) => {
    tabs.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            for (let i = 0; i < tab.length; i++) {
                console.log(tab[i]);
                tab[i].classList.remove('active');
            }
            e.target.classList.toggle('active');
            for (i = 0; i < contents.length; i++) {
                contents[i].classList.remove('active');
            }
            let tabId = '#' + e.target.dataset.tabId;
            document.querySelector(tabId).classList.toggle('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs'),
        tab = document.querySelectorAll('.tabs__item'),
        contents = document.querySelectorAll('.requests__box ');
    handleTabs(tabs, tab, contents);
});

