
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { db, auth } from "../../firebase";
import Background from "@/Components/Background";

const CrewProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  async function getUser(username) {
    const userRef = db.collection('crewmembers').doc(username);
    const doc = await userRef.get();
    if (!doc.exists) {
      router.push('/404');
      return;
    }
    setUser(doc.data());
  }

  useEffect(() => {
    const { username } = router.query;
    if (username) {
      getUser(username);
    }
  }, [router.query]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-[#363636] text-white h-screen overflow-scroll justify-center items-center">
<Background />
  {/* card */}
  <div className="flex flex-col bg-[rgba(255,255,255,.75)] text-gray-500
    h-[500px] w-[500px] justify-center items-center rounded-xl">
  <p>Name: {user.name}</p>
    <p>Phone: {user.phone}</p>
    <p>Position: {user.position}</p>
    <p>Email: {user.email}</p>
    <p>Credential: {user.credential}</p>
    <p>Country: {user.country}</p>
    <a href='#index'>Home</a>
  </div>
  </div>
  )
};

export default CrewProfile;
