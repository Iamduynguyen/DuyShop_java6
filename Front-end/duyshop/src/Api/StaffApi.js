
import { axiosApi } from "./AxiosApi";

const StaffApi = {

        getAll() {
            const url = `/api/staffsession`;
            return axiosApi.get(url);
        }
}

export default StaffApi;