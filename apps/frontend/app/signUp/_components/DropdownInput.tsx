'use client'

import { Dispatch, SetStateAction, useState } from 'react'

interface DropdownInputStyle{
    input?: string
    dropdownMenus?: string
}

interface DropdownInputProps{
    placeholder: string
    styles?: DropdownInputStyle
    setter: Dispatch<SetStateAction<number>>
    options: string[]
}

export function DropdownInput({
    placeholder,
    styles,
    setter,
    options
}: DropdownInputProps) {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const filteredOptionIdxes = [...options.keys()].filter(i =>
        options[i].toLowerCase().includes(value.toLowerCase())
    );

    const onSelect = (i: number) => {
        const idx = filteredOptionIdxes[i]
        setValue(options[idx])
        setter(idx)
        setIsOpen(false)
    }

    return (
        <label>
            <input
                className={`${styles?.input} mx-[10px] my-0 w-[35vw] border-b-[1px] border-solid border-b-[rgb(145,_145,_145)] px-[16px] py-[8px] outline-none text-[120%] font-semibold placeholder:text-[#c4c4c4]`}
                type="text"
                placeholder={placeholder}
                value={value}
                onBlur={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        onSelect(hoveredIndex)
                    } else if (e.key === 'ArrowUp' && hoveredIndex > 0) {
                        setHoveredIndex(prev => prev-1)
                    } else if (e.key === 'ArrowDown' && hoveredIndex < options.length-1) {
                        setHoveredIndex(prev => prev+1)
                    }
                }}
                onChange={e => {
                    setHoveredIndex(0)
                    setValue(e.target.value)
                    setter(-1)
                    setIsOpen(true)
                }}
            />
            {filteredOptionIdxes.length !== 0
            && isOpen
            && (
                <ul
                    className={`${styles?.dropdownMenus} mx-[10px] my-0 absolute mt-1 w-[35vw] max-h-[30vh] overflow-y-scroll border-[2px] border-[solid] border-[black] bg-[white] z-10`}
                    onMouseDown={(e: { preventDefault: () => void }) => {
                        // 드롭다운 항목 클릭 시 onBlur가 발생하지 않도록 방지
                        e.preventDefault();
                    }}
                >
                {filteredOptionIdxes.map((opid, idx) => (
                    <li
                    key={idx}
                    className={`px-2 py-1 hover:bg-gray-200 cursor-pointer ${hoveredIndex === idx && "bg-gray-200"}`}
                    onClick={() => onSelect(opid)}
                    >
                    {options[opid]}
                    </li>
                ))}
                </ul>
            )}
        </label>
    )
}