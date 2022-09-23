

/** Вывод ошибки в консоль */
const showError = (text: string, fieldName: string) => console.log(`${text}: ${fieldName}`);


/**
 * Проверка на ошибку
 * Вывод ошибки
 * Ответ есть ли ошибка - true при наличии
 */ 
const checkError = (data: any, fieldName: string) => {
  if (!data) {
    showError(`Не указано значение`, fieldName);
    return true;
  }
  return false;
};


const PREFIX = `UlibiProd-`;

/** Сохраняем в LocalStorage */
export const setStorageData = (storageName: string, data: any) => {
  if (checkError(storageName, `"Имя хранилища"`)) return;
  if (checkError(data, `"Данные для сохранения"`)) return;

  localStorage.setItem(PREFIX + storageName, JSON.stringify(data));
};


/** Достаём из LocalStorage */
export function getStorageData<A>(storageName: string): A {
  if (checkError(storageName, `"Имя хранилища"`)) return;

  let data = localStorage.getItem(PREFIX + storageName);
  if (data) return JSON.parse(data);
  return data as unknown as A;
}

/** Clear item by storageName */
export const removeStorageData = (storageName: string) => {
  if (checkError(storageName, `"Имя хранилища"`)) return;

  localStorage.removeItem(PREFIX + storageName);
};
