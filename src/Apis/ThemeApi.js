import { db } from "../firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

export const ThemeApi = {
    // 모든 테마 가져오기
    getAllDocs: async () => {
        try {
            const result = await getDocs(collection(db, "Theme"));
            const response = [];
            result.forEach((doc) => {
                response.push({
                    ...doc.data(),
                    id : doc.id
                })
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    },  

    // 테마 아이디로 테마 한개 가져오기
    getOneDoc: async (themeId) => {
        if (!themeId) return false;
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
    },

    // 카테고리에 해당하는 테마 전부 가져오기
    getAllDocsByCategory : async (category) => {
        if (!category) return false;
        try {
            const q = query(collection(db, "Theme"), where("category", "==", category));
            const result = await getDocs(q);
            const response = [];
            result.forEach((doc) => {
                response.push({
                    ...doc.data(),
                    id : doc.id
                })
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    },  
    
    // 

};