import * as Yup from 'yup';
import { errorMessages } from './errorMessages';


export const loginSchema = Yup.object({
  email: Yup.string()
    .email(errorMessages.EMAIL_INVALID)
    .required(errorMessages.EMAIL_REQUIRED),
  password: Yup.string()
    .required(errorMessages.PASSWORD_REQUIRED)
    .min(8, errorMessages.PASSWORD_MIN_LENGTH)
    .matches(/[A-Z]/, errorMessages.PASSWORD_UPPERCASE)
    .matches(/[a-z]/, errorMessages.PASSWORD_LOWERCASE)
    .matches(/[0-9]/, errorMessages.PASSWORD_NUMBER)
    .matches(/[!@#$%^&*]/, errorMessages.PASSWORD_SPECIAL_CHAR),
});

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .trim()  // This ensures leading and trailing spaces are trimmed
    .matches(/^[A-Za-z]+$/, errorMessages.FIRSTNAME_ALPHABETS_ONLY)
    .required(errorMessages.FIRSTNAME_REQUIRED),
  lastName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, errorMessages.LASTNAME_ALPHABETS_ONLY)
    .required(errorMessages.LASTNAME_REQUIRED),
  email: Yup.string()
    .trim()
    .email(errorMessages.EMAIL_INVALID)
    .required(errorMessages.EMAIL_REQUIRED),
  password: Yup.string()
    .trim()
    .required(errorMessages.PASSWORD_REQUIRED)
    .min(8, errorMessages.PASSWORD_MIN_LENGTH)
    .matches(/[A-Z]/, errorMessages.PASSWORD_UPPERCASE)
    .matches(/[a-z]/, errorMessages.PASSWORD_LOWERCASE)
    .matches(/[0-9]/, errorMessages.PASSWORD_NUMBER)
    .matches(/[!@#$%^&*]/, errorMessages.PASSWORD_SPECIAL_CHAR),
  country: Yup.string()
    .trim()
    .required(errorMessages.COUNTRY_REQUIRED),
});


export const blogSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Title is required"),
  description: Yup.string()
    .trim()
    .required("Description is required"),
  // image: Yup.mixed()
  //   .required("Image is required")
  //   .test(
  //     "fileSize",
  //     "Image size cannot exceed 5MB",
  //     (value) => value && value.size <= 5 * 1024 * 1024 // 5MB size check
  //   ),
});