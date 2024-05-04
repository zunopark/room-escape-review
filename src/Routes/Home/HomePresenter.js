import Theme from "../../Components/Theme"
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import Header from "../../Components/Header";

const HomePresenter = ({data}) => {
  // 결국 유저 데이터는 최상단으로 빼거나 context API 등으로 전역으로 관리해야 한다. 
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log(data)

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((data) => {
            setUserData(data.user);
            console.log(data); // console에 UserCredentialImpl 출력
          })
          .catch((err) => {
            console.log(err);
          });
      }

    useEffect(() => {
        // onAuthStateChanged(auth, (user) => {
        //     if (user && user.accessToken) {
        //         console.log(user)
        //         setIsLoggedIn(true);
        //     } else {
        //         setIsLoggedIn(false);
        //     }
        //   });
    }, [])

    return (
        <>
    {/* <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>로그인</button>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div>
        {userData
          ? "당신의 이름은 : " + userData.displayName
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
    </div> */}
        <Header />
        <div className="section">
            {data.map((item, id) => (
              <Theme key={id} item={item} />
            ))}
        </div>
        </>
    );
}

export default HomePresenter;