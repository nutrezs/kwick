let tabs = bureau.querySelectorAll('.tab-link:not(.desactive)');

tabs.foreach(tab => {
    tab.addEventListener("click", () => {
        unselectAll();
        tab.classList.add('active');
        let ref = tab.getAttribute('data-ref');
        bureau.querySelector('.tab-body[data-id="${ref}"]').classList.add('active');
    
    });

});

function unSelectAll() {
    tabs.foreach(tab => {
        tab.classList.remove('active');
    })
    let tabbodies = bureau.querySelectorAll('.tab-body');
    tabbodies.foreach(tab => {
        tab.classList.remove('active');
    })
}

bureau.querySelectorAll('.tab-link.active').click();


