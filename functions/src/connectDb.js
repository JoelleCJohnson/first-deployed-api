import { initializeApp,cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "./creds.js";

initializeApp({
    credential: cert(creds),
})

const db = getFirestore()

export default db //could also put export before const on line 9. default export wont need cury braces upon import. 