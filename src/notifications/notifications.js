import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const successNotification = (text) => {
	toast.success(text);
}

export const errorNotification = (text = 'Что-то пошло не так :(') => {
	toast.error(text);
}

export const wrongGameNotification = (text = 'Это неверно :(') => {
	toast.error(text);
}