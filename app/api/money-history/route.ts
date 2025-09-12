import { getMoneyHistory } from "@/actions/getMoneyHistory";
import { auth } from "@/auth";


export async function GET() {
    const session = await auth();
    if(!session?.user?.id) {
        return new Response("Unauthroized", {status: 401})
    } 

    const data = await getMoneyHistory(session.user.id)
    return new Response(JSON.stringify(data), {status: 200})
}