import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const successNotification = (text) => {
	toast.success(text);
}

export const errorNotification = () => {
	toast.error('Что-то пошло не так :(');
}