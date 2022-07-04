import { api } from '@/config/axios/index';

export default {
    userLogin(email, password) {
        return api({
            method: 'POST',
            url: `${process.env.VUE_APP_API_ROUTE}User/login`,
            data: { Email: email, Password: password },
        });
    }
};