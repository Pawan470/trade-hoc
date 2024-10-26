import toast from "react-hot-toast";
import axios from "axios";

export const handleError = (error, options = { duration: 3000 }) => {
  if (typeof error === "object") {
    return toast.error(error.message, options);
  }
  toast.error(error, options);
};

export const handleSuccess = (message = "", options = { duration: 3000 }) => {
  return toast.success(message, options);
};

export const isValueExist = (value) => {
  if (value) return value;
  return "--";
};

export const debounce = (cb, timer) => {
  let isTimer;
  return (arg) => {
    if (isTimer) clearTimeout(isTimer);
    isTimer = setTimeout(() => {
      cb(arg);
      isTimer = null;
    }, timer);
  };
};

export const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.split(".");
  const result = pathArray.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);

  return result !== undefined ? result : defaultValue;
};

export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isEmpty = (value, defaultValue = null) => {
  if (value == null) return defaultValue;

  if (typeof value === "object") {
    if (Object.keys(value).length === 0) return defaultValue;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return defaultValue;
  }

  if (typeof value === "string") {
    if (value.trim().length === 0) return defaultValue;
  }

  return value;
};

export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return passwordRegex.test(password);
};

export const hasValueInArray = (arr) => {
  if (!Array.isArray(arr) && arr.length > 0) return true;
  return false;
};


export const handleApiError = (error) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const { status, data } = error.response;
      return data.message || `Error: ${status} - ${data.error || 'Something went wrong'}`;
    }

    if (error.request) {
      return 'No response received from server. Please check your network connection.';
    }

    return error.message;
  }

  return 'An unexpected error occurred';
};