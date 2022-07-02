
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import db from "../firebase/firebase";

export const sendMessage = async (chatId, user, message) => {
    const docRef = doc(db, `chats/${chatId}/messages/${String(new Date())}`);
    const payload = {
        timestamp: serverTimestamp(),
        message: message,
        uid: user.uid,
        photo: user.photo,
        email: user.email,
        displayName: user.displayName
    };
    await setDoc(docRef, payload);
}