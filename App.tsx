import * as React from 'react';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
/*import ItemCount2 from './Components/ItemCount/ItemCount2';
<ItemCount2 stock={10} initial={1} />*/




function App() {
     
    return (
        <>
            <ItemListContainer greeting='Bienvenido a Narutech' />
        </>
    )
}

export default App
