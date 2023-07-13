import { Link } from "react-router-dom";
import { changePasswordUserPage, general } from "../../../constants/strings/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { BASE_PATH } from "../../../constants";
import { fetchAuthAction } from "../../../state/user/userAction";
import { User } from "../../../http/entities";
import UsersLayout from "../../../layout/UsersLayout";
import SubmitButton from "../../../common/Input/SubmitButton";

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
    <UsersLayout
      title={changePasswordUserPage._title}
      subTitle={changePasswordUserPage._subTitle}
    >
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
        <SubmitButton disabled="" />
        {/* disabled={!formik.isValid} */}
      </form>
    </UsersLayout>
  );
};

export default ChangePassword;
