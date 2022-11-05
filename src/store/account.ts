import { defineStore } from 'pinia'
import { CookieDao } from "../utils"

const tokenStr = "token";
export const account = defineStore('account', {
    state: () => {
        return {
            auth: false,
            Dao: new CookieDao()
        }
    },
    getters: {
        // 檢查權限
        isAuth: (state) => {
            let token = state.Dao.read<string>(tokenStr);
            if (token !== null && token !== "") {
                state.auth = true;
                return state.auth;
            } else {
                state.auth = false;
                return state.auth;
            }
        }
    },
    actions: {
        // 將jwt存入session
        setJwt(jwt: string) {
            this.$state.Dao.create(tokenStr, jwt);
            this.$state.auth = true;
        },
        // 清除jwt
        clearJwt() {
            this.$state.Dao.delete(tokenStr);
            this.$state.auth = false;
        }
    }
})