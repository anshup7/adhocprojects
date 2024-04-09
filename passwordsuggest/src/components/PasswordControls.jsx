import './PasswordText.css';
export default function PasswordControls({checkBoxes = [
    
    {
        label: "Use Digits",
        status: true,
        value: "digit_list",
        class: "digits",
        key: 1
    },
    {
        label: "Use Special Chars",
        status: true,
        value: "special_chars",
        class: "special-chars",
        key: 2
    },
    {
        label: "Use Capital letters",
        status: true,
        value: "capital_letters",
        class: "capital-letters",
        key: 3
    },
    {
        label: "Use Small Letters",
        status: true,
        value: "small_letters",
        class: "small-letters",
        key: 4
    },

    
]}) {
    let items = checkBoxes.map((obj) => {
        return (
            <>  
                <li key={(obj.key) * 2}>
                    <input key={(obj.key) * 3} type="checkbox" id={"chk_"+obj.value} name={"chk_name_"+obj.value} />
                    <label htmlFor={"chk_name_" + obj.value} key={obj.key} value={obj.key} className={obj.class}>{obj.label}</label>
                </li>
            </>
        )
    })
    return (
        <>
            <ul id="password_controls" className="password-controls">
                {items}
            </ul>
        </>
    )
}
