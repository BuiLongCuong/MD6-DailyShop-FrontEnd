import "./BodySupplier.css"
import BodyAdsSupplier from "./BodyAdsSupplier";
import BodySideBarSupplier from "./BodySideBarSupplier";
import MainBodySupplier from "./MainBodySupplier";
export default function BodySupplier(){
    return(
        <>
            <div className="bodySupplier">
                <BodySideBarSupplier/>
                <MainBodySupplier/>
                <BodyAdsSupplier/>
            </div>
        </>
    )
}