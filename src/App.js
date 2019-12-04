import React from 'react';
import {AppHeader} from "./components/Header/header";
import {AppBody} from "./components/Body/appBody";


const App =()=> {

   const [state, setState]= React.useState({
       itemsList:[
               {id: 1, name: 'Элемент 1', description: 'Сложное описание', checked: false },
               {id: 2, name: 'Элемент 1', description: 'Сложное описание', checked: false },
               {id: 3, name: 'Элемент 1', description: 'Сложное описание', checked: false },
               {id: 4, name: 'Элемент 1', description: 'Сложное описание', checked: false },
               {id: 5, name: 'Элемент 1', description: 'Сложное описание', checked: false },
           ],
   });


     const handleToggle = (index, checked)=> {
         let {itemsList }= state;
         itemsList[index].checked=checked;
        setState({itemsList})
    };



    let itemsChecked = state.itemsList.map(i=> i.checked).filter(i=>i);

    const deleteChangeElements =()=>{
        let itemsList = state.itemsList.filter(i=>!i.checked);
        setState({itemsList})
    };


    const addNewItem =(newItem)=>{

        let newItemslist =state.itemsList.concat(newItem);

        setState({
            ...state,
            itemsList: newItemslist
        })

    };

    return (
        <>
            <div style={{
                display: 'grid',
                width: 'auto',
                maxWidth: '1600px',
                gridTemplateRows: '60px 1fr',
            }}>
                <div>
                    <AppHeader />
                </div>
                <div>
                    <AppBody
                        handleToggle={handleToggle}
                        list={state.itemsList}
                        deleteChangeElements={deleteChangeElements}
                        itemsChecked={itemsChecked}
                        addNewItem={addNewItem}
                    />
                </div>
            </div>
        </>
    );
};

export default App;
