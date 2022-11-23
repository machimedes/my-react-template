import {createTheme} from "@mui/material/styles";
import axios from "axios";
import WrappedResult from "./WrappedResult";

// 将表单数据封装成对象
export const formObject = (formData) => {
  const formObject = {};
  formData.forEach((value, key) => {
    return formObject[key] = value;
  });
  return formObject;
};

export const post = (url, body) => {
  return axios.post(url, body)
    .then(response => {
      return new WrappedResult(response.status, response.data, {});
    })
    .catch(error => {
      return new WrappedResult(error.response.status, {}, error.response.data)
    });
}

export const alertHttpError = (wr) => {
  if (wr.httpStatus !== 200) {
    alert("http请求错误码: " + wr.httpStatus + "\n" + "详细信息: " + wr.httpErrorMessage)
    return true
  }
}

export const alertAppError = (wr) => {
  if (wr.code !== 0) {
    alert("业务返回错误码: " + wr.code + "\n" + "详细信息: " + wr.message)
    return true
  }
}

export const alertError = (wr) => {
  return alertHttpError(wr) || alertAppError(wr)
}

export const queryIPFromGeolocation = () => {
  return axios.get('https://geolocation-db.com/json/')
    .then(response => {
      return response.data.IPv4
    })
    .catch(error => {
      return ""
    });
}