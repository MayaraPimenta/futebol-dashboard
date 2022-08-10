import { api } from '@/config/axios/index';

export default {
    getVoteAverage() {
        return api({
            method: 'GET',
            url: `${process.env.VUE_APP_API_ROUTE}Vote/average`,
        });
    }
};