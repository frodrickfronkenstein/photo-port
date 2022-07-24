import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const categories = [
        {
            name: "Commercial",
            desciption: "Photos of grocery stores, food  trucks, and other commercial projects",
        },
        { name: "Portraits", desciption: "Portraits of people in my life" },
        { name: "Food", desciption: "Delicious delicacies" },
        {
            name: "Landscape",
            desciption: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    const handleClick = () => {
        console.log("click handled")
    }

    return(
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about' onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name} >
                            <span onClick={() => { handleClick(); }} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;