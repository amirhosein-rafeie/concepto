import * as Yup from "yup";

export const normalLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("فرمت ایمیل نامعتبر است")
    .required("وارد کردن ایمیل الزامی است"),

  password: Yup.string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .required("وارد کردن رمز عبور الزامی است"),
});

export const phoneLoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست (مثلاً: 09123456789)")
    .required("وارد کردن شماره موبایل الزامی است"),
});
