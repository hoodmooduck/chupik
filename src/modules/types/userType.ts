export type UserType = {
    id: number,
    uid: number,
    password: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    avatar: string,
    gender: string,
    phone_number: string,
    social_insurance_number: string,
    date_of_birth: string,
    employment: employmentType,
    address: addressType,
    credit_card: {
        cc_number: string,
    }
    subscription: subscriptionType
}

type employmentType = {
    title: string,
    key_skill: string
}

type addressType = {
    city: string,
    street_name: string,
    street_address: string,
    state: string,
    country: string,
    coordinates: {
        lat: number,
        lng: number
    }
}

type subscriptionType = {
    plan: string,
    status: string,
    payment_method: string,
    term: string
}