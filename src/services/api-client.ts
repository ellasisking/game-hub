import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '76c76dce0bee40f3ba8409e687b82bfe'
    }
})