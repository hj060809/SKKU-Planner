import { SIGNUP } from "@/graphql/client/user/mutations"
import { useMutation } from "@apollo/client/react"
import { useRouter } from "next/navigation"

interface SignButtonProps {
    value: string
    style?: string
    onClick: () => void
}

interface LoginSubmitForm {
    studentId: string
    password: string
}

interface SignUpSubmitForm extends LoginSubmitForm{
    majorId: number
    semester: number
}

export function loginSubmit({
    studentId,
    password,
}: LoginSubmitForm) {

}

export function SignUpSubmit({
    studentId,
    password,
    majorId,
    semester
}: SignUpSubmitForm) {
    
}

export function SignButton({
    value,
    style,
    onClick
}: SignButtonProps){
    return (
        <input
        className={`${style} mt-[5%] bg-[#99fc80] w-full p-[12px] border-[2px] border-dashed border-[#282828] rounded-[25px] font-semibold text-[#282828] [transition:200ms_ease] hover:bg-[#99fc80] hover:border-[2px] hover:border-solid hover:border-[#282828] hover:[box-shadow:inset_0_5px_5px_rgba(0,0,0,0.12)] hover:text-[#282828]`}
        type="button"
        value={value}
        onClick={onClick}
        />
    )
}