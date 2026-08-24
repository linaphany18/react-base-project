import BaseInput from "./form/BaseInput";
import BaseFieldLabelInput from "./form/field-label/BaseFieldLabelInput";
import BaseFieldLabelInputPassword from "./form/field-label/BaseFieldLabelInputPassword";

export default function Test() {
    return (
        <div>
            <p className="text-center">Base Component</p>

            <div className="px-5 py-5">
                <form>
                    <BaseFieldLabelInput label="Username"/>

                    <div className="my-2">
                        <BaseFieldLabelInputPassword label="Password"/>
                    </div>

                    <BaseInput />
                </form>
            </div>
        </div>
    )
}