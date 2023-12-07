'use client'
import MyTable from '../components/table';


export default function GroupsHome() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
                <div className="py-8 max-w-screen-xl mx-auto">
                <MyTable />
                </div>
            </div>
        </div>
    )
}