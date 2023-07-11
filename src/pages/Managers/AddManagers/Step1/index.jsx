import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddManagersPage, general } from "../../../../constants/strings/fa";
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
      />
      
      <Input
        name="family"
        formik={formik}
        placeholder={`${AddManagersPage.familyPlaceholder}`}
        label={`${AddManagersPage.family}`}
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddManagersPage.fatherNamePlaceholder}`}
        label={`${AddManagersPage.fatherName}`}
      />
      <DateInput
        name="birthDate"
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddManagersPage.birthDate}`}
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddManagersPage.placeOfBirthPlaceholder}`}
        label={`${AddManagersPage.placeOfBirth}`}
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddManagersPage.identityNoPlaceholder}`}
        label={`${AddManagersPage.identityNo}`}
        type="number"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddManagersPage.nationalCodePlaceholder}`}
        label={`${AddManagersPage.nationalCode}`}
        type="number"
      />
      <SelectInput
        name="grade"
        formik={formik}
        placeholder={`${AddManagersPage.grade}`}
        label={`${AddManagersPage.grade}`}
        selectOptions={gradeOptions}
      />
      <SelectInput
        name="bloodType"
        formik={formik}
        placeholder={`${AddManagersPage.bloodType}`}
        label={`${AddManagersPage.bloodType}`}
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
