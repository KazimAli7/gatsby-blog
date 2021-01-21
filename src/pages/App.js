import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

export default function App(){
    useEffect(() =>{
        navigate("/posts")
    })
    return(
        <div>
            Gatsby demo
        </div>
    )
}
