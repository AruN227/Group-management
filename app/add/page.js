'use client'

import { format } from 'date-fns';
import { useState } from "react";
import Dropdown from "../components/dropdown";
import {useGroupContext} from "../context/GroupsContext";
import { useRouter } from 'next/navigation';

export default function Post() {

  const {groupData, addGroup} = useGroupContext();
  const router = useRouter();

  const [groupName,setGroupName] = useState('');
  const [division,setDivision] = useState([]);

  const  handleCallback = (childData) => {
    console.log(childData);
    setDivision(childData);
  };

  const handleAddGroup = (e) => {
    e.preventDefault();

    if (!groupName && !division) return;

   
    const newGroup = {
      id: groupData.length+1,
      groupName,
      division,
      updatedOn: format(new Date(), 'dd/MM/yyyy HH:mm a')
    };
    addGroup(newGroup);
    setGroupName('');
    setDivision('');
    router.push('/');

  }

    return (
      <section className="bg-gray-100 dark:bg-gray-900 h-screen">
        <div className="container py-8 px-4 mx-auto my-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
          <div className="mb-4">
              <nav className="flex mb-5" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                    <li className="inline-flex items-center">
                      <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <a href="#" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Groups</a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Create Group</span>
                      </div>
                    </li>
                  </ol>
              </nav>
          </div>
          <div className="h-full shadow-md sm:rounded-lg">
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center p-4 justify-between">
                <span className="text-xl font-semibold text-gray-900 dark:text-gray-400">
                      Create Groups 
                </span>
                &nbsp;
              </div>
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center p-4">
                <span className="text-m font-bold text-gray-900 dark:text-gray-400">
                      General Information
                </span>
                <div className="px-1">
                  <svg className="w-4 h-4 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                </div>  
              </div>
              
              <div className="grid grid-cols-2 gap-2 justify-items-start px-4 py-1">
                <div>
                        <span className="text-m font-semibold text-gray-700 dark:text-gray-400 ">
                                  Division*
                        </span>
                </div>
                <div>
                      <span className="text-m font-semibold text-gray-700 dark:text-gray-400 ">
                      Group Name*
                      </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 justify-items-start px-4 py-1 pb-36">
                <div>
                  {/* <Dropdown/> */}
                        <Dropdown parentCallback={handleCallback}/>
                </div>
                <div>
                    <input type="text" value={groupName} onChange = {(e) => setGroupName(e.target.value)} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Group Name" required></input>  

                </div>
              </div>
          </div>
          
        </div>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-end md:p-6 dark:bg-gray-800 dark:border-gray-600">
    
            <ul className="flex flex-wrap items-center mt-3 mr-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                <button type="button" className="py-2.5 px-12 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>

                </li>
                <li>
                <button type="button" onClick={handleAddGroup} disabled={!groupName || !division} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
                </li>
            </ul>
        </footer>
        
      </section>
    )
  }
  