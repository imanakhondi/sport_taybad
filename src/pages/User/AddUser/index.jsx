import { useFormik } from "formik";
import * as Yup from "yup";
import { addUserPage } from "../../../constants/strings/fa";
import Input from "../../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { BASE_PATH } from "../../../constants";
import { User } from "../../../http/entities";

const initialValues = {
  userName: "",
  name: "",
  family: "",
  nationalCode: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  userName: Yup.string(),
  name: Yup.string(),
  family: Yup.string(),
  nationalCode: Yup.string(),
  mobile: Yup.string(),
  email: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

const AddUser = () => {
  const navigate = useNavigate();
  const user = new User();

  const onSubmit = async (values) => {
    const { userName, name, family, nationalCode, mobile, email, password } =
      values;
    const result = await user.storeUser(
      userName,
      name,
      family,
      nationalCode,
      mobile,
      email,
      password
    );
    if (result === null) {
      //show message failure
      return;
    }
    //show message success
    navigate(`${BASE_PATH}/users`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container overflow-hidden">
      <div className="flex min-h-screen max-w-7xl mx-auto font-IRANSansWeb">
        <div className="flex-[2] flex flex-col p-5 relative">
          <div className="xl:max-w-2xl mx-auto bg-navBgColor rounded-2xl p-5 mt-10">
            <h2 className=" mb-2 text-white">{addUserPage._title}</h2>
            <span className="text-xs mb-5">{addUserPage._subTitle}</span>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-wrap max-w-6xl mx-auto justify-between"
            >
              <Input
                name="userName"
                formik={formik}
                placeholder={`${addUserPage.userNamePlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
              />
              <Input
                name="name"
                formik={formik}
                placeholder={`${addUserPage.namePlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
              />
              <Input
                name="family"
                formik={formik}
                placeholder={`${addUserPage.familyPlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
              />
              <Input
                name="nationalCode"
                formik={formik}
                placeholder={`${addUserPage.nationalCodePlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="number"
              />
              <Input
                name="mobile"
                formik={formik}
                placeholder={`${addUserPage.mobilePlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="number"
              />
              <Input
                name="email"
                formik={formik}
                placeholder={`${addUserPage.emailPlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="email"
              />
              <Input
                name="password"
                formik={formik}
                placeholder={`${addUserPage.passwordPlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="password"
              />
              <Input
                name="confirmPassword"
                formik={formik}
                placeholder={`${addUserPage.confirmPasswordPlaceholder}`}
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="password"
              />

              <button
                type="submit"
                // disabled={!formik.isValid}
                className="w-full bg-gradient-to-r from-secondaryColor to-[#040F75] rounded-xl py-2 mx-auto px-5 mt-3"
              >
                {addUserPage.confirm}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
