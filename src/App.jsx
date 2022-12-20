import React, { useState } from 'react';
import { nanoid } from 'nanoid';

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

    const DESERT = {
        id: nanoid(),
        name: 'desert',
        items: DESERT_ITEMS,
        image: 'https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439_1280.jpg',
    };

    const LAKE = {
        id: nanoid(),
        name: 'lake',
        items: LAKE_ITEMS,
        image: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg',
    };

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

    const bringItems = (items, value, isHere) => {
        if (value === 'lake' && !isHere)
            return [...items, LAKE.items[Math.floor(Math.random() * 3)]]; // 3 is LAKE_ITEMS len
        if (value === 'desert' && !isHere)
            return [...items, DESERT.items[Math.floor(Math.random() * 3)]];
        else return [...items];
    };

    const toggleisHere = () => {
        const { isHere, items } = animal;

        setAnimal((oldSpecs) => ({
            ...oldSpecs,
            isHere: !isHere,
            journeys: isHere
                ? { ...journeys }
                : {
                      ...journeys,
                      lake: {
                          ...journeys.lake,
                          no:
                              placeValue === 'lake'
                                  ? journeys.lake.no + 1
                                  : journeys.lake.no,
                      },
                      desert: {
                          ...journeys.desert,
                          no:
                              placeValue === 'desert'
                                  ? journeys.desert.no + 1
                                  : journeys.desert.no,
                      },
                  },
            items: [...bringItems(items, placeValue, isHere)],
        }));
    };

    const { id, isHere, type, journeys, items } = animal;
    console.log(isHere);
    return (
        <div>
            <div>
                <input type="text" value={input} onChange={handleInput} />
                <button onClick={saveAnimalType}>save Animal Type</button>
                <select
                    value={placeValue}
                    onChange={changePlace}
                    disabled={!isHere}
                >
                    <option value="">Choose One Place</option>
                    <option value="lake">Lake</option>
                    <option value="desert">Desert</option>
                </select>
            </div>
            <div>
                <button onClick={toggleisHere}>
                    {isHere ? 'Go To Journey' : 'Come Back from Journey'}
                </button>
                {!isHere && (
                    <img
                        src={placeValue === 'lake' ? LAKE.image : DESERT.image}
                        alt=""
                    />
                )}
            </div>
            <ul>
                <li>Animal id: {id}</li>
                <li>Animal Type: {type}</li>
                <li>
                    Animal Status:{' '}
                    {isHere ? 'The Animal is here!' : 'The Animal is gone!'}
                </li>
                <li>
                    Total Journeys Number:{' '}
                    {journeys.lake.no + journeys.desert.no}
                </li>
                <li>Journeys To lake: {journeys.lake.no}</li>
                <li>Journeys To desert: {journeys.desert.no}</li>
                <li>
                    Animal items:{' '}
                    {items.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        );
                    })}
                </li>
            </ul>
        </div>
    );
};

export default App;
