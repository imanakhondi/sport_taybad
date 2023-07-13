import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddManagersPage,
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
  { id: 1, title: `${AddManagersPage.diploma}` },
  { id: 2, title: `${AddManagersPage.AssociateDegree}` },
  { id: 3, title: `${AddManagersPage.bachelorDegree}` },
  { id: 4, title: `${AddManagersPage.masterDegree}` },
  { id: 5, title: `${AddManagersPage.PhD}` },
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
        placeholder={`${AddManagersPage.namePlaceholder}`}
        label={`${AddManagersPage.name}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />

      <Input
        name="family"
        formik={formik}
        placeholder={`${AddManagersPage.familyPlaceholder}`}
        label={`${AddManagersPage.family}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddManagersPage.fatherNamePlaceholder}`}
        label={`${AddManagersPage.fatherName}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <DateInput
        name="birthDate"
        formik={formik}
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddManagersPage.birthDate}`}
        placeholder={`${AddManagersPage.birthDate}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddManagersPage.placeOfBirthPlaceholder}`}
        label={`${AddManagersPage.placeOfBirth}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddManagersPage.identityNoPlaceholder}`}
        label={`${AddManagersPage.identityNo}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddManagersPage.nationalCodePlaceholder}`}
        label={`${AddManagersPage.nationalCode}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="grade"
        formik={formik}
        placeholder={`${AddManagersPage.grade}`}
        label={`${AddManagersPage.grade}`}
        selectOptions={gradeOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="bloodType"
        formik={formik}
        placeholder={`${AddManagersPage.bloodType}`}
        label={`${AddManagersPage.bloodType}`}
        selectOptions={bloodTypeOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.next} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepOne;
