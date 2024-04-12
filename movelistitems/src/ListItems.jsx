import { useCallback } from "react";

export default function ListItems({onItemsSelect, list}) {    
     /**
      * 
      * @param {*} event
      * The following componenent is not re rendering, it is using event handler 
      * and then browser is showing the change. A component re-renders if and only
      * if the state or the prop of the component have changed. 
      */
    function handleListClick(event) {
        event.stopPropagation();  // as this tag element listener may be having parent and we dont want bugs
        console.log("called", event, event.target.id);
        event.target.style.color = "red";
        event.target.style.backgroundColor = "aqua";
        onItemsSelect(event.target.id);
    }
    
    function getListElements() {
        // returns list of elements
        return list.map(listItem => {
            return (
                <li className="item" id={listItem.key} onClick={(e) => handleListClick(e, listItem.key)} key={listItem.key}>{listItem.item}</li>
            );
        })
    }

    let listElementsGetter = useCallback(getListElements)
    return(
        <ul>
            {listElementsGetter()}
        </ul>
    );
}
