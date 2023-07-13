import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddStudentsPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import * as Yup from "yup";
import TextAreaInput from "../../../../common/Input/TextAreaInput";
import SubmitButton from "../../../../common/Input/SubmitButton";

const initialValues = {
  mobile: "",
  tel: "",
  fieldOfStudy: "",
  email: "",
  homeAddress: "",
  workAddress: "",
};

const validationSchema = Yup.object({
  // mobile: Yup.string()
  //   .required(
  //     `${validation.requiredMessage.replace(":field", AddStudentsPage.mobile)}`
  //   )
  //   .matches(
  //     /^[0-9]{10}$/,
  //     `${validation.exactDigitMessage.replace(
  //       ":field",
  //       AddStudentsPage.mobile
  //     )}`
  //   ),
  // tel: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddStudentsPage.tel)}`
  // ),
  // fieldOfStudy: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.fieldOfStudy
  //   )}`
  // ),
  // email: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddStudentsPage.email)}`
  // ),
  // homeAddress: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.homeAddress
  //   )}`
  // ),
  // workAddress: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.workAddress
  //   )}`
  // ),
});

const StepTwo = ({
  formData,
  setFormData,
  activeStepIndex,
  setActiveStepIndex,
}) => {
  const onSubmit = (values) => {
    const data = { ...formData, ...values };
    setFormData(data);
    setActiveStepIndex(activeStepIndex + 1);
    console.log("imaaaaaaaaaaaaan", formData, activeStepIndex);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-wrap max-w-6xl mx-auto justify-between"
    >
      <Input
        name="mobile"
        formik={formik}
        placeholder={`${AddStudentsPage.mobilePlaceholder}`}
        label={`${AddStudentsPage.mobile}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="tel"
        formik={formik}
        placeholder={`${AddStudentsPage.telPlaceholder}`}
        label={`${AddStudentsPage.tel}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fieldOfStudy"
        formik={formik}
        placeholder={`${AddStudentsPage.fieldOfStudyPlaceholder}`}
        label={`${AddStudentsPage.fieldOfStudy}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="email"
        formik={formik}
        placeholder={`${AddStudentsPage.emailPlaceholder}`}
        label={`${AddStudentsPage.email}`}
        type="email"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="homeAddress"
        formik={formik}
        placeholder={`${AddStudentsPage.homeAddressPlaceholder}`}
        label={`${AddStudentsPage.homeAddress}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="workAddress"
        formik={formik}
        placeholder={`${AddStudentsPage.workAddressPlaceholder}`}
        label={`${AddStudentsPage.workAddress}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.next} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepTwo;
