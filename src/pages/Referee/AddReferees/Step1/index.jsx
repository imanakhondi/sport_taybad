import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddRefereesPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import DateObject from "react-date-object";
import * as Yup from "yup";
import DateInput from "../../../../common/Input/DateInput";
import SubmitButton from "../../../../common/Input/SubmitButton";

const initialValues = {
  name: "",
  family: "",
  fatherName: "",
  birthDate: "",
  placeOfBirth: "",
  identityNo: "",
  nationalCode: "",
};
const validationSchema = Yup.object({
  // name: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddRefereesPage.name)}`
  // ),
  // family: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddRefereesPage.family)}`
  // ),
  // fatherName: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddRefereesPage.fatherName
  //   )}`
  // ),
  // birthDate: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddRefereesPage.birthDate)}`
  // ),
  // placeOfBirth: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddRefereesPage.placeOfBirth
  //   )}`
  // ),
  // identityNo: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddRefereesPage.identityNo
  //   )}`
  // ),
  // nationalCode: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddRefereesPage.nationalCode
  //   )}`
  // )
});

const StepOne = ({
  formData,
  setFormData,
  activeStepIndex,
  setActiveStepIndex,
}) => {
  const onSubmit = (values) => {
    if (values.birthDate instanceof DateObject)
      values.birthDate = values.birthDate.toString();
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
        name="name"
        formik={formik}
        placeholder={`${AddRefereesPage.namePlaceholder}`}
        label={`${AddRefereesPage.name}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />

      <Input
        name="family"
        formik={formik}
        placeholder={`${AddRefereesPage.familyPlaceholder}`}
        label={`${AddRefereesPage.family}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddRefereesPage.fatherNamePlaceholder}`}
        label={`${AddRefereesPage.fatherName}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <DateInput
        name="birthDate"
        formik={formik}
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddRefereesPage.birthDate}`}
        placeholder={`${AddRefereesPage.birthDate}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddRefereesPage.placeOfBirthPlaceholder}`}
        label={`${AddRefereesPage.placeOfBirth}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddRefereesPage.identityNoPlaceholder}`}
        label={`${AddRefereesPage.identityNo}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddRefereesPage.nationalCodePlaceholder}`}
        label={`${AddRefereesPage.nationalCode}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.next} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepOne;
