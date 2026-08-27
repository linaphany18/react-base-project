import { ChevronRight, House } from "lucide-react"
import { Activity } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface IBreadcrumbData {
    label: string
    url: string
}

type IBreadcrumb = {
    data: IBreadcrumbData[]
}

export default function Breadcrumb({ data = [] }: IBreadcrumb) {
    const location = useLocation()
    const currentUrl = location.pathname
    const navigate = useNavigate()

    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
                <House size={14} color={currentUrl === "/" ? "#1A2674" : "#707070"} />

                <span
                    className={`text-gray-500 ${currentUrl === "/" ? "text-primary" : "hover:cursor-pointer"}`}
                    onClick={() => navigate("/")}
                >
                    Home
                </span>
            </div>

            <Activity mode={data?.length > 0 ? "visible" : "hidden"}>
                {data?.map((x: IBreadcrumbData, index) => (
                    <div key={index} className="flex items-center gap-8">
                        <ChevronRight size={20} color="#707070" />
                        <span
                            className={`text-gray-500 ${currentUrl === x?.url ? "text-primary" : "hover:cursor-pointer"}`}
                            onClick={() => navigate(x?.url)}
                        >
                            {x?.label}</span>
                    </div>
                ))}
            </Activity>
        </div>
    )
}