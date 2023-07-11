import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DateInput = ({ value, onChange, label }) => {
  return (
    <div className="flex flex-col mt-2 w-full md:ml-5 md:w-[300px] lg:w-[250px]">
      <label className="intro-x text-primaryColor mb-1 text-sm">{label}</label>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        //   value={formik.values.starttime}
        value={value}
        format="YYYY/MM/DD"
        name="birthDate"
        onChange={onChange}
        inputClass="custom-input"
      />
    </div>
  );
};

export default DateInput;
