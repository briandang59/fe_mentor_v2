import { APIS } from '@/lib/apis';

async function Rooms() {
    const health = await APIS.health();
    return <div>{JSON.stringify(health)}</div>;
}

export default Rooms;
