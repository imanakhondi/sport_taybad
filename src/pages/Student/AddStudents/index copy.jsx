import { useFormik } from "formik";
import Input from "../../../common/Input/input";
import { AddStudentsPage } from "../../../constants/strings/fa";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import * as Yup from "yup";
import Stepper from "../../../common/Stepper";
import { createContext, useState } from "react";
export const FormContext = createContext();

const initialValues = {
  name: "",
  family: "",
  fatherName: "",
  birthDate: "",
  placeOfBirth: "",
  identityNo: "",
  nationalCode: "",
  mobile: "",
  tel: "",
  fieldOfStudy: "",
  email: "",
  homeAddress: "",
  workAddress: "",
  sportsField: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("نام ضروری است"),
  family: Yup.string().required("نام ضروری است"),
  fatherName: Yup.string().required("نام ضروری است"),
  birthDate: Yup.string().required("نام ضروری است"),
  placeOfBirth: Yup.string().required("نام ضروری است"),
  identityNo: Yup.string().required("نام ضروری است"),
  nationalCode: Yup.string().required("نام ضروری است"),
  mobile: Yup.string()
    .required("موبایل موجر ضروری است")
    .matches(/^[0-9]{11}$/, "موبایل نامعتبر است")
    .nullable(),
  tel: Yup.string().required("نام ضروری است"),
  fieldOfStudy: Yup.string().required("نام ضروری است"),
  email: Yup.string().required("نام ضروری است"),
  homeAddress: Yup.string().required("نام ضروری است"),
  workAddress: Yup.string().required("نام ضروری است"),
  sportsField: Yup.string().required("نام ضروری است"),
});

const AddStudents = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const onSubmit = (values) => {
    if (values.birthDate instanceof DateObject)
      values.birthDate = values.birthDate.toString();
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <FormContext.Provider value={{ activeStepIndex }}>
      <div className="container xl:max-w-7xl mx-auto py-10 font-IRANSansWeb">
        <div className="flex items-center justify-center h-20 rounded-2xl bg-navBgColor text-white">
          <h2>فرم ثبت اطلاعات دانشجویان</h2>
        </div>
        <Stepper />
        <div className=" xl:max-w-2xl mx-auto bg-navBgColor rounded-2xl p-5 mt-10">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-wrap max-w-6xl mx-auto justify-between"
          >
            <Input
              name="name"
              formik={formik}
              placeholder={`${AddStudentsPage.namePlaceholder}`}
              label={`${AddStudentsPage.name}`}
            />
            <Input
              name="family"
              formik={formik}
              placeholder={`${AddStudentsPage.familyPlaceholder}`}
              label={`${AddStudentsPage.family}`}
            />
            <Input
              name="fatherName"
              formik={formik}
              placeholder={`${AddStudentsPage.fatherNamePlaceholder}`}
              label={`${AddStudentsPage.fatherName}`}
            />
            <div className="flex flex-col mt-2 w-full md:ml-5 md:w-[300px] lg:w-[250px]">
              <label className="intro-x text-white mb-1 text-sm">
                تاریخ شروع اجاره
              </label>
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                value={formik.values.starttime}
                format="YYYY/MM/DD"
                name="birthDate"
                onChange={(event) => {
                  formik.setFieldValue("birthDate", event.toString());
                }}
                inputClass="custom-input"
              />
            </div>
            <Input
              name="placeOfBirth"
              formik={formik}
              placeholder={`${AddStudentsPage.placeOfBirthPlaceholder}`}
              label={`${AddStudentsPage.placeOfBirth}`}
            />
            <Input
              name="identityNo"
              formik={formik}
              placeholder={`${AddStudentsPage.identityNoPlaceholder}`}
              label={`${AddStudentsPage.identityNo}`}
              type="number"
            />
            <Input
              name="nationalCode"
              formik={formik}
              placeholder={`${AddStudentsPage.nationalCodePlaceholder}`}
              label={`${AddStudentsPage.nationalCode}`}
              type="number"
            />
            <Input
              name="mobile"
              formik={formik}
              placeholder={`${AddStudentsPage.mobilePlaceholder}`}
              label={`${AddStudentsPage.mobile}`}
              type="number"
            />
            <Input
              name="tel"
              formik={formik}
              placeholder={`${AddStudentsPage.telPlaceholder}`}
              label={`${AddStudentsPage.tel}`}
              type="number"
            />
            <Input
              name="fieldOfStudy"
              formik={formik}
              placeholder={`${AddStudentsPage.fieldOfStudyPlaceholder}`}
              label={`${AddStudentsPage.fieldOfStudy}`}
            />
            <Input
              name="email"
              formik={formik}
              placeholder={`${AddStudentsPage.emailPlaceholder}`}
              label={`${AddStudentsPage.email}`}
              type="email"
            />
            <Input
              name="sportsField"
              formik={formik}
              placeholder={`${AddStudentsPage.sportsFieldPlaceholder}`}
              label={`${AddStudentsPage.sportsField}`}
            />
            <div className="flex flex-col justify-center mt-2 w-full md:ml-5 md:w-full">
              <label className="intro-x text-white mb-1 text-sm">
                {AddStudentsPage.homeAddress}
              </label>
              <textarea
                name="address"
                className="w-full bg-transparent block text-sm shadow-sm border border-borderColor rounded-md mb-1 px-4 py-3 placeholder:text-white/20 placeholder:text-xs focus:ring-4 focus:ring-primaryColor focus:ring-opacity-20 focus:border-primaryColor focus:border-opacity-40 focus-visible:outline-0 intro-x"
                placeholder={`${AddStudentsPage.homeAddressPlaceholder}`}
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                {...formik.getFieldProps("address")}
              ></textarea>
            </div>
            <div className="flex flex-col justify-center mt-2 w-full md:ml-5 md:w-full">
              <label className="intro-x text-white mb-1 text-sm">
                {AddStudentsPage.workAddress}
              </label>
              <textarea
                name="address"
                className="w-full bg-transparent block text-sm shadow-sm border border-borderColor rounded-md mb-1 px-4 py-3 placeholder:text-white/20 placeholder:text-xs focus:ring-4 focus:ring-primaryColor focus:ring-opacity-20 focus:border-primaryColor focus:border-opacity-40 focus-visible:outline-0 intro-x"
                placeholder={`${AddStudentsPage.workAddressPlaceholder}`}
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                {...formik.getFieldProps("address")}
              ></textarea>
            </div>
            <button
              type="submit"
              // disabled={!formik.isValid}
              className=" outline-none w-[200px] border-none rounded text-white bg-secondaryColor mt-4 px-4 py-3 cursor-pointer disabled:border-[#999999] disabled:bg-[#cccccc] disabled:text-[#666666] disabled:cursor-not-allowed"
            >
              تائید
            </button>
          </form>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default AddStudents;
