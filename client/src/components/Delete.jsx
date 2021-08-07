import React, { useEffect } from 'react'
import axios from "axios"
export default function Delete(props) {

    useEffect(() => {
        const deletedAccount = async () => {
            await axios.delete("/delete", { email: props.email })
        };
        deletedAccount()
    }, [props.email])

    return (
        <div>
            <h1>This account has been deleted</h1>
        </div>
    )
}
