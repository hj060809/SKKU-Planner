interface SignButtonProps {
    value: string
    style?: string
    onClick: () => void
}

interface LoginSubmitForm {
    name: string
}

export function loginSubmit() {

}

export function signUpSubmit() {

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