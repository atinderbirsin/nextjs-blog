import { useRouter } from "next/router"

export default function Param() {
    const router = useRouter();
    const { params } = router.query;

    return (
        <>
            <h1>
                {params}
            </h1>
        </>
    )
};

