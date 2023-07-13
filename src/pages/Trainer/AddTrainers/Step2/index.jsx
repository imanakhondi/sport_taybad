import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddTrainersPage,
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
  //     `${validation.requiredMessage.replace(":field", AddTrainersPage.mobile)}`
  //   )
  //   .matches(
  //     /^[0-9]{10}$/,
  //     `${validation.exactDigitMessage.replace(
  //       ":field",
  //       AddTrainersPage.mobile
  //     )}`
  //   ),
  // tel: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddTrainersPage.tel)}`
  // ),
  // fieldOfStudy: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.fieldOfStudy
  //   )}`
  // ),
  // email: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddTrainersPage.email)}`
  // ),
  // homeAddress: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.homeAddress
  //   )}`
  // ),
  // workAddress: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.workAddress
  //   )}`
  // ),
});

const StepTwo = ({
  formData,
  setFormData,
  activeStepIndex,
  setActiveStepIndex,
}) => {
  // const formData=useSelector(state=>state.formReducer.formData)
  // const dispatch = useDispatch();

  const onSubmit = (values) => {
    // const data = { ...formData, ...values };
    // dispatch(stepOne(data));
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
        placeholder={`${AddTrainersPage.mobilePlaceholder}`}
        label={`${AddTrainersPage.mobile}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="tel"
        formik={formik}
        placeholder={`${AddTrainersPage.telPlaceholder}`}
        label={`${AddTrainersPage.tel}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fieldOfStudy"
        formik={formik}
        placeholder={`${AddTrainersPage.fieldOfStudyPlaceholder}`}
        label={`${AddTrainersPage.fieldOfStudy}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="email"
        formik={formik}
        placeholder={`${AddTrainersPage.emailPlaceholder}`}
        label={`${AddTrainersPage.email}`}
        type="email"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="homeAddress"
        formik={formik}
        placeholder={`${AddTrainersPage.homeAddressPlaceholder}`}
        label={`${AddTrainersPage.homeAddress}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="workAddress"
        formik={formik}
        placeholder={`${AddTrainersPage.workAddressPlaceholder}`}
        label={`${AddTrainersPage.workAddress}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.next} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepTwo;
