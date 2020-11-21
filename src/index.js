import "./style.css";

const filenamePhoto = document.querySelector(".documents__item-filename_photo");
const filenameReg = document.querySelector(".documents__item-filename_reg");
const iconPhoto = document.querySelector(".documents__item-upload_photo");
const iconReg = document.querySelector(".documents__item-upload_reg");
const fileUploadPhoto = document.querySelector(".documents__item-input_photo");
const fileUploadReg = document.querySelector(".documents__item-input_reg");
const resultPhoto = document.querySelector(".documents__item-result_photo");
const resultReg = document.querySelector(".documents__item-result_reg");
const linkPhoto = document.querySelector(".documents__item-link");
const linkReg = document.querySelector(".documents__item-link_reg");
const preloaderPhoto = document.querySelector(".preloader_photo");
const preloaderReg = document.querySelector(".preloader_reg");

const resultValues = [
  {
    text: "Проверено",
    color: "#7fa050",
  },
  {
    text: "Отклонено",
    color: "#c43524",
  },
];

const linkPhotoOK = "Страница с фотографией";
const linkRegOK = "Страница с пропиской";

function changeFilename(
  input,
  filename,
  icon,
  result,
  link,
  linkValue,
  uniqueTextValue,
  preloader
) {
  input.addEventListener("change", (event) => {
    preloader.style.display = "flex";
    link.style.textDecoration = "none";
    link.style.cursor = "default";
    input.disabled = "true";
    icon.style.cursor = "default";
    const filesizeInKilobytes = input.files[0].size / 1024;
    const filesizeInMegabytes = filesizeInKilobytes / 1000;
    setTimeout(() => {
      icon.classList.remove("documents__item-upload_upload");
      icon.classList.add("documents__item-upload_wait");
      result.textContent = "Идет проверка";
      result.style.color = "#9c9c9c";
      preloader.style.display = "none";
      link.textContent = "Файл загружен";
    }, 2000);
    setTimeout(() => {
      const filepath = event.target.value.replace(/C:\\fakepath\\/i, "");
      let filesizeFormatted = Math.floor(filesizeInKilobytes);
      filename.textContent = `${filepath} (${filesizeFormatted}Кб)`;
      const random =
        resultValues[Math.floor(Math.random() * resultValues.length)];
      function decline() {
        result.textContent = "Отклонено";
        result.style.color = "#c43524";
        icon.classList.add("documents__item-upload_upload");
        icon.classList.remove("documents__item-upload_wait");
        filename.textContent = "Размер файла не более 5Мб";
        link.textContent = `Загрузить скан страницы с ${uniqueTextValue}`;
        input.removeAttribute("disabled");
        icon.style.cursor = "pointer";
        link.style.cursor = "pointer";
        link.style.textDecoration = "underline";
      }
      function approve() {
        link.textContent = linkValue;
        result.textContent = "Проверено";
        result.style.color = "#7fa050";
        icon.classList.add("documents__item-upload_ok");
        icon.classList.remove("documents__item-upload_wait");
        link.style.textDecoration = "none";
      }
      if (random.text === "Отклонено") {
        decline();
      } else if (filesizeInMegabytes >= 5) {
        decline();
      } else if (random.text === "Проверено") {
        approve();
      }
    }, 4000);
  });
}

changeFilename(
  fileUploadPhoto,
  filenamePhoto,
  iconPhoto,
  resultPhoto,
  linkPhoto,
  linkPhotoOK,
  "фотографией",
  preloaderPhoto
);
changeFilename(
  fileUploadReg,
  filenameReg,
  iconReg,
  resultReg,
  linkReg,
  linkRegOK,
  "пропиской",
  preloaderReg
);
