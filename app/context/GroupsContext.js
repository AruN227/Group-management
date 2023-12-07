'use client'
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';



export const GroupContext = createContext();

const API_URL = './groups.json';

export const GroupProvider = ({children}) => {

    const [groupData, setGroupData] = useState([]);

    const addGroup = (newGroup) => {
        setGroupData([...groupData,newGroup]);
    }

    

    useEffect ( () => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Failed to fetch groups. Status: ${response.status}`);
                }
                const groups = await response.json();
                setGroupData(groups);
                console.log(groups);
            } catch (error) {
                console.error('Error fetching Groups:', error);
            }
        };
        fetchData();

    },[]);

    return (
        <GroupContext.Provider value = {{groupData,addGroup}}>
            {children}
        </GroupContext.Provider>
    );
};

export const useGroupContext = () => useContext(GroupContext);