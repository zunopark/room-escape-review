import { db } from "../firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

            // const q = query(collection(db, "Theme"), where("id", "==", themeId));
            // const result = await getDocs(q);

export const ThemeApi = {
    getAllDocs: async () => {
        const result = await getDocs(collection(db, "Theme"));
        const response = [];
        result.forEach((doc) => {
            response.push({
                ...doc.data(),
                id : doc.id
            })
        });
        return response;
    },  

    getOneDoc: async (themeId) => {
        try {
            const docRef = doc(db, "Theme", themeId);
            const result = await getDoc(docRef);
            if (result.exists()) {
                return result.data();
            } else {
                console.log("Document does not exist")
            }
        } catch (err) {
            console.log(err)
        }
    }

};