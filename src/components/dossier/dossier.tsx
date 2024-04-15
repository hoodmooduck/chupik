import './dossier.scss'
import {UserType} from "../../modules/types/userType.ts";

type DossierType = {
    user: UserType
}

const Dossier = ({user}: DossierType) => {
    return (
        <section className='dossier'>
            <h1>
                {user.first_name} {user.last_name}
            </h1>
            <img src={user.avatar} title={(user.gender === 'Male' || user.gender === 'Female') ? 'normis' : ' 3.14))'} alt={`${user.first_name} ${user.last_name}`}/>
            <div className="dossier__content">
                <div className="dossier__compose">
                    <h2>Base info</h2>
                    <p>ID: {user.id}</p>
                    <p>UID: {user.uid}</p>
                    <p>Password: {user.password}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Phone number: {user.phone_number}</p>
                    <p>Social insurance number: {user.social_insurance_number}</p>
                    <p>Date of birth: {user.date_of_birth}</p>
                </div>
                <div className="dossier__compose">
                    <h2>Employment</h2>
                    <p>Title: {user.employment.title}</p>
                    <p>Key skill: {user.employment.key_skill}</p>
                </div>
                <div className="dossier__compose">
                    <h2>Address</h2>
                    <p>City: {user.address.city}</p>
                    <p>Street name: {user.address.street_name}</p>
                    <p>Street address: {user.address.street_address}</p>
                    <p>State: {user.address.state}</p>
                    <p>Country: {user.address.country}</p>
                    <p>Coordinates:</p>
                    <ul>
                        <li>Lat: {user.address.coordinates.lat}</li>
                        <li>Lng: {user.address.coordinates.lng}</li>
                    </ul>
                </div>
                <div className="dossier__compose">
                    <h2>Credit card</h2>
                    <p>CC number: {user.credit_card.cc_number}</p>
                </div>
                <div className="dossier__compose">
                    <h2>Subscription</h2>
                    <p>Plan: {user.subscription.plan}</p>
                    <p>Status: {user.subscription.status}</p>
                    <p>Payment method: {user.subscription.payment_method}</p>
                    <p>Term: {user.subscription.term}</p>
                </div>
            </div>

        </section>
    )
}

export default Dossier