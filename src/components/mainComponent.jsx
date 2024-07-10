import { FastField, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import * as Yup from "yup";
import "../App.css";
import ShowSwal from "./swal";

const MainComponent = ({ setData }) => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("لطفا این قسمت را پر کنید"),
    email: Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .email("لطفا قالب ایمیل را رعایت کنید "),
    password: Yup.string().required("لطفا این قسمت را پر کنید"),
    confirmPassword: Yup.string().required("لطفا این قسمت را پر کنید"),
    bio: Yup.string(),
  });
  const validate = (values) => {
    let errors = {};
    if (values.confirmPassword != values.password) {
      errors.confirmPassword = "مقدار وارد شده با پسورد مطابقت ندارد";
    }
    if (values.acceptRoles == false) {
      errors.acceptRoles = "لطفا تیک قوانین را بزنید";
    }
    return errors;
  };

  const onSubmit = (values, submitProps) => {
    if (values.acceptRoles == true) {
      setTimeout(() => {
        submitProps.setSubmitting(false);
      }, 3000);
      setTimeout(() => {
        setData({
          name: values.name,
          email: values.email,
          password: values.password,
          bio: values.bio,
        });
        ShowSwal(() => navigate("/home"));
      }, 3500);
    } else {
      alert("تیک قوانین زده نشده");
    }
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptRoles: false,
    bio: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validate={validate}
    >
      {(formik) => {
        return (
          <Form className="centred">
            <img src={logo} alt="" />
            <div>
              <FastField>
                {({ field, form }) => {
                  return (
                    <div>
                      <input
                        type="text"
                        className="input-text"
                        placeholder="نام مستعار"
                        name="name"
                        autoFocus
                        value={field.value.name}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {form.errors.name && form.touched.name ? (
                        <small>{form.errors.name}</small>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div>
              <FastField>
                {({ field, form }) => {
                  return (
                    <div>
                      <input
                        type="text"
                        className="input-text"
                        placeholder="ایمیل"
                        name="email"
                        value={field.value.email}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {form.errors.email && form.touched.email ? (
                        <small>{form.errors.email}</small>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div>
              <FastField>
                {({ field, form }) => {
                  return (
                    <div>
                      <input
                        type="password"
                        className="input-text"
                        placeholder="رمز عبور"
                        name="password"
                        value={field.value.password}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {form.errors.password && form.touched.password ? (
                        <small>{form.errors.password}</small>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div>
              <FastField>
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <input
                        type="password"
                        className="input-text"
                        placeholder="تکرار رمز عبور"
                        name="confirmPassword"
                        value={field.value.confirmPassword}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {form.errors.confirmPassword &&
                      form.touched.confirmPassword ? (
                        <small>{meta.error.confirmPassword}</small>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div>
              <FastField>
                {() => {
                  return (
                    <textarea
                      name="bio"
                      placeholder="بیوگرافی"
                      className="input-text"
                      style={{
                        resize: "vertical",
                        maxWidth: "300px",
                        minHeight: "20px",
                        maxHeight: "100px",
                      }}
                    ></textarea>
                  );
                }}
              </FastField>
            </div>
            <div className="accept-roles">
              <FastField
                type="checkbox"
                name="acceptRoles"
                onChange={formik.handleChange}
              />
              <p>
                شرایط و قوانین سایت{" "}
                <a href="http://parsashaabani.ir/">پارسا‌شعبانی</a> را میپذیرم
              </p>
            </div>
            <button
              className="register-button"
              type="submit"
              disabled={formik.isSubmitting}
              style={formik.isSubmitting ? { opacity: "70%" } : null}
            >
              <div>
                {formik.isSubmitting ? <span class="loader"></span> : "ثبت نام"}
              </div>
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MainComponent;
