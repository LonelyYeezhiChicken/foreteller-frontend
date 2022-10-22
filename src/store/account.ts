import { defineStore } from 'pinia'


export const account = defineStore('account', {
    state: () => {
        return {
            auth: false,
        }
    },
    getters: {
        // 檢查權限
        isAuth: (state) => {
            let status = sessionStorage.getItem("set");
            if (status !== null) {
                let jsonObj = JSON.parse(status);
                state.auth = jsonObj.auth as boolean;
                return state.auth;
            } else {
                state.auth = false;
                return state.auth;
            }
        }
    },
    actions: {
        // 將jwt存入token
        setJwt(jwt: string) {
            console.log(jwt);
            sessionStorage.setItem('set', JSON.stringify({ auth: jwt }));
            this.$state.auth = true;
        }
    }
})