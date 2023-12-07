'use client'

const error = ({error, reset}) => {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center">

                <p className="mt-4 text-gray-500">
                    {error.message}
                </p>

                <button
                type="button"
                onClick={() => reset()}
                className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring">
                Try Again</button>
                
            </div>
        </div>


    );
}

export default error