import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllByIdUser} from "../../redux/service/productService";
import {getAllCategories} from "../../redux/service/categoryService";

export function ListProduct() {
    const distPatch = useDispatch()
    const accountSupplier = JSON.parse(localStorage.getItem("currentCustomer"))
    console.log(accountSupplier)
    const accountId = accountSupplier.id;
    const listProduct = useSelector(({categories}) => {
        console.log(categories.list)
        return categories
    })

    useEffect(() => {
        distPatch(getAllCategories())
    }, []);
    return (
        <>
            <div>
                Abc
            </div>
        </>
    )
}