import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {editSupplier, findByAccountId} from "../../../redux/service/supplierService";
import {Field, Form, Formik} from "formik";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../redux/service/addressService";

export default function AddInforFirstLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // doi tuong supplier tim duoc thong qua id cua doi tuong trong local storage
    const supplier =useSelector(state => state.supplier.supplierSignInFirst);

    const provinces = useSelector(state => state.address.listProvince);
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));

    useEffect(() => {
        dispatch(getAllProvince())
    }, [])

    // useEffect(() => {
    //     dispatch(getAllDistrict())
    // }, [])

    // useEffect(() => {
    //     dispatch(getAllWard())
    // }, [])

    useEffect(() => {
        dispatch(findByAccountId(currentSupplier.id))
    }, [])

   const getDistricts =(event)=>{
        console.log(event.target.value)
        dispatch(getAllDistrict(event.target.value));
   }

    const getWards =(event)=>{
        console.log(event.target.value)
        dispatch(getAllWard(event.target.value));
    }

    const EditSupplier = (values) => {
        values.account = currentSupplier
        dispatch(editSupplier(values)).then(() => {

            navigate("/dailyShop")
        })
    }
    return (
        <>
            <h1>form add infor</h1>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 style={{textAlign: "center"}}>Edit supplier</h1>

                    <Formik initialValues={supplier} onSubmit={EditSupplier} >
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
                                <Field name={"province"} as={"select"} onChange={(event)=>{
                                    getDistricts(event)
                                }} >
                                    {
                                        provinces.map((province) => {
                                            return <>
                                                <option value={province.id}>{province.provinceName}</option>
                                            </>
                                        })
                                    }
                                </Field>
                                <Field as={"select"} name={"district"} onChange={(event)=>{
                                    getWards(event)
                                }}>
                                    {
                                        districts.map((province) => {
                                            return <>
                                                <option value={province.id}>{province.districtName}</option>
                                            </>
                                        })
                                    }
                                </Field>
                                <Field as={"select"} name={"ward"}>
                                    {
                                        wards.map((province) => {
                                            return <>
                                                <option value={province.id}>{province.wardName}</option>
                                            </>
                                        })
                                    }
                                </Field>
                                <Field className={"form-control"} name={"specificAddress"}></Field>
                            </div>
                            <div className="form-group">
                                <label>Avatar</label>
                                <Field as={"file"} className={"form-control"} name={"imageSupplier"}></Field>
                            </div>

                            <button type="submit" className="btn btn-primary ml-3">Save</button>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    )
}