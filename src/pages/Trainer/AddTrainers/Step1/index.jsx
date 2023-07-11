import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddTrainersPage, general } from "../../../../constants/strings/fa";
import DateObject from "react-date-object";
import * as Yup from "yup";
import DateInput from "../../../../common/Input/DateInput";
import { useEffect, useState } from "react";

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
        placeholder={`${AddTrainersPage.namePlaceholder}`}
        label={`${AddTrainersPage.name}`}
      />

      <Input
        name="family"
        formik={formik}
        placeholder={`${AddTrainersPage.familyPlaceholder}`}
        label={`${AddTrainersPage.family}`}
      />
      <Input
        name="fatherName"
        formik={formik}
        placeholder={`${AddTrainersPage.fatherNamePlaceholder}`}
        label={`${AddTrainersPage.fatherName}`}
      />
      <DateInput
        name="birthDate"
        value={formik.values.birthDate}
        onChange={(event) => {
          formik.setFieldValue("birthDate", event.toString());
        }}
        label={`${AddTrainersPage.birthDate}`}
      />
      <Input
        name="placeOfBirth"
        formik={formik}
        placeholder={`${AddTrainersPage.placeOfBirthPlaceholder}`}
        label={`${AddTrainersPage.placeOfBirth}`}
      />
      <Input
        name="identityNo"
        formik={formik}
        placeholder={`${AddTrainersPage.identityNoPlaceholder}`}
        label={`${AddTrainersPage.identityNo}`}
        type="number"
      />
      <Input
        name="nationalCode"
        formik={formik}
        placeholder={`${AddTrainersPage.nationalCodePlaceholder}`}
        label={`${AddTrainersPage.nationalCode}`}
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
