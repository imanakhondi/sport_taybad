import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import {
  AddTrainersPage,
  general,
  validation,
} from "../../../../constants/strings/fa";
import DateObject from "react-date-object";
import * as Yup from "yup";
import DateInput from "../../../../common/Input/DateInput";
import SubmitButton from "../../../../common/Input/SubmitButton";

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
  // name: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddTrainersPage.name)}`
  // ),
  // family: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddTrainersPage.family)}`
  // ),
  // fatherName: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.fatherName
  //   )}`
  // ),
  // birthDate: Yup.string().required(
  //   `${validation.requiredMessage.replace(":field", AddTrainersPage.birthDate)}`
  // ),
  // placeOfBirth: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.placeOfBirth
  //   )}`
  // ),
  // identityNo: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.identityNo
  //   )}`
  // ),
  // nationalCode: Yup.string().required(
  //   `${validation.requiredMessage.replace(
  //     ":field",
  //     AddTrainersPage.nationalCode
  //   )}`
  // )
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
        placeholder={`${AddTrainersPage.namePlaceholder}`}
        label={`${AddTrainersPage.name}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />

      <Input
        name="family"
        formik={formik}
        placeholder={`${AddTrainersPage.familyPlaceholder}`}
        label={`${AddTrainersPage.family}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddTrainersPage.fatherNamePlaceholder}`}
        label={`${AddTrainersPage.fatherName}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <DateInput
        name="birthDate"
        formik={formik}
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddTrainersPage.birthDate}`}
        placeholder={`${AddTrainersPage.birthDate}`}
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddTrainersPage.placeOfBirthPlaceholder}`}
        label={`${AddTrainersPage.placeOfBirth}`}
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddTrainersPage.identityNoPlaceholder}`}
        label={`${AddTrainersPage.identityNo}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddTrainersPage.nationalCodePlaceholder}`}
        label={`${AddTrainersPage.nationalCode}`}
        type="number"
        customStyleInput=" placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
      />
      <SubmitButton disabled="" submit={general.next} />
      {/* disabled={!formik.isValid} */}
    </form>
  );
};

// const StepOne=()=>{

//   const inputArr = [
//     {
//       type: "text",
//       id: 1,
//       value: ""
//     }
//   ];

//   const [arr, setArrIcc] = useState(inputArr);

//   const addInput = () => {
//     setArrIcc(s => {
//       return [
//         ...s,
//         {
//           type: "text",
//           value: ""
//         }
//       ];
//     });
//   };

//   const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArrIcc(s => {
//       const newArr = s.slice();
//       newArr[index].value = e.target.value;

//       return newArr;
//     });
//   };

//   return (
//     <div>
//       <button onClick={addInput}>+</button>
//       {arr.map((item, i) => {
//         return (
//           <input
//             onChange={handleChange}
//             value={item.value}
//             id={i}
//             type={item.type}
//             size="40"
//           />
//         );
//       })}
//     </div>
//   );
// // }

export default StepOne;
