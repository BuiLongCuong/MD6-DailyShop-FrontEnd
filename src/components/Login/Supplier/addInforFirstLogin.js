import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {editSupplier, findByAccountId} from "../../../redux/service/supplierService";
import {Field, Form, Formik} from "formik";

export default function AddInforFirstLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const supplier =useSelector(state => state.supplier.supplier)

    // const {id} =useParams();
    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));

    useEffect(() => {
        dispatch(findByAccountId(currentSupplier.id))
    }, [])

    const EditSupplier = (value) => {
        dispatch(editSupplier(value)).then(() => {
            navigate("/dailyShop")
        })
    }
    return (
        <>
            <h1>form add infor</h1>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 style={{textAlign: "center"}}>Edit supplier</h1>

                    <Formik initialValues={supplier} onSubmit={EditSupplier} enableReinitialize={true}>
                        <Form>
                            <div className="form-group">
                                <label>Supplier name</label>
                                <Field  className={"form-control"} name={"supplierName"}></Field>
                            </div>
                            <div className="form-group">
                                <label>Contact name</label>
                                <Field className={"form-control"} name={"contactName"}></Field>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <Field className={"form-control"} name={"phone"}></Field>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <Field className={"form-control"} name={"address"}></Field>
                            </div>

                            <button type="submit" className="btn btn-primary ml-3">Save</button>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    )
}