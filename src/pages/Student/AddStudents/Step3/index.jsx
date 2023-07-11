import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddStudentsPage, general } from "../../../../constants/strings/fa";

import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import TextAreaInput from "../../../../common/Input/TextAreaInput";

const gameExperienceOptions = [
  { id: 1, title: `${AddStudentsPage.oneToFourYears}` },
  { id: 2, title: `${AddStudentsPage.fiveToEightYears}` },
  { id: 3, title: `${AddStudentsPage.nineToTwelveYears}` },
  { id: 4, title: `${AddStudentsPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddStudentsPage.eighteenYearsAndOlder}` }
];
const coachingExperienceOptions = [
  { id: 1, title: `${AddStudentsPage.oneToFourYears}` },
  { id: 2, title: `${AddStudentsPage.fiveToEightYears}` },
  { id: 3, title: `${AddStudentsPage.nineToTwelveYears}` },
  { id: 4, title: `${AddStudentsPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddStudentsPage.eighteenYearsAndOlder}` }
];
const RefereeExperienceOptions = [
  { id: 1, title: `${AddStudentsPage.oneToFourYears}` },
  { id: 2, title: `${AddStudentsPage.fiveToEightYears}` },
  { id: 3, title: `${AddStudentsPage.nineToTwelveYears}` },
  { id: 4, title: `${AddStudentsPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddStudentsPage.eighteenYearsAndOlder}` }
];

const initialValues = {
  sportsField: "",
  gameExperience: "",
  records:""
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
        placeholder={`${AddStudentsPage.sportsFieldPlaceholder}`}
        label={`${AddStudentsPage.sportsField}`}
        type="number"
      />
       <SelectInput
        name="gameExperience"
        formik={formik}
        placeholder={`${AddStudentsPage.gameExperience}`}
        label={`${AddStudentsPage.gameExperience}`}
        selectOptions={gameExperienceOptions}
      />
       <SelectInput
        name="coachingExperience"
        formik={formik}
        placeholder={`${AddStudentsPage.coachingExperience}`}
        label={`${AddStudentsPage.coachingExperience}`}
        selectOptions={coachingExperienceOptions}
      />
       <SelectInput
        name="RefereeExperience"
        formik={formik}
        placeholder={`${AddStudentsPage.RefereeExperience}`}
        label={`${AddStudentsPage.RefereeExperience}`}
        selectOptions={RefereeExperienceOptions}
      />
     <TextAreaInput
     name="records"
     formik={formik}
     placeholder={`${AddStudentsPage.recordsPlaceholder}`}
     label={`${AddStudentsPage.records}`}
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
