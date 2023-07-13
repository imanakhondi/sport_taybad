import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddTrainersPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import CheckBoxInput from "../../../../common/Input/CheckBoxInput";
import { useState } from "react";
import AddMultiInput from "../../../../common/Input/AddMultiInput";
import { Trainer } from "../../../../http/entities/Trainer";
import SubmitButton from "../../../../common/Input/SubmitButton";

const experienceOptions = [
  { id: 1, title: `${AddTrainersPage.oneToFourYears}` },
  { id: 2, title: `${AddTrainersPage.fiveToEightYears}` },
  { id: 3, title: `${AddTrainersPage.nineToTwelveYears}` },
  { id: 4, title: `${AddTrainersPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddTrainersPage.eighteenYearsAndOlder}` },
];
const coachingLevelsOptions = [
  { id: 1, title: `${AddTrainersPage.local}` },
  { id: 2, title: `${AddTrainersPage.city}` },
  { id: 3, title: `${AddTrainersPage.state}` },
  { id: 4, title: `${AddTrainersPage.country}` },
  { id: 5, title: `${AddTrainersPage.national}` },
  { id: 6, title: `${AddTrainersPage.asian}` },
  { id: 7, title: `${AddTrainersPage.global}` },
];

const initialValues = {
  sportsField: "",
  experience: "",
  latestValidCoachingCertificate: "",
  lastYearObtainingCoachingDegree: "",
  records: "",
  instructorsCoachingCourses: [],
  placeObtainingCoachingCertificates: [],
  coachingRecords: [],
  honors: [],
  executiveProfessionalRecords: [],
  workshopsAsParticipant: [],
  educationalWorkshopsAsTeacher: [],
  coachingLevels: [],
};
const validationSchema = Yup.object({
  sportsField: Yup.string().required(
    `${validation.requiredMessage.replace(
      ":field",
      AddTrainersPage.sportsField
    )}`
  ),
});

const StepThree = ({
  formData,
  setFormData,
  activeStepIndex,
  setActiveStepIndex,
}) => {
  const [arrIcc, setArrIcc] = useState(
    initialValues.instructorsCoachingCourses
  );
  const [arrPcc, setArrPcc] = useState(
    initialValues.placeObtainingCoachingCertificates
  );
  const [arrCr, setArrCr] = useState(initialValues.coachingRecords);
  const [arrHo, setArrHo] = useState(initialValues.honors);
  const [arrEpr, setArrEpr] = useState(initialValues.workshopsAsParticipant);
  const [arrWap, setArrWap] = useState(initialValues.workshopsAsParticipant);
  const [arrEwat, setArrEwat] = useState(initialValues.workshopsAsParticipant);
  const [counter, setCounter] = useState(1);

  const onSubmit = async (values) => {
    const trainer = new Trainer();

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
      experience,
      latestValidCoachingCertificate,
      lastYearObtainingCoachingDegree,
      records,
      instructorsCoachingCourses,
      placeObtainingCoachingCertificates,
      coachingRecords,
      honors,
      executiveProfessionalRecords,
      workshopsAsParticipant,
      educationalWorkshopsAsTeacher,
      coachingLevels,
    } = data;
    const result = await trainer.storeTrainer({
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
      experience,
      latestValidCoachingCertificate,
      lastYearObtainingCoachingDegree,
      records,
      instructorsCoachingCourses,
      placeObtainingCoachingCertificates,
      coachingRecords,
      honors,
      executiveProfessionalRecords,
      workshopsAsParticipant,
      educationalWorkshopsAsTeacher,
      coachingLevels,
    });
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

  const addInput = (e, set, i, name) => {
    e.preventDefault();
    if (i > 4) return;
    set((s) => {
      return [
        ...s,
        {
          // id: counter,
          name: name + `${counter}`,
          value: "",
        },
      ];
    });
    setCounter(counter + 1);
  };

  const handleChange = (e, set, setValue) => {
    e.preventDefault();

    const index = parseInt(e.target.id.split("").slice(-1)[0]);
    set((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      formik.setFieldValue(setValue, newArr);
      return newArr;
    });
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-wrap max-w-6xl mx-auto justify-between"
    >
      <Input
        name="sportsField"
        formik={formik}
        placeholder={`${AddTrainersPage.sportsFieldPlaceholder}`}
        label={`${AddTrainersPage.sportsField}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="experience"
        formik={formik}
        placeholder={`${AddTrainersPage.experience}`}
        label={`${AddTrainersPage.experience}`}
        selectOptions={experienceOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="latestValidCoachingCertificate"
        formik={formik}
        placeholder={`${AddTrainersPage.latestValidCoachingCertificatePlaceholder}`}
        label={`${AddTrainersPage.latestValidCoachingCertificate}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="lastYearObtainingCoachingDegree"
        formik={formik}
        placeholder={`${AddTrainersPage.lastYearObtainingCoachingDegreePlaceholder}`}
        label={`${AddTrainersPage.lastYearObtainingCoachingDegree}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <CheckBoxInput
        name="coachingLevels"
        formik={formik}
        label={`${AddTrainersPage.coachingLevels}`}
        checkBoxOptions={coachingLevelsOptions}
      />
      <AddMultiInput
        title={AddTrainersPage.instructorsCoachingCourses}
        onAddInput={(e, i = 1) => addInput(e, setArrIcc, i, "fieldIcc")}
        onChange={(e) =>
          handleChange(e, setArrIcc, "instructorsCoachingCourses")
        }
        arr={arrIcc}
        name="fieldIcc"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddTrainersPage.placeObtainingCoachingCertificates}
        onAddInput={(e, i = 1) => addInput(e, setArrPcc, i, "fieldPcc")}
        onChange={(e) =>
          handleChange(e, setArrPcc, "placeObtainingCoachingCertificates")
        }
        arr={arrPcc}
        name="fieldPcc"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddTrainersPage.coachingRecords}
        onAddInput={(e, i = 1) => addInput(e, setArrCr, i, "fieldCr")}
        onChange={(e) => handleChange(e, setArrCr, "coachingRecords")}
        arr={arrCr}
        name="fieldCr"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddTrainersPage.honors}
        onAddInput={(e, i = 1) => addInput(e, setArrHo, i, "fieldHo")}
        onChange={(e) => handleChange(e, setArrHo, "honors")}
        arr={arrHo}
        name="fieldHo"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddTrainersPage.executiveProfessionalRecords}
        onAddInput={(e, i = 1) => addInput(e, setArrEpr, i, "fieldEpr")}
        onChange={(e) =>
          handleChange(e, setArrEpr, "executiveProfessionalRecords")
        }
        arr={arrEpr}
        name="fieldEpr"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddTrainersPage.workshopsAsParticipant}
        onAddInput={(e, i = 1) => addInput(e, setArrWap, i, "fieldWap")}
        onChange={(e) => handleChange(e, setArrWap, "workshopsAsParticipant")}
        arr={arrWap}
        name="fieldWap"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddTrainersPage.educationalWorkshopsAsTeacher}
        onAddInput={(e, i = 1) => addInput(e, setArrEwat, i, "fieldEwat")}
        onChange={(e) =>
          handleChange(e, setArrEwat, "educationalWorkshopsAsTeacher")
        }
        arr={arrEwat}
        name="fieldEwat"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.add} />
      {/* disabled={!formik.isValid} */}
    
    </form>
  );
};

export default StepThree;
