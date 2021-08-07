
import { Button } from "react-bootstrap"
import axios from "axios"
import { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export default function Update(props) {
    const [account, setAccount] = useState({})


    useEffect(() => {
        const getAccount = async () => {
            try {
                const res = await axios.post("/view", { email: props.email })
                setAccount(res.data)
                console.log(res.data)

            }
            catch (err) {
                console.log(err)
            }
        }
        getAccount();

    }, [props.email])
    console.log(account)
    const firstname = useRef();
    const lastname = useRef();
    const phone = useRef();
    const companyname = useRef();
    const domain = useRef();
    let history = useHistory()


    const handleClick = async () => {
        const newAccount = {
            email: props.email,
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            password: props.password,
            phone: phone.current.value,
            companyname: companyname.current.value,
            domain: domain.current.value,
        }
        await axios.put("/update", newAccount);
        history.goBack()


    }
    return (
        <div className="mainContainer">
            <Button onClick={handleClick} className="button" >Save</Button>
            <div className="containerUnit">
                <h3>Personal Info</h3>
                <div className="unitItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={props.email} />
                </div>
                <div className="unitItem">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" id="first-name" ref={firstname} defaultValue={account.firstname} />
                </div>
                <div className="unitItem">
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" id="last-name" ref={lastname} defaultValue={account.lastname} />
                </div>
            </div>
            <div className="containerUnit">
                <h3>Security </h3>
                <div className="unitItem">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" defaultValue={account.password} />
                </div>
                <div className="unitItem">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" ref={phone} defaultValue={account.phone} />
                </div>

            </div>
            <div className="containerUnit">
                <h3>Company info </h3>
                <div className="unitItem">
                    <label htmlFor="company-name">Company name</label>
                    <input type="text" id="company-name" ref={companyname} defaultValue={account.companyname} />
                </div>
                <div className="unitItem">
                    <label htmlFor="domain">Domain</label>
                    <input type="text" id="domain" ref={domain} defaultValue={account.domain} />
                </div>

            </div>
        </div>

    )
}
