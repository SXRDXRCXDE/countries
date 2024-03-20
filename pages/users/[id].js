import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer/MainContainer";
import axios from "axios";


export default function ({user}) {

    const {query} = useRouter()



    return(
        <MainContainer keywords={`User ${user.name}`}>
            <div>User {query.id} id</div>
            <div>USER {user.name} Name</div>

        </MainContainer>
    )
}



export async function getServerSideProps({params}) {
    try {
        // Выполнение GET-запроса к API
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const user = response.data;

        return {
            props: {
                user,
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                user: [],
            },
        };
    }
}