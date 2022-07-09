import { api } from '@/config/axios/index';

export default {
    getRound() {
        return api({
            method: 'GET',
            url: `${process.env.VUE_APP_API_ROUTE}Round`,
        });
    }
};