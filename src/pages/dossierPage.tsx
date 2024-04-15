import {useParams} from "react-router-dom";
import {useAppSelector} from "../modules/hooks/redux.ts";
import {useEffect, useState} from "react";
import {UserType} from "../modules/types/userType.ts";
import Dossier from "../components/dossier/dossier.tsx";

// вообще если делать по нормальному, нужно отдельный компонент сделать для досье
// если его тут нет значит мне было лень делать
// я сделал потому что было лень создовать отдельную папку со стилями страниц да и выглядело бы это
// кринжово ну или просто некрасиво да и впадлу 52
const DossierPage = () => {
    const id = useParams()
    const [user, setUser] = useState<UserType | null>(null)

    const {users} = useAppSelector((state) => state.users);

    useEffect(() => {
        const destructUser = users.filter((e) => e.id === Number(id.id))
        setUser(destructUser[0])
    }, []);

    if (user !== null)
        return (
            <div>
                <Dossier user={user}></Dossier>
            </div>
        )
}

export default DossierPage