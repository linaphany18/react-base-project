import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'

type IBaseInput = {
    label?: string
    error?: string
}

export default function BaseFieldLabelInputPassword({
    label = "",
    error = "",
}: IBaseInput) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <label>
                <div className={`"border rounded h-15.5 px-5 pt-1 pb-3" 
                ${error ? "border border-red-600 focus-within:border-red-300 focus-within:ring-1 focus-within:ring-red-300 bg-red-100" :
                        "focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200 bg-neutral-100 border border-gray-200"}`}>
                    {label && <div className="text-slate-600">{label}</div>}
                    <div className="relative">
                        <input className="w-full h-5.5 outline-none pr-7.5" type={showPassword ? "text" : "password"} />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="outline-none absolute -top-2 right-0 cursor-pointer"
                        >
                            {showPassword ? <Eye color="#626F86" size={20} /> : <EyeOff color="#626F86" size={20} />}
                        </button>
                    </div>
                </div>
            </label>

            {error && <p className="text-red-600 text-xs pt-1">{error}</p>}
        </div>
    )
}