import React, { useState } from 'react';
import { nanoid } from 'nanoid';

// const PLACE = {
//     id: nanoid(),
//     name: PlaceName,
//     items: [],
//     image: '',
// };

1;

2;

3;

4;

// const ITEM = {
//     id: nanoid(),
//     name: '',
// };

const animal_init = {
    id: nanoid(),
    type: null, // display this
    journeys: {
        desert: {
            no: 0,
        },
        lake: {
            no: 0,
        },
    },
    items: [],
    isHere: true,
};

//<form> with one input field (Animal's type) and one button (save Animal type)
//<button> that says either Go on a Journey or Return from the Journey (depends on
//isHere)
//
//
const App = () => {
    const [input, setInput] = useState('');
    const [animal, setAnimal] = useState(animal_init);
    const [placeValue, setPlaceValue] = useState('');

    const LAKE_ITEMS = ['frog', 'fish', 'flower'].map((name) => ({
        id: nanoid(),
        name,
    }));

    const DESERT_ITEMS = ['bunny', 'snakey', 'unicorney'].map((name) => ({
        id: nanoid(),
        name,
    }));

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const changePlace = (e) => {
        setPlaceValue(e.target.value);
    };

    const saveAnimalType = () => {
        setAnimal((oldSpecs) => ({ ...oldSpecs, type: input }));
        setInput('');
    };

    const toggleisHere = () => {
        const { isHere } = animal;
        console.log(placeValue);
        if (placeValue === 'lake') {
            setAnimal((oldSpecs) => ({
                ...oldSpecs,
                isHere: !isHere,
                journeys: {
                    ...journeys,
                    lake: {
                        ...journeys.lake,
                        no: isHere ? journeys.lake.no + 1 : journeys.lake.no,
                    },
                },
                items: [],
            }));
        }
        if (placeValue === 'desert') {
            setAnimal((oldSpecs) => ({
                ...oldSpecs,
                isHere: !isHere,
                journeys: {
                    ...journeys,
                    desert: {
                        ...journeys.desert,
                        no: isHere
                            ? journeys.desert.no + 1
                            : journeys.desert.no,
                    },
                },
                items: [],
            }));
        }
    };

    const { id, isHere, type, journeys, items } = animal;
    console.log(isHere);
    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={saveAnimalType}>save Animal Type</button>
            <select value={placeValue} onChange={changePlace}>
                <option value="">Choose One Place</option>
                <option value="lake">Lake</option>
                <option value="desert">Desert</option>
            </select>
            <button onClick={toggleisHere}>
                {isHere ? 'Go To Journey' : 'Come Back from Journey'}
            </button>
            <ul>
                <li>Animal id: {id}</li>
                <li>
                    Total Journies Number:{' '}
                    {journeys.lake.no + journeys.desert.no}
                </li>
                <li>Animal Type: {type}</li>
                <li>
                    Animal Status:{' '}
                    {isHere ? 'Go to Journey' : 'Return from Journey'}
                </li>
                <li>Journies To lake: {journeys.lake.no}</li>
                <li>Journies To desert: {journeys.desert.no}</li>
                <li>Animal items: {items}</li>
            </ul>
        </div>
    );
};

export default App;
