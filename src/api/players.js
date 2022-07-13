import { api } from '@/config/axios/index';

export default {
    getPlayers() {
        return api({
            method: 'GET',
            url: `${process.env.VUE_APP_API_ROUTE}Player`,
        });
    }
};