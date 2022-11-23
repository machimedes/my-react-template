// 将表单数据封装成对象
export const formObject = (formData) => {
  const formObject = {};
  formData.forEach((value, key) => {
    return formObject[key] = value;
  });
  return formObject;
};