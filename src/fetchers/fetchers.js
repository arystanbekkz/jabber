
import { addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../firebase/firebase";

export const sendMessage = async (chatId, user, message) => {
    const date = new Date();
    const docRef = doc(db, `chats/${chatId}/messages/${String(date)}`);
    const docRefLast = doc(db, `lastMessages`, chatId);
    const payload = {
        timestamp: Timestamp.fromDate(date),
        message: message,
        uid: user.uid,
        photo: user.photo,
        email: user.email,
        displayName: user.displayName
    };
    await setDoc(docRef, payload);
    await setDoc(docRefLast, payload);
}