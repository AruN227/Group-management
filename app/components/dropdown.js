import { useState } from "react";

export default function Dropdown(props) {

    
    const divisionOptions = ["All","Upper","Sole","Full Sole"];
    const [allchecked, setAllChecked] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        var updatedList = [...allchecked];

        if (e.target.checked) {

            updatedList = [...allchecked, e.target.value]
            // setAllChecked([...allchecked, e.target.value]);
           
            // props.parentCallback(allchecked);

        } else {
            updatedList.splice(allchecked.indexOf(e.target.value), 1);
            // setAllChecked(allchecked.filter((item) => item !== e.target.value));
            // props.parentCallback(allchecked);
        }
        console.log(updatedList);
        setAllChecked(updatedList);
        props.parentCallback(updatedList);
    }
    return (
        
        <div>
            
            <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdown" className="text-left shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" type="button">Select Division 
                <svg className="inline-flex w-2.5 h-2.5 ms-60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="dropdown" className="z-10 w-96 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                {divisionOptions.map((option) => {
                    return(

                        <li key={option}>
                            <div className="flex items-center">
                            <input type="checkbox" onChange = {handleChange} value={option} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
                            </div>
                        </li>
                    )
                })}
               
                </ul>
            </div>

        </div>
    )

}