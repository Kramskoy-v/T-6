import { Dropzone } from "dropzone"

//Dropzone для Несколько сторон участников


  const commandImgs = document.querySelectorAll('.command-dropzone')

  if (commandImgs) {
    commandImgs.forEach(commandImg => {
      const addBtnDropzone = commandImg.querySelector('.big-form__command-btn-dropzone')

      let commandImgDropzone = new Dropzone(commandImg, {
        maxFilesize: 5,
        url: '/include/ajax/upload_image.php',
        maxFiles: 1,
        thumbnailWidth: 15,
        thumbnailHeight: 15,
        acceptedFiles: '.png, .jpeg, .jpg',
        addRemoveLinks: true,
        dictRemoveFile: 'удалить',
        clickable: addBtnDropzone,
      })
    })
 }

