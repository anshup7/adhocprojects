import { useState } from "react"

export default function Tree({ data, adder }) {
    const [show, setShow] = useState(false);
    function handleClick(e) {
        e.stopPropagation(); // Remove this and see the counter getting increment by no. parents above it
        console.log("clicked");
        setShow(!show);
    }
    let children = data.children.map((item, index) => {
        return (
            <>
                {
                    item.type == "Directory" ? <Tree
                    key={`${item.key.toUpperCase()}_${index}`} 
                    adder={adder + 2}
                 data={item}></Tree> : 
                 <p style={{marginLeft: `${((adder+2) * 2)}rem`}} 
                 key={item.key}>{item.name}</p>
                }
                 
            </>
        )
    })
    return (
       <div className="container" onClick={handleClick}>
        <p style={{marginLeft: `${(adder * 2)}rem`}}>{data.name}</p>
        <div style={{"display": show ? "none" : "block"}}>
            {children}
        </div>
       </div>
    )
}
