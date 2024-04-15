import * as React from "react";
import './card.scss'
import {UserType} from "../../modules/types/userType.ts";
import {NavLink} from "react-router-dom";

type CardProps = {
    props: UserType
}

const Card: React.FC<CardProps> = ({props}) => {

    return (
        <NavLink to={'/users/'+props.id} className='card'>
            <img className='card__image' src={props.avatar} alt={props.first_name}/>
            <div className="card__content">
                <p className='card__username'><span className="card_heading">user name: </span>{props.username}</p>
                <p className='card__name'><span className="card_heading">full name: </span>{props.first_name + ' ' +props.last_name}</p>
                <p className='card__email'><span className="card_heading">email: </span>{props.email}</p>
                <p className='card__gender'>
                    <span className="card_heading">gender: </span>
                    {(props.gender === 'Male' || props.gender === 'Female') ? props.gender : props.gender + ' 3.14))'}
                </p>
            </div>
        </NavLink>
    )
}

export default Card
