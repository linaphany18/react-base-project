type IBaseInput = {
    label?: string
    error?: string
    type?: string
}

export default function BaseFieldLabelInput({
    label = "",
    error = "",
    type = "text"
}: IBaseInput) {
    return (
        <div>
            <label>
                <div className={`"border rounded h-15.5 px-5 pt-1 pb-3" 
                ${error ? "border border-red-600 focus-within:border-red-300 focus-within:ring-1 focus-within:ring-red-300 bg-red-100" :
                        "focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200 bg-neutral-100 border border-gray-200"}`}>
                    {label && <div className="text-slate-600">{label}</div>}
                    <input className="w-full h-5.5 outline-none" type={type} />
                </div>
            </label>

            {error && <p className="text-red-600 text-xs pt-1">{error}</p>}
        </div>
    )
}