import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddStudentsPage,
  general,
  validation,
} from "../../../../constants/strings/fa";

import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import TextAreaInput from "../../../../common/Input/TextAreaInput";
import { Student } from "../../../../http/entities";
import SubmitButton from "../../../../common/Input/SubmitButton";

const gameExperienceOptions = [
  { id: 1, title: `${AddStudentsPage.oneToFourYears}` },
  { id: 2, title: `${AddStudentsPage.fiveToEightYears}` },
  { id: 3, title: `${AddStudentsPage.nineToTwelveYears}` },
  { id: 4, title: `${AddStudentsPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddStudentsPage.eighteenYearsAndOlder}` },
];
const coachingExperienceOptions = [
  { id: 1, title: `${AddStudentsPage.oneToFourYears}` },
  { id: 2, title: `${AddStudentsPage.fiveToEightYears}` },
  { id: 3, title: `${AddStudentsPage.nineToTwelveYears}` },
  { id: 4, title: `${AddStudentsPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddStudentsPage.eighteenYearsAndOlder}` },
];
const RefereeExperienceOptions = [
  { id: 1, title: `${AddStudentsPage.oneToFourYears}` },
  { id: 2, title: `${AddStudentsPage.fiveToEightYears}` },
  { id: 3, title: `${AddStudentsPage.nineToTwelveYears}` },
  { id: 4, title: `${AddStudentsPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddStudentsPage.eighteenYearsAndOlder}` },
];

const initialValues = {
  sportsField: "",
  gameExperience: "",
  records: "",
};
const validationSchema = Yup.object({
  sportsField: Yup.string().required(
    `${validation.requiredMessage.replace(
      ":field",
      AddStudentsPage.sportsField
    )}`
  ),
});

const StepThree = ({ formData, setFormData }) => {
  const onSubmit = async (values) => {
    const student = new Student();

    const data = { ...formData, ...values };
    setFormData(data);
    const {
      name,
      family,
      fatherName,
      birthDate,
      placeOfBirth,
      identityNo,
      nationalCode,
      mobile,
      tel,
      fieldOfStudy,
      email,
      homeAddress,
      workAddress,
      sportsField,
      gameExperience,
      records,
    } = data;
    const result = await student.storeStudent(
      name,
      family,
      fatherName,
      birthDate,
      placeOfBirth,
      identityNo,
      nationalCode,
      mobile,
      tel,
      fieldOfStudy,
      email,
      homeAddress,
      workAddress,
      sportsField,
      gameExperience,
      records
    );

    if (result === null) {
      //show message failure

      return;
    }
    //show message success
    // setActiveStepIndex(activeStepIndex + 1);
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
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="gameExperience"
        formik={formik}
        placeholder={`${AddStudentsPage.gameExperience}`}
        label={`${AddStudentsPage.gameExperience}`}
        selectOptions={gameExperienceOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="coachingExperience"
        formik={formik}
        placeholder={`${AddStudentsPage.coachingExperience}`}
        label={`${AddStudentsPage.coachingExperience}`}
        selectOptions={coachingExperienceOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="RefereeExperience"
        formik={formik}
        placeholder={`${AddStudentsPage.RefereeExperience}`}
        label={`${AddStudentsPage.RefereeExperience}`}
        selectOptions={RefereeExperienceOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <TextAreaInput
        name="records"
        formik={formik}
        placeholder={`${AddStudentsPage.recordsPlaceholder}`}
        label={`${AddStudentsPage.records}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.add} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepThree;
