import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const history = useNavigate()
    
    async function populateQuote() {
        const req = await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        const data = req.json()
        console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = token
            if(!user){
                localStorage.removeItem('token')
                history('/login')
            } else {
                populateQuote()
            }
        }
    }, [])

    return <h1>Hello World</h1>
}

export default Dashboard