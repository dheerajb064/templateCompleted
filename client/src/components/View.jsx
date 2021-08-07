
import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect, useState } from "react";
import axios from "axios"


export default function View(props) {
    const [account, setAccount] = useState({})


    useEffect(() => {
        const getAccount = async () => {
            try {
                const res = await axios.post("/view", { email: props.email })
                setAccount(res.data)

            }
            catch (err) {
                console.log(err)
            }
        }
        getAccount();

    }, [props.email])
    return (
        <div className="mainContainer">
            <div className="containerUnit">
                <h3>Personal Info</h3>
                <div className="unitItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={account.email} />
                </div>
                <div className="unitItem">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" id="first-name" value={account.firstname} />
                </div>
                <div className="unitItem">
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" id="last-name" value={account.lastname} />
                </div>
            </div>
            <div className="containerUnit">
                <h3>Security </h3>
                <div className="unitItem">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={account.password} />
                </div>
                <div className="unitItem">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" value={account.phone} />
                </div>

            </div>
            <div className="containerUnit">
                <h3>Company info </h3>
                <div className="unitItem">
                    <label htmlFor="company-name">Company name</label>
                    <input type="text" id="company-name" value={account.companyname} />
                </div>
                <div className="unitItem">
                    <label htmlFor="domain">Domain</label>
                    <input type="text" id="domain" value={account.domain} />
                </div>

            </div>
        </div>
    )
}
