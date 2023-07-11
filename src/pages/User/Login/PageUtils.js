// import { useFormik } from "formik";
// import * as Yup from "yup";


// const initialValues = {
//     email: "",
//     password: "",
//   };
  
//   const validationSchema = Yup.object({
//     email: Yup.string(),
//     password: Yup.string().required(""),
//   });
// export class PageUtils {
//     constructor(){
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const formik = useFormik({
//             initialValues,
//             onSubmit,
//             validationSchema,
//             validateOnMount: true,
//           });
        
//     }

//     async onSubmit(values) {
//         try {
//             const { data } = await loginUser(values);
//             if (data._result !== "1") {
//                 setError(data._message);
//                 return;
//             }
//             setAuth(data);
//             setError(null);
//             navigate(`/${redirect}`);
//         } catch (error) {
//             console.log("darya");
//             console.log(error);
//         }
//     };
// }