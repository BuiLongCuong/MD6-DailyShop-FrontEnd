import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {updateForm} from "../../redux/service/productService";
import {getAllCategories} from "../../redux/service/categoryService";

export default function UpdateProduct() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const category = useSelector(({categories}) => {
        return categories.list
    })
    const product = useSelector(({products}) => {
        return products.productEdit;
    })
    const listPhoto = product.photo;
    useEffect(async () => {
        await dispatch(updateForm(id))
        dispatch(getAllCategories())
    }, [])
    return (
        <>
            <Formik initialValues={{product}} onSubmit={}>
                <Form>
                    <Field name={"productName"}></Field>
                    <Field name={"description"}></Field>
                    <Field name={"price"}></Field>
                    <Field name={"stockQuantity"}></Field>
                    <Field as={"select"} name={"category.id"}>
                        {
                            category.map(category => (
                                <>
                                    <option value={category.id}>{category.name}</option>
                                </>
                            ))
                        }
                    </Field>
                    <Field name={"photo.photoName"}></Field>
                    {
                        product && listPhoto.map(photo => {
                            return (
                                <>
                                    <img src={photo.photoName} alt=""/>
                                </>
                            )
                        })
                    }

                </Form>
            </Formik>
        </>
    )
}