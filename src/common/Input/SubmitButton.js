import { general } from "../../constants/strings/fa";

const SubmitButton = ({ disabled = "", submit = `${general.submit}` }) => {
  return (
    <button
      type="submit"
      // disabled={!formik.isValid}
      disabled={disabled}
      className="w-full bg-gradient-to-r from-secondaryColor to-[#040F75] rounded-xl py-3 mx-auto px-5 mt-3 dark:text-white"
    >
      {/* {general.submit} */}
      {submit}
    </button>
  );
};

export default SubmitButton;
