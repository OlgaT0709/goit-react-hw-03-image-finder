import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function catchError(error) {
    toast.error('Incorrect request, please try again!', {
        position: toast.POSITION.TOP_RIGHT
    })
  ;
    console.error('Error stack: ', error.stack);
    };

    