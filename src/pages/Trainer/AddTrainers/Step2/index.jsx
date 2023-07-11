import { useFormik } from "formik";
import Input from "../../../../common/Input/Input";
import { AddTrainersPage, general } from "../../../../constants/strings/fa";
import * as Yup from "yup";
import TextAreaInput from "../../../../common/Input/TextAreaInput";

const initialValues = {
  mobile: "",
  tel: "",
  fieldOfStudy: "",
  email: "",
  homeAddress: "",
  workAddress: "",
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

const StepTwo = ({
  formData,
  setFormData,
  activeStepIndex,
  setActiveStepIndex,
}) => {
  // const formData=useSelector(state=>state.formReducer.formData)
  // const dispatch = useDispatch();

  const onSubmit = (values) => {
    // const data = { ...formData, ...values };
    // dispatch(stepOne(data));
    const data = { ...formData, ...values };
    setFormData(data);
    setActiveStepIndex(activeStepIndex + 1);
    console.log("imaaaaaaaaaaaaan", formData, activeStepIndex);
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
        name="mobile"
        formik={formik}
        placeholder={`${AddTrainersPage.mobilePlaceholder}`}
        label={`${AddTrainersPage.mobile}`}
        type="number"
      />
      <Input
        name="tel"
        formik={formik}
        placeholder={`${AddTrainersPage.telPlaceholder}`}
        label={`${AddTrainersPage.tel}`}
        type="number"
      />
      <Input
        name="fieldOfStudy"
        formik={formik}
        placeholder={`${AddTrainersPage.fieldOfStudyPlaceholder}`}
        label={`${AddTrainersPage.fieldOfStudy}`}
      />
      <Input
        name="email"
        formik={formik}
        placeholder={`${AddTrainersPage.emailPlaceholder}`}
        label={`${AddTrainersPage.email}`}
        type="email"
      />
      <TextAreaInput
        name="homeAddress"
        formik={formik}
        placeholder={`${AddTrainersPage.homeAddressPlaceholder}`}
        label={`${AddTrainersPage.homeAddress}`}
      />
      <TextAreaInput
        name="workAddress"
        formik={formik}
        placeholder={`${AddTrainersPage.workAddressPlaceholder}`}
        label={`${AddTrainersPage.workAddress}`}
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

export default StepTwo;
