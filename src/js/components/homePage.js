const btnViewGrid = document.querySelector('.events__btn-grid')
const btnViewRows = document.querySelector('.events__btn-rows')
const eventsList = document.querySelector('.events__list')

btnViewGrid.addEventListener('click', ()=>{
    if (btnViewRows.classList.contains('_active')){
        btnViewRows.classList.remove('_active')
        btnViewGrid.classList.add('_active')
        eventsList.classList.remove('_rows')
    }
})

btnViewRows.addEventListener('click', ()=>{
    if (btnViewGrid.classList.contains('_active')){
        btnViewGrid.classList.remove('_active')
        btnViewRows.classList.add('_active')
        eventsList.classList.add('_rows')
    }
})