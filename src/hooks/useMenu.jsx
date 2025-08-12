import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useMenu = () => {
    const axiosPublic = useAxiosPublic()

    const { data: menu = [], refetch, isPending: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })


    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-liard-theta.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])


    return [menu, refetch, loading]
}

export default useMenu;