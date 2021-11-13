import {ServerAPI} from "./AxiosAPI";
import {getSessionStorage} from "./UtilsAPI";

export const WishlistAPI = {
    update(obj) {
        let url = "/wish-list"
        return ServerAPI.post(url, obj);
    },
    findAllWishlistByUserLogin() {
        let url = `/wish-list/get-by-user-login?id=${getSessionStorage("id_user_login")}`
        return ServerAPI.get(url)
    }
}