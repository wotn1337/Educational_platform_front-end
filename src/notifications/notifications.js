import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const successNotification = (text) => {
	toast.success(text, {autoClose: 2000});
}