import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddManagersPage, general } from "../../../../constants/strings/fa";

import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import TextAreaInput from "../../../../common/Input/TextAreaInput";
import CheckBoxInput from "../../../../common/Input/CheckBoxInput";

const managementExperienceOptions = [
  { id: 1, title: `${AddManagersPage.oneToFourYears}` },
  { id: 2, title: `${AddManagersPage.fiveToEightYears}` },
  { id: 3, title: `${AddManagersPage.nineToTwelveYears}` },
  { id: 4, title: `${AddManagersPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddManagersPage.eighteenYearsAndOlder}` },
];
const managementLevelsOptions = [
  { id: 1, title: `${AddManagersPage.city}` },
  { id: 2, title: `${AddManagersPage.state}` },
  { id: 3, title: `${AddManagersPage.country}` },
  { id: 4, title: `${AddManagersPage.national}` },
];

const initialValues = {
  sportsField: "",
  managementExperience: "",
  nameOfClub: "",
  managementLevels: [],
  honors: "",
};
const validationSchema = Yup.object({
  name: Yup.string(),
  // family: Yup.string().required("نام ضروری است"),
  // fatherName: Yup.string().required("نام ضروری است"),
  // birthDate: Yup.string().required("نام ضروری است"),
  // placeOfBirth: Yup.string().required("نام ضروری است"),
  // identityNo: Yup.string().required("نام ضروری است"),
  // nationalCode: Yup.string().required("نام ضروری است"),
});

const StepThree = ({
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
        name="sportsField"
        formik={formik}
        placeholder={`${AddManagersPage.sportsFieldPlaceholder}`}
        label={`${AddManagersPage.sportsField}`}
      />
      <SelectInput
        name="managementExperience"
        formik={formik}
        placeholder={`${AddManagersPage.managementExperience}`}
        label={`${AddManagersPage.managementExperience}`}
        selectOptions={managementExperienceOptions}
      />
      <Input
        name="nameOfClub"
        formik={formik}
        placeholder={`${AddManagersPage.nameOfClubPlaceholder}`}
        label={`${AddManagersPage.nameOfClub}`}
      />
      <CheckBoxInput
        name="managementLevels"
        formik={formik}
        label={`${AddManagersPage.managementLevels}`}
        checkBoxOptions={managementLevelsOptions}
      />

      <TextAreaInput
        name="honors"
        formik={formik}
        placeholder={`${AddManagersPage.honorsPlaceholder}`}
        label={`${AddManagersPage.honors}`}
      />

      <button
        type="submit"
        // disabled={!formik.isValid}
        className=" outline-none w-full border-none rounded text-white bg-secondaryColor my-8 px-4 py-3 cursor-pointer disabled:border-[#999999] disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed"
      >
        {general.add}
      </button>
    </form>
  );
};

export default StepThree;
