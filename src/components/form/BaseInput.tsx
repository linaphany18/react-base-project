type IBaseInput = {
    label?: string
    error?: string
    type?: string
}

export default function BaseInput({
    error = "",
    type = "text"
}: IBaseInput) {
    return (
        <div>
            <input
                className={`outline-none appearance-none border rounded px-5 text-sm pt-2 pb-3 w-full h-13 ${error
                    ? "border-red-600 focus:border-red-300 focus:ring-1 focus:ring-red-300"
                    : "border-gray-200 focus:border-blue-200 focus:ring-1 focus:ring-blue-200"
                    }`}
                type={type}
            />

            {error && <p className="text-red-600 text-xs pt-1">{error}</p>}
        </div >
    )
}