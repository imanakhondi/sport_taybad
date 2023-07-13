import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddStudentsPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import DateObject from "react-date-object";

import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import DateInput from "../../../../common/Input/DateInput";
import SubmitButton from "../../../../common/Input/SubmitButton";

const bloodTypeOptions = [
  { id: 1, title: "A+" },
  { id: 2, title: "A-" },
  { id: 3, title: "B+" },
  { id: 4, title: "B-" },
  { id: 5, title: "AB+" },
  { id: 6, title: "AB-" },
  { id: 7, title: "O+" },
  { id: 8, title: "O-" },
];
const gradeOptions = [
  { id: 1, title: `${AddStudentsPage.diploma}` },
  { id: 2, title: `${AddStudentsPage.AssociateDegree}` },
  { id: 3, title: `${AddStudentsPage.bachelorDegree}` },
  { id: 4, title: `${AddStudentsPage.masterDegree}` },
  { id: 5, title: `${AddStudentsPage.PhD}` },
];

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
  //   `${validation.requiredMessage.replace(":field", AddStudentsPage.name)}`
  // ),
  // family: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddStudentsPage.family)}`
  // ),
  // fatherName: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.fatherName
  //   )}`
  // ),
  // birthDate: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddStudentsPage.birthDate)}`
  // ),
  // placeOfBirth: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.placeOfBirth
  //   )}`
  // ),
  // identityNo: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.identityNo
  //   )}`
  // ),
  // nationalCode: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddStudentsPage.nationalCode
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
    // dispatch(stepZero(data));
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
        placeholder={`${AddStudentsPage.namePlaceholder}`}
        label={`${AddStudentsPage.name}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="family"
        formik={formik}
        placeholder={`${AddStudentsPage.familyPlaceholder}`}
        label={`${AddStudentsPage.family}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddStudentsPage.fatherNamePlaceholder}`}
        label={`${AddStudentsPage.fatherName}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <DateInput
        name="birthDate"
        formik={formik}
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddStudentsPage.birthDate}`}
        placeholder={`${AddStudentsPage.birthDate}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddStudentsPage.placeOfBirthPlaceholder}`}
        label={`${AddStudentsPage.placeOfBirth}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddStudentsPage.identityNoPlaceholder}`}
        label={`${AddStudentsPage.identityNo}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddStudentsPage.nationalCodePlaceholder}`}
        label={`${AddStudentsPage.nationalCode}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="grade"
        formik={formik}
        placeholder={`${AddStudentsPage.grade}`}
        label={`${AddStudentsPage.grade}`}
        selectOptions={gradeOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="bloodType"
        formik={formik}
        placeholder={`${AddStudentsPage.bloodType}`}
        label={`${AddStudentsPage.bloodType}`}
        selectOptions={bloodTypeOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.next} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepOne;
