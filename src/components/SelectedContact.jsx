import React from "react";
import { useState, useEffect } from "react";
import '../app.css'
import ContactRow from "./ContactRow";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                console.log(result);
                
                setContact(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, []);

    return ( 
        <>Contact Info:
            <table>
                <tbody className="selected">
                    {contact && <ContactRow  contact={contact} setContact={setContact} selectedContactId={selectedContactId} />}
                </tbody>
            </table>
            <button onClick={() => setSelectedContactId(null)}>Back</button>
        </>
    );
}
 
export default SelectedContact;