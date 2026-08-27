import { ICONS } from "../../assets/icons.";

export default function Sidebar() {
    return (
        <div className="bg-white w-75 min-h-screen">
            <div className="flex justify-center py-2">
                <img src={ICONS.logo} className="w-53.5"/>
            </div>
        </div>
    )
}