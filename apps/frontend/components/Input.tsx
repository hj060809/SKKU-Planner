'use client'

interface InputProps {
    placeholder: string
    type: string
    style?: string,
    value: string
    onChange: (text: string) => void
}

export function f(s: string){

}

export function Input({
    placeholder,
    type,
    style,
    value,
    onChange
}: InputProps) {
    return (
        <input
            className={`${style} mx-[10px] my-0 w-[35vw] border-b-[1px] border-solid border-b-[rgb(145,_145,_145)] px-[16px] py-[8px] outline-none text-[120%] font-semibold placeholder:text-[#c4c4c4]`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    )
}