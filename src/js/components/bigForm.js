import {limitationChangeableElements, updateChangeableListId} from '../_functions'
import {initSelects} from './customSelect'
import {initDrop} from './dropzone'


//отображение новой площадки на create-event
const showPlaceBtn = document.querySelector('.big-form__btn-new-place')
const newPlace = document.querySelector('.big-form__new-place')

if (showPlaceBtn) {
    showPlaceBtn.addEventListener('click', ({currentTarget}) => {
        newPlace.classList.toggle('_active')
        showPlaceBtn.classList.toggle('_rotate')
    })
}


//отображение блоков при изменении checkbox
const showByCheckbox = (checkbox, parent) => {
    const checkState = () => {
        if (checkbox.checked) {
            checkbox.closest(parent).classList.add('_active')
        } else {
            checkbox.closest(parent).classList.remove('_active')
        }
    }
    checkState()
    checkbox.addEventListener('change', checkState)
}

const showListCheckboxes = document.querySelectorAll('input[data-show-list]')
const commandsCheckbox = document.querySelector('#severalMembers')

if (showListCheckboxes) {
    showListCheckboxes.forEach(checkbox => {
        showByCheckbox(checkbox, '.big-form__show-wrapper')
    })
}

if (commandsCheckbox) {
    showByCheckbox(commandsCheckbox, '.big-form__commands-wrapper')
}

//  активность checkboxes
const showCheckboxes = document.querySelectorAll('input[data-show-checkbox]')

if (showCheckboxes) {
    showCheckboxes.forEach(checkbox => {
        const checkboxDisabled = checkbox.closest('.big-form__checkboxes > li')
            .querySelector('input[disabled]')
        const checkboxCars = checkbox.closest('.big-form__checkboxes > li')
            .querySelectorAll('.big-form__cars input[disabled]')
        const checkedState = () => {
            if (checkbox.checked) {
                checkboxDisabled.disabled = false
                if (checkboxCars) {
                    checkboxCars.forEach(item => item.disabled = false)
                }
            } else {
                checkboxDisabled.disabled = true
                checkboxDisabled.checked = false
                if (checkboxCars) {
                    checkboxCars.forEach(item => {
                        item.disabled = true
                        item.checked = false
                    })
                }
            }
        }
        checkedState()
        checkbox.addEventListener('change', checkedState)
    })

}


//template
const changeableLists = document.querySelectorAll('ul[data-list="changeable"]')

// Удаление элементов в изменяемых списках
if (changeableLists) {
    changeableLists.forEach(list => {
        list.addEventListener('click', (e) => {
            if (e.target.dataset.btn === 'delete') {
                e.target.closest('li').remove()
                const addBtn = list.parentElement.querySelector('button[data-btn="add"]')
                updateChangeableListId(list)
                limitationChangeableElements(list, addBtn)
            }
        })
    })
}

// Добавление элементов в изменяемых списках
const addToListBtns = document.querySelectorAll('button[data-btn="add"]')

if (addToListBtns) {
    addToListBtns.forEach(addBtn => {
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            const templateId = e.currentTarget.dataset.template
            let templateFragment = document.querySelector(`#${templateId}`)?.content
            let templateElement = templateFragment.firstElementChild.cloneNode(true)
            const targetChangeableList = e.currentTarget.parentElement.querySelector(
                'ul[data-list="changeable"]')
            targetChangeableList.appendChild(templateElement)
            limitationChangeableElements(targetChangeableList, addBtn)
            updateChangeableListId(targetChangeableList)
            initSelects()
        })
    })
}
