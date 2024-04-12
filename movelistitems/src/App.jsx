import { useState } from 'react'
import ComponentRight from './ComponentRight';
import ComponentLeft from './ComponentLeft';
import ListItems from './ListItems';
const list = [
  { item: "Chair", key: "C_1" },
  { item: "Mouse", key: "M_2" },
  { item: "Monitor", key: "M_3" },
  { item: "Headset", key: "H_4" },
  { item: "Laptop", key: "L_5" }
]; // can be optimised with use memo, TBD.



function App() {
  // const listItemsGetter = useCallback(getListElements);
  // // by default items will be there in left
  // const [leftItems, setLeftItems] = useState(listItemsGetter());
  // const [rightItems, setRightItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [listLeft, setListLeft] = useState([...list]); // by default values assumed to be present in the left
  const [listRight, setListRight] = useState([]);

  function handleSelectLeft() { 
    let filtered = Object.keys(selectedItems).filter(id => { //Logic duplication, can we use useEffect?
      const index = listLeft.find(obj => obj.key == id);
      if(index) return false;
      return true;
    });

    if(filtered.length === 0) return;

    let movedElements = list.filter(obj => {
      if (filtered.includes(obj.key)) {
        return true;
      }
      return false;
    }); //n2

    let listLeftCopied = [...listLeft, ...movedElements]; //n
    setListLeft(listLeftCopied);
    const movedElementIds = movedElements.map(obj => obj.key);
    const newRight = listRight.filter(obj => !movedElementIds.includes(obj.key));
    setListRight(newRight);
    setSelectedItems({});
  }

  function handleSelectRight() { // logic duplication, can we use useEffect?
    let filtered = Object.keys(selectedItems).filter(id => { //n2
      const index = listRight.find(obj => obj.key == id);
      if (index) return false;
      return true;
    });
    if (filtered.length === 0) return;
    let movedElements = list.filter(obj => {
      if (filtered.includes(obj.key)) {
        return true;
      }
      return false;
    });

    console.log("movedto right" ,movedElements);

    let listRightCopied = [...listRight, ...movedElements];
    setListRight(listRightCopied);
    const movedElementIds = movedElements.map(obj => obj.key);
    const newLeft = listLeft.filter(obj => !movedElementIds.includes(obj.key));
    console.log("new left", newLeft);
    setListLeft(newLeft);
    setSelectedItems({});
  }

  function handleItemsSelect(id) {
      // not be using shallow copy as it is O(n). can use constant check in the object instead
      // just object spread like {...b} is a constant time
      if(!selectedItems[id]) {
        const copied = {...selectedItems};
        copied[id] = true;
        setSelectedItems(copied);
      } else if(selectedItems[id]) { //second click is being assumed that element is getting deleted.
        const copied = { ...selectedItems };
        delete copied[id];
        setSelectedItems(copied);
      }

      console.log("list now", selectedItems);
  }

  return (
    <div className="main-container">
     <ComponentLeft>
      <ListItems list={listLeft} onItemsSelect={handleItemsSelect}></ListItems>
     </ComponentLeft>
      <div className="button-container" id="button_container">
        <button className="left" onClick={handleSelectLeft}>Left</button>
        <button className="right" onClick={handleSelectRight}>Right</button>
      </div>
     <ComponentRight>
        <ListItems list={listRight} onItemsSelect={handleItemsSelect}></ListItems>
     </ComponentRight>
    </div>
  )
}

export default App
