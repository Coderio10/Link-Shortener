import { useState } from "react" 


function Link ({url}) {

    const [data, setData] = useState([])

    return (
        <>
            <div>
                <div>
                    <p>{url}</p>
                </div>
                <div>
                    <p>https://www.frointer.com</p>
                    <button>Copy</button>
                </div>
            </div>
        </>
    )
}

export default Link