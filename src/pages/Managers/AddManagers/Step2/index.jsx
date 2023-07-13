import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddManagersPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import * as Yup from "yup";
import TextAreaInput from "../../../../common/Input/TextAreaInput";
import SubmitButton from  "../../../../common/Input/SubmitButton"

const initialValues = {
  mobile: "",
  tel: "",
  fieldOfStudy: "",
  email: "",
  homeAddress: "",
  workAddress: "",
};

const validationSchema = Yup.object({
  mobile: Yup.string()
    .required(
      `${validation.requiredMessage.replace(":field", AddManagersPage.mobile)}`
    )
    .matches(
      /^[0-9]{10}$/,
      `${validation.exactDigitMessage.replace(
        ":field",
        AddManagersPage.mobile
      )}`
    ),
  // tel: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddManagersPage.tel)}`
  // ),
  // fieldOfStudy: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddManagersPage.fieldOfStudy
  //   )}`
  // ),
  // email: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddManagersPage.email)}`
  // ),
  // homeAddress: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddManagersPage.homeAddress
  //   )}`
  // ),
  // workAddress: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddManagersPage.workAddress
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
        placeholder={`${AddManagersPage.mobilePlaceholder}`}
        label={`${AddManagersPage.mobile}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="tel"
        formik={formik}
        placeholder={`${AddManagersPage.telPlaceholder}`}
        label={`${AddManagersPage.tel}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fieldOfStudy"
        formik={formik}
        placeholder={`${AddManagersPage.fieldOfStudyPlaceholder}`}
        label={`${AddManagersPage.fieldOfStudy}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="email"
        formik={formik}
        placeholder={`${AddManagersPage.emailPlaceholder}`}
        label={`${AddManagersPage.email}`}
        type="email"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="homeAddress"
        formik={formik}
        placeholder={`${AddManagersPage.homeAddressPlaceholder}`}
        label={`${AddManagersPage.homeAddress}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="workAddress"
        formik={formik}
        placeholder={`${AddManagersPage.workAddressPlaceholder}`}
        label={`${AddManagersPage.workAddress}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />

      <SubmitButton disabled="" submit={general.next} />
       {/* disabled={!formik.isValid} */}
     
    </form>
  );
};

export default StepTwo;
