 const clientListRenderer = (invoiceName,listID,inputID) => {
    // loop in clients-list-users-item - used in homepage and Add client tab 

    let clientsListUsersItem = document.querySelectorAll('.clients-list-users-item')
    let clientsListUsers_itemName = document.querySelectorAll('.clients-list-users-item-data--name');


    let clientsList = document.getElementById(listID);


    let salesInvoice = document.getElementById(invoiceName);

    let invoice_search_input_container = document.getElementById('invoice_search_input_container');
    let invoiceInput = document.getElementById(inputID);
    let backBtn = document.querySelectorAll('.back-btn');








     let tl = new TimelineMax({
        paused: true
    });
    tl.to(salesInvoice, 0.4, {
            opacity: 0,
            display: 'none'
        })
        .to(clientsList, 0.4, {
            opacity: 1,
            display: 'block'
        })
    console.log('play animation');

    invoiceInput.addEventListener('click', () => {
        tl.play();
    })

    backBtn.forEach(el => {
        el.addEventListener('click', () => {
            tl.reverse();
        })
    })

    clientsListUsersItem.forEach(element => {
        element.addEventListener('click', () => {
            let getName = element.children[0].children[1].children[0].textContent;
            let getNumber = element.children[0].children[1].children[1].textContent;
            invoiceInput.value = getName + ' - ' + getNumber
            tl.reverse(0.5);
            invoice_search_input_container.classList.add('have_value')
        })
    });

    let remove_search_input = document.getElementById('remove_search_input');
    remove_search_input.addEventListener('click', () => {
        invoiceInput.value = ''
    })
}


export default clientListRenderer;