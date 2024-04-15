import {useEffect, useState} from 'react';
import { UserApi } from './modules/services/UserApi';
import { addUsers } from './modules/reducers/userSlice';
import {useAppDispatch, useAppSelector} from "./modules/hooks/redux.ts";
import {UserType} from "./modules/types/userType.ts";
import Card from "./components/card/card.tsx";

function MainPage() {
    const [page, setPage] = useState<number>(1)
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.users)
    const { data: data, isFetching } = UserApi.useFetchUserQuery({ page: page });



    useEffect(() => {
        if (data) {
            dispatch(addUsers(data));
        }
    }, [dispatch, data]);

    const handleScroll = (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (Math.round(scrollHeight - scrollTop) === clientHeight) {
            setTimeout(() => {
                setPage((prevPage) => prevPage + 1);
            }, 1500)
            //задержка чтобы при быстром скролле не нагуржать апишку чтобы не приходил 429 код
        }
    };

    return (
        <main onScroll={handleScroll} className="App">
            {users &&
                users.map((user: UserType, idx: number) => (
                    <Card props={user} key={idx} />
                ))}
            {isFetching && <p>Загрузка...</p>}
        </main>
    );
}

export default MainPage;