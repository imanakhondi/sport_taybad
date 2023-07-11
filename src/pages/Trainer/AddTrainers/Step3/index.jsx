import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddTrainersPage, general } from "../../../../constants/strings/fa";
import * as Yup from "yup";
import SelectInput from "../../../../common/Input/SelectInput";
import CheckBoxInput from "../../../../common/Input/CheckBoxInput";
import { useState } from "react";
import AddMultiInput from "../../../../common/Input/AddMultiInput";

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

    const index =parseInt( e.target.id.split("").slice(-1)[0]);
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
        type="number"
      />
      <SelectInput
        name="experience"
        formik={formik}
        placeholder={`${AddTrainersPage.experience}`}
        label={`${AddTrainersPage.experience}`}
        selectOptions={experienceOptions}
      />
      <Input
        name="latestValidCoachingCertificate"
        formik={formik}
        placeholder={`${AddTrainersPage.latestValidCoachingCertificatePlaceholder}`}
        label={`${AddTrainersPage.latestValidCoachingCertificate}`}
      />
      <Input
        name="lastYearObtainingCoachingDegree"
        formik={formik}
        placeholder={`${AddTrainersPage.lastYearObtainingCoachingDegreePlaceholder}`}
        label={`${AddTrainersPage.lastYearObtainingCoachingDegree}`}
        type="number"
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
      />
      <AddMultiInput
        title={AddTrainersPage.placeObtainingCoachingCertificates}
        onAddInput={(e, i = 1) => addInput(e, setArrPcc, i, "fieldPcc")}
        onChange={(e) =>
          handleChange(e, setArrPcc, "placeObtainingCoachingCertificates")
        }
        arr={arrPcc}
        name="fieldPcc"
      />
      <AddMultiInput
        title={AddTrainersPage.coachingRecords}
        onAddInput={(e, i = 1) => addInput(e, setArrCr, i, "fieldCr")}
        onChange={(e) => handleChange(e, setArrCr, "coachingRecords")}
        arr={arrCr}
        name="fieldCr"
      />
      <AddMultiInput
        title={AddTrainersPage.honors}
        onAddInput={(e, i = 1) => addInput(e, setArrHo, i, "fieldHo")}
        onChange={(e) => handleChange(e, setArrHo, "honors")}
        arr={arrHo}
        name="fieldHo"
      />
      <AddMultiInput
        title={AddTrainersPage.executiveProfessionalRecords}
        onAddInput={(e, i = 1) => addInput(e, setArrEpr, i, "fieldEpr")}
        onChange={(e) =>
          handleChange(e, setArrEpr, "executiveProfessionalRecords")
        }
        arr={arrEpr}
        name="fieldEpr"
      />
      <AddMultiInput
        title={AddTrainersPage.workshopsAsParticipant}
        onAddInput={(e, i = 1) => addInput(e, setArrWap, i, "fieldWap")}
        onChange={(e) => handleChange(e, setArrWap, "workshopsAsParticipant")}
        arr={arrWap}
        name="fieldWap"
      />
      <AddMultiInput
        title={AddTrainersPage.educationalWorkshopsAsTeacher}
        onAddInput={(e, i = 1) => addInput(e, setArrEwat, i, "fieldEwat")}
        onChange={(e) =>
          handleChange(e, setArrEwat, "educationalWorkshopsAsTeacher")
        }
        arr={arrEwat}
        name="fieldEwat"
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
