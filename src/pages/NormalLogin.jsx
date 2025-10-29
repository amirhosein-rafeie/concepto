import { useState } from "react";
import { Formik, Form } from "formik";
import { normalLoginSchema } from "../validation/loginSchema";
import { LoginImage, Logo } from "../assets/images";
import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate, NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const NormalLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="overflow-hidden h-screen flex items-center justify-center p-12 bg-gray-50 relative">
      <button
        onClick={() => navigate("/")}
        title="بازگشت به صفحه اصلی"
        className="absolute top-8 right-8 p-2 text-gray-700 hover:text-blue-600 transition duration-150 rounded-full"
      >
        <ArrowForwardIosIcon className="w-8 h-8 transform rotate-180" />
      </button>

      <div
        className="flex flex-row items-center justify-center w-full max-w-[1500px] space-x-12"
        style={{ height: "912px", direction: "ltr" }}
      >
        <div
          className="flex shrink-0"
          style={{ width: "900px", height: "912px" }}
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
            <img src={Logo} alt="logo" className="w-[198px] h-6" />
          </div>

          <div className="mb-10 text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              ورود با کلمه عبور
            </h2>
            <p className="text-lg text-gray-500">
              برای ادامه ایمیل و رمز عبور را وارد کنید
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={normalLoginSchema}
            onSubmit={(values) => console.log("Login submitted:", values)}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form className="flex flex-col gap-6">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="ایمیل یا شماره موبایل"
                  type="email"
                  placeholder="info@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  size="medium"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailOutlinedIcon className="text-gray-400" />
                      </InputAdornment>
                    ),
                    style: { direction: "ltr", textAlign: "left" },
                  }}
                />

                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="رمز عبور"
                  type={showPassword ? "text" : "password"}
                  placeholder="***"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  size="medium"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon className="text-gray-400" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePassword}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-6 text-xl transition duration-200"
                >
                  ورود
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex justify-between items-center mt-8 text-lg">
            <NavLink
              to="/phonelogin"
              className="text-blue-600 font-bold hover:text-blue-700"
            >
              ورود با رمز یکبار مصرف
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalLogin;
