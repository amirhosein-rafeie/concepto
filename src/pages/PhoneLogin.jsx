import { Formik, Form } from "formik";
import { phoneLoginSchema } from "../validation/loginSchema";
import { LoginImage, Logo } from "../assets/images";
import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate, NavLink } from "react-router-dom";

const PhoneLogin = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center p-12 bg-gray-50 relative max-w-[1440px] max-h-[1024px] overflow-hidden">
      <button
        onClick={() => navigate("/")}
        title="بازگشت به صفحه اصلی"
        className="absolute top-8 right-8 p-2 text-gray-700 hover:text-blue-600 transition duration-150 rounded-full"
      >
        <ArrowForwardIcon className="w-8 h-8 transform rotate-180" />
      </button>

      <div
        className="flex flex-row items-center justify-center w-full space-x-12"
        style={{ direction: "ltr" }}
      >
        <div
          className="flex shrink-0"
          style={{ width: "700px", height: "712px" }}
        >
          <img
            src={LoginImage}
            alt="login visual"
            className="w-full h-full object-cover rounded-[48px]"
          />
        </div>

        <div
          className="flex flex-col justify-center p-8 grow"
          style={{ width: "300px", height: "912px", direction: "rtl" }}
        >
          <div className="mb-12 text-right">
            <img src={Logo} alt="logo" className="w-[198px] h-[24px]" />
          </div>

          <div className="mb-10 text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              ورود | ثبت نام
            </h2>
            <p className="text-lg text-gray-500">
              برای ادامه شماره تماس را وارد کنید
            </p>
          </div>

          <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={phoneLoginSchema}
            onSubmit={(values) => console.log("Login submitted:", values)}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form className="flex flex-col gap-6">
                <TextField
                  fullWidth
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="شماره موبایل"
                  type="tel"
                  placeholder="09*******"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  size="medium"
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailOutlinedIcon className="text-gray-400" />
                      </InputAdornment>
                    ),
                    style: { direction: "ltr", textAlign: "left" },
                  }}
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-6 text-xl transition duration-200 cursor-pointer"
                >
                  ورود
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex justify-between items-center mt-8 text-lg">
            <NavLink
              to="/normallogin"
              className="text-blue-600 font-bold hover:text-blue-700"
            >
              ورود با کلمه عبور
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLogin;
