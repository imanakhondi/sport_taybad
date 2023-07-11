import { Link } from "react-router-dom";
import { changePasswordUserPage, general } from "../../../constants/strings/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { BASE_PATH } from "../../../constants";
import { fetchAuthAction } from "../../../state/user/userAction";
import { User } from "../../../http/entities";

const initialValues = {
  newPassword: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  newPassword: Yup.string(),
  confirmPassword: Yup.string(),
});

const ChangePassword = () => {
  const navigate = useNavigate();
  const user = new User();

  const onSubmit = (values) => {
    const { newPassword, confirmPassword } = values;
    const result = user.changePassword(newPassword, confirmPassword);
    if (result === null) {
      //show message failure
      return;
    }
    //show message success
    // navigate(`/login`);
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
            <h2 className="mb-2 text-white">{changePasswordUserPage._title}</h2>
            <span className="text-xs mb-5">
              {changePasswordUserPage._subTitle}
            </span>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-wrap max-w-6xl mx-auto justify-between"
            >
              <Input
                name="newPassword"
                formik={formik}
                placeholder={`${changePasswordUserPage.newPassword}`}
                // custom="lg:w-full"
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="password"
              />
              <Input
                name="confirmPassword"
                formik={formik}
                placeholder={`${changePasswordUserPage.confirmPassword}`}
                // custom="lg:w-full"
                customStyleInput="!border-[#AFAFAF] rounded-xl"
                type="password"
              />
              <button className="w-full bg-gradient-to-r from-secondaryColor to-[#040F75] rounded-xl p-3 mt-3">
                {general.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
