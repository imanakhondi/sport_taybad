import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddRefereesPage, general } from "../../../../constants/strings/fa";
import DateObject from "react-date-object";
import * as Yup from "yup";
import DateInput from "../../../../common/Input/DateInput";

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
        placeholder={`${AddRefereesPage.namePlaceholder}`}
        label={`${AddRefereesPage.name}`}
      />

      <Input
        name="family"
        formik={formik}
        placeholder={`${AddRefereesPage.familyPlaceholder}`}
        label={`${AddRefereesPage.family}`}
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddRefereesPage.fatherNamePlaceholder}`}
        label={`${AddRefereesPage.fatherName}`}
      />
      <DateInput
        name="birthDate"
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddRefereesPage.birthDate}`}
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddRefereesPage.placeOfBirthPlaceholder}`}
        label={`${AddRefereesPage.placeOfBirth}`}
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddRefereesPage.identityNoPlaceholder}`}
        label={`${AddRefereesPage.identityNo}`}
        type="number"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddRefereesPage.nationalCodePlaceholder}`}
        label={`${AddRefereesPage.nationalCode}`}
        type="number"
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
