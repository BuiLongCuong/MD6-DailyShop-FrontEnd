import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Delete, getAll, search} from "../../redux/service/productService.js";
import {Field, Form, Formik} from "formik";

export default function ListProduct(){
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    });
    useEffect(() => {
        dispatch(getAll());
    }, [])
    const remove = (id) => {
        dispatch(Delete(id))
    }
    const searchName = (value) => {
        dispatch(search(value.nameSearch))
    }

    return (
        <>
            <h1>List Product</h1>
            <h1>Store owner : </h1>
            <Formik initialValues={
                {
                    nameSearch: ""
                }
            }
                    onSubmit={searchName}>
                <Form>
                    <Field name={"nameSearch"}></Field>
                    <button type={"submit"}>Search</button>
                </Form>

            </Formik>


            <table border={1}>
                <thead>
                <tr>
                    <td>ProductId</td>
                    <td>ProductName</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>StockQuantity</td>
                    <td>Category</td>
                    <td>Photo</td>
                    <td>Supplier</td>
                    <td colSpan={3}>Action</td>
                </tr>

                </thead>
                <tbody>
                {
                    products.map((item) =>
                        <tr key={item.productID}>
                            <td>{item.productID}</td>
                            <td> {item.productName}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.stockQuantity}</td>
                            <td>{item.category}</td>
                            <td>{item.photo}</td>
                            <td>{item.supplierID}</td>

                            <td>
                                <Link to={"/products/" + item.productID}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => {
                                    remove(item.productID)
                                }}>Delete
                                </button>
                            </td>
                            <td>
                                <button>View</button>
                            </td>

                        </tr>
                    )
                }

                </tbody>
            </table>

        </>
    )


}