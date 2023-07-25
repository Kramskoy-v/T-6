const menuItems = document.querySelectorAll('.main-menu__item-min')

menuItems.forEach(item => {
    item.addEventListener('click', ({currentTarget}) => {
        if (!currentTarget.classList.contains('_active')) {
            menuItems.forEach(item => item.classList.remove('_active'))
            currentTarget.classList.add('_active')
        } else {
            currentTarget.classList.remove('_active')
        }
    })
})
