import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddRefereesPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import CheckBoxInput from "../../../../common/Input/CheckBoxInput";
import { useState } from "react";
import AddMultiInput from "../../../../common/Input/AddMultiInput";
import { Referee } from "../../../../http/entities";
import SubmitButton from "../../../../common/Input/SubmitButton";

const experienceOptions = [
  { id: 1, title: `${AddRefereesPage.oneToFourYears}` },
  { id: 2, title: `${AddRefereesPage.fiveToEightYears}` },
  { id: 3, title: `${AddRefereesPage.nineToTwelveYears}` },
  { id: 4, title: `${AddRefereesPage.thirteenToSeventeenYears}` },
  { id: 5, title: `${AddRefereesPage.eighteenYearsAndOlder}` },
];
const refereesLevelsOptions = [
  { id: 1, title: `${AddRefereesPage.local}` },
  { id: 2, title: `${AddRefereesPage.city}` },
  { id: 3, title: `${AddRefereesPage.state}` },
  { id: 4, title: `${AddRefereesPage.country}` },
  { id: 5, title: `${AddRefereesPage.national}` },
  { id: 6, title: `${AddRefereesPage.asian}` },
  { id: 7, title: `${AddRefereesPage.global}` },
];

const initialValues = {
  sportsField: "",
  experience: "",
  latestValidRefereesCertificate: "",
  lastYearObtainingRefereesDegree: "",
  records: "",
  instructorsRefereesCourses: [],
  placeObtainingRefereesCertificates: [],
  refereesRecords: [],
  honors: [],
  executiveProfessionalRecords: [],
  workshopsAsParticipant: [],
  educationalWorkshopsAsTeacher: [],
  RefereesLevels: [],
};
const validationSchema = Yup.object({
  sportsField: Yup.string().required(
    `${validation.requiredMessage.replace(
      ":field",
      AddRefereesPage.sportsField
    )}`
  ),
});

const StepThree = ({ formData, setFormData }) => {
  const referee = new Referee();
  const [arrIrc, setArrIrc] = useState(
    initialValues.instructorsRefereesCourses
  );
  const [arrPorc, setArrPorc] = useState(
    initialValues.placeObtainingRefereesCertificates
  );
  const [arrRr, setArrRr] = useState(initialValues.refereesRecords);
  const [arrHo, setArrHo] = useState(initialValues.honors);
  const [arrEpr, setArrEpr] = useState(initialValues.workshopsAsParticipant);
  const [arrWap, setArrWap] = useState(initialValues.workshopsAsParticipant);
  const [arrEwat, setArrEwat] = useState(initialValues.workshopsAsParticipant);
  const [counter, setCounter] = useState(1);

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
      experience,
      latestValidRefereesCertificate,
      lastYearObtainingRefereesDegree,
      records,
      instructorsRefereesCourses,
      placeObtainingRefereesCertificates,
      refereesRecords,
      honors,
      executiveProfessionalRecords,
      workshopsAsParticipant,
      educationalWorkshopsAsTeacher,
      RefereesLevels,
    } = data;
    const result = await referee.storeReferee({
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
      latestValidRefereesCertificate,
      lastYearObtainingRefereesDegree,
      records,
      instructorsRefereesCourses,
      placeObtainingRefereesCertificates,
      refereesRecords,
      honors,
      executiveProfessionalRecords,
      workshopsAsParticipant,
      educationalWorkshopsAsTeacher,
      RefereesLevels,
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

    // const index =parseInt( e.target.id.split("").slice(-1)[0]);
    const index = parseInt(e.target.id[e.target.id.length - 1]);
    set(() => {
      // const newArr = s.slice();
      const newArr = [];
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
        placeholder={`${AddRefereesPage.sportsFieldPlaceholder}`}
        label={`${AddRefereesPage.sportsField}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SelectInput
        name="experience"
        formik={formik}
        placeholder={`${AddRefereesPage.experience}`}
        label={`${AddRefereesPage.experience}`}
        selectOptions={experienceOptions}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="latestValidRefereesCertificate"
        formik={formik}
        placeholder={`${AddRefereesPage.latestValidRefereesCertificatePlaceholder}`}
        label={`${AddRefereesPage.latestValidRefereesCertificate}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="lastYearObtainingRefereesDegree"
        formik={formik}
        placeholder={`${AddRefereesPage.lastYearObtainingRefereesDegreePlaceholder}`}
        label={`${AddRefereesPage.lastYearObtainingRefereesDegree}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <CheckBoxInput
        name="refereesLevels"
        formik={formik}
        label={`${AddRefereesPage.refereesLevels}`}
        checkBoxOptions={refereesLevelsOptions}
      />
      <AddMultiInput
        title={AddRefereesPage.instructorsRefereesCourses}
        onAddInput={(e, i = 1) => addInput(e, setArrIrc, i, "fieldIrc")}
        onChange={(e) =>
          handleChange(e, setArrIrc, "instructorsRefereesCourses")
        }
        arr={arrIrc}
        name="fieldIrc"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddRefereesPage.placeObtainingRefereesCertificates}
        onAddInput={(e, i = 1) => addInput(e, setArrPorc, i, "fieldPorc")}
        onChange={(e) =>
          handleChange(e, setArrPorc, "placeObtainingRefereesCertificates")
        }
        arr={arrPorc}
        name="fieldPorc"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddRefereesPage.refereesRecords}
        onAddInput={(e, i = 1) => addInput(e, setArrRr, i, "fieldRr")}
        onChange={(e) => handleChange(e, setArrRr, "refereesRecords")}
        arr={arrRr}
        name="fieldRr"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddRefereesPage.honors}
        onAddInput={(e, i = 1) => addInput(e, setArrHo, i, "fieldHo")}
        onChange={(e) => handleChange(e, setArrHo, "honors")}
        arr={arrHo}
        name="fieldHo"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddRefereesPage.executiveProfessionalRecords}
        onAddInput={(e, i = 1) => addInput(e, setArrEpr, i, "fieldEpr")}
        onChange={(e) =>
          handleChange(e, setArrEpr, "executiveProfessionalRecords")
        }
        arr={arrEpr}
        name="fieldEpr"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddRefereesPage.workshopsAsParticipant}
        onAddInput={(e, i = 1) => addInput(e, setArrWap, i, "fieldWap")}
        onChange={(e) => handleChange(e, setArrWap, "workshopsAsParticipant")}
        arr={arrWap}
        name="fieldWap"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <AddMultiInput
        title={AddRefereesPage.educationalWorkshopsAsTeacher}
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
