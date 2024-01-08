import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {add} from "../../redux/service/productService.js";

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Create =  value => {
        dispatch(add(value)).then(()=>{
            navigate("/products/home")
        })
    }


    return (
        <>
            <h1> ADD PRODUCT </h1>
            <Formik initialValues={{

                productName: '',
                description: '',
                price: '',
                stockQuantity:'',
                category: '',
                photo:'',
                supplier:''

            }}

                    onSubmit={Create}
            >
                <Form>
                    {/*<Field name={"id"} placeholder={"Id"}/>*/}
                    <Field name={"productName"} placeholder={"Enter ProductName"}/>
                    <Field name={"description"} placeholder={"Enter Description"}/>

                    <Field name={"price"} placeholder={" Enter Price"}/>
                    <Field name={"stockQuantity"} placeholder={" Enter StockQuantity"}/>
                    <Field name={"category"} placeholder={" Enter Category"}/>
                    <Field name={"photo"} placeholder={" Enter Photo"}/>
                    <Field name={"supplier"} placeholder={" Enter Supplier"}/>

                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddProduct;