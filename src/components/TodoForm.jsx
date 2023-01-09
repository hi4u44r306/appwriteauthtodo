import React, { useState } from 'react'
import { databases } from '../appwrite/appwriteConfig'

function TodoForm() {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument("63b8ce937c0a65408f6e", "63b8ceb1527fd8cc25f5", "unique()", {
            todo
        })
        console.log(promise);
        promise.then(
            function (response) {
                console.log(response);
            },
            function (error) {
                console.log(error);
            }
        );
        //window.location.reload() // handle it in different way
        // e.target.reset();
        window.location.reload()
    }


    return (
        <div className="max-w-7xl mx-auto mt-10">
            <form
                action=""
                onSubmit={handleSubmit}
                className="flex justify-center mb-10"
            >
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Todo"
                    className="border p-2 w-2/3 rounded-md"
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                <button
                    className="bg-purple-500 p-2 text-white ml-2 rounded-md"
                    type="submit"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default TodoForm