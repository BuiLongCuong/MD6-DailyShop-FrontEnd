import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Update, updateForm} from "../../redux/service/productService.js";
import {Field, Form, Formik} from "formik";

export default function UpdateProduct() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        console.log(products.productEdit)
        return products.productEdit
    })
    const {id} = useParams();
    useEffect(() => {
        dispatch(updateForm(id))
    }, []);

    const Edit = (value)=>{
        dispatch(Update(value)).then(()=>{
            navigate("/products/home")
        })

    }
    return (
        <>
            <h1>EDIT PRODUCT </h1>
            <Formik initialValues={product} onSubmit={Edit}
                    enableReinitialize={true}>
                <Form>
                    {/*<Field name={"id"}></Field>*/}
                    <Field name={"productName"} placeholder={"Enter ProductName"}></Field>
                    <Field name={"description"} placeholder={"Enter Description"}></Field>

                    <Field name={"price"} placeholder={" Enter Price"}></Field>
                    <Field name={"stockQuantity"} placeholder={" Enter StockQuantity"}></Field>
                    <Field name={"category"} placeholder={" Enter Category"}/>
                    <Field name={"photo"} placeholder={" Enter Photo"}/>
                    <Field name={"supplier"} placeholder={" Enter Supplier"}/>

                    <button type={"submit"} >Sửa</button>
                </Form>
            </Formik>
        </>

    )

}