import React, { useEffect }from "react";
import axios from "axios";
import Card from "./card"

export default function Cards(props) {
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:9000/boilers")
            if (response.status === 200) {
                console.log(response)
            }
        }
        fetchData()
    }, [])
    
    
return (
<div className="row">
            {/* Card */}
            <div className="col-4 card_product">
              <Card/>
            </div>
            {/* Fine Card */}
            </div>
)

}