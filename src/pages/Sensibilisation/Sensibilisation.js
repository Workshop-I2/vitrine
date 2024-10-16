import { Outlet } from "react-router-dom";
import MenuSensibilisation from "../../components/MenuSensibilisation/MenuSensibilisation";

function Sensibilisation() {
    return (
        <div className="Sensibilisation">
            <MenuSensibilisation/>
            <Outlet/>
        </div>
    );
}

export default Sensibilisation;