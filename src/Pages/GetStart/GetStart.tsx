import { Button } from "@nextui-org/react";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
import { auth, provider } from '../../firebase/config';
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserInfo } from "../../InterFace/userInterFace";
import { useNavigate } from "react-router-dom";

const GetStart = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    console.log(userInfo)
    const navigate=useNavigate()
    const words = [      
        {
            text: "Watch ",
            className: "text-white",
        },
        {
            text: "the ",
            className: "text-white",
        },
        {
            text: "magic  ",
            className: "text-white",
        },
        {
            text: "of  ",
            className: "text-white",
        },
        {
            text: "preset.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const handleClick = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            const userInfo: UserInfo = {
                email: user.email || "",
                profileImage: user.photoURL || "",
                profileName: user.displayName || ""
            };
            setUserInfo(userInfo);
            localStorage.setItem("email", userInfo.email);
            localStorage.setItem("profileImage", userInfo.profileImage);
            localStorage.setItem("profileName", userInfo.profileName);
            if(userInfo.email){
                navigate('/home');
            }
        }).catch((error) => {
            console.error(error);
        });
    };
    
    useEffect(() => {
        const email = localStorage.getItem("email");
        const profileImage = localStorage.getItem("profileImage");
        const profileName = localStorage.getItem("profileName");
        if (email && profileImage && profileName) {
            const userInfo: UserInfo = {
                email,
                profileImage,
                profileName
            };
            setUserInfo(userInfo);
            navigate('/home');
        }
    }, []);




    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <>
                <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
                    The road to freedom starts from here
                </p>
                <TypewriterEffect words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                    <Button onClick={handleClick} color="primary" variant="bordered">
                        Sign in with Google
                    </Button>
                </div>
            </>
        </div>
    );
};

export default GetStart;
