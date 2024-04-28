export default function Tree({ data, adder }) {
    let children = data.children.map((item, index) => {
        return (
            <>
                {
                    item.type == "Directory" ? <Tree
                    key={`${item.key.toUpperCase()}_${index}`} 
                    adder={adder + 2}
                 data={item}></Tree> : <p style={{marginLeft: `${((adder+2) * 2)}rem`}} key={item.key}>{item.name}</p>
                }
                 
            </>
        )
    })
    return (
       <div className="container">
        <p style={{marginLeft: `${(adder * 2)}rem`}}>{data.name}</p>
            {children}
       </div>
    )
}
