import { useEffect, useState } from "react";
import AddRoyaltyFrom from "./Components/AddRoyaltyFrom";
import RoyaltyPreview from "./Components/RoyaltyPreview";
import { RoyaltyInfoContext } from "../../../../../Context/RoyaltyInfoContext";
import Dummydata from "../../../../../../Apis/DummyData";

const EditRoyalty = () => {
    const [RoyaltyData, setRoyaltyData] = useState(Dummydata);
    const [selectedOwner, setSelectedOwner] = useState(null);
    const [qrCode, setQrCode] = useState(null);



    const generateQrCode = (EChallanId) => {
        const url = `/WBMD/Page/each/aspx/id/${encodeURIComponent(EChallanId)}/S/24-25/RPS`;
        setQrCode(url);
    };
    useEffect(() => {

        setRoyaltyData(Dummydata);
    }, []);

    return (
        <RoyaltyInfoContext.Provider value={{ RoyaltyData, setRoyaltyData }}>
            <div id="no-print" >
                {/* Left Section - Form */}
                <div className="flex justify-center items-center">
                    <AddRoyaltyFrom generateQrCode={generateQrCode} qrCode={qrCode} />
                </div>

                {/* Right Section - Preview */}

            </div>
            <div className="flex justify-center items-center sm:h-full w-full">
                <RoyaltyPreview RoyaltyData={RoyaltyData} setRoyaltyData={setRoyaltyData} selectedOwner={selectedOwner} qrCode={qrCode} />
            </div>
        </RoyaltyInfoContext.Provider>
    );
};

export default EditRoyalty;
