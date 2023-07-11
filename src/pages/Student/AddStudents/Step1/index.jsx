import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddStudentsPage, general } from "../../../../constants/strings/fa";
import DateObject from "react-date-object";

import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import DateInput from "../../../../common/Input/DateInput";

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
  name: Yup.string(),
  //   family: Yup.string().required("نام ضروری است"),
  //   fatherName: Yup.string().required("نام ضروری است"),
  //   birthDate: Yup.string().required("نام ضروری است"),
  //   placeOfBirth: Yup.string().required("نام ضروری است"),
  //   identityNo: Yup.string().required("نام ضروری است"),
  //   nationalCode: Yup.string().required("نام ضروری است"),
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
      />
      <Input
        name="family"
        formik={formik}
        placeholder={`${AddStudentsPage.familyPlaceholder}`}
        label={`${AddStudentsPage.family}`}
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddStudentsPage.fatherNamePlaceholder}`}
        label={`${AddStudentsPage.fatherName}`}
      />
      <DateInput
        name="birthDate"
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddStudentsPage.birthDate}`}
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddStudentsPage.placeOfBirthPlaceholder}`}
        label={`${AddStudentsPage.placeOfBirth}`}
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddStudentsPage.identityNoPlaceholder}`}
        label={`${AddStudentsPage.identityNo}`}
        type="number"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddStudentsPage.nationalCodePlaceholder}`}
        label={`${AddStudentsPage.nationalCode}`}
        type="number"
      />
      <SelectInput
        name="grade"
        formik={formik}
        placeholder={`${AddStudentsPage.grade}`}
        label={`${AddStudentsPage.grade}`}
        selectOptions={gradeOptions}
      />
      <SelectInput
        name="bloodType"
        formik={formik}
        placeholder={`${AddStudentsPage.bloodType}`}
        label={`${AddStudentsPage.bloodType}`}
        selectOptions={bloodTypeOptions}
      />

      <button
        type="submit"
        // disabled={!formik.isValid}
        className=" outline-none w-full border-none rounded text-white bg-secondaryColor my-8 px-4 py-3 cursor-pointer disabled:border-[#999999] disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed"
      >
        {general.next}
      </button>
    </form>
  );
};

export default StepOne;
