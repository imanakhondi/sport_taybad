import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddManagersPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import TextAreaInput from "../../../../common/Input/TextAreaInput";
import CheckBoxInput from "../../../../common/Input/CheckBoxInput";
import { Manager } from "../../../../http/entities";
import SubmitButton from "../../../../common/Input/SubmitButton";

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
  sportsField: Yup.string().required(
    `${validation.requiredMessage.replace(
      ":field",
      AddManagersPage.sportsField
    )}`
  ),
});

const StepThree = ({
  formData,
  setFormData,
  activeStepIndex,
  setActiveStepIndex,
}) => {
  const manager = new Manager();

  const onSubmit = async (values) => {
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
      managementExperience,
      nameOfClub,
      managementLevels,
      honors,
    } = data;
    const result = await manager.storeManager(
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
      managementExperience,
      nameOfClub,
      managementLevels,
      honors
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
        placeholder={`${AddManagersPage.sportsFieldPlaceholder}`}
        label={`${AddManagersPage.sportsField}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="managementExperience"
        formik={formik}
        placeholder={`${AddManagersPage.managementExperience}`}
        label={`${AddManagersPage.managementExperience}`}
        selectOptions={managementExperienceOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="nameOfClub"
        formik={formik}
        placeholder={`${AddManagersPage.nameOfClubPlaceholder}`}
        label={`${AddManagersPage.nameOfClub}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <CheckBoxInput
        name="managementLevels"
        formik={formik}
        label={`${AddManagersPage.managementLevels}`}
        checkBoxOptions={managementLevelsOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />

      <TextAreaInput
        name="honors"
        formik={formik}
        placeholder={`${AddManagersPage.honorsPlaceholder}`}
        label={`${AddManagersPage.honors}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.add} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

export default StepThree;
