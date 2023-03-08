
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { db, auth } from "../../firebase";
import Background from "@/Components/Background";
import Link from "next/link";

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
    h-[500px] w-[500px] justify-around items-center rounded-xl">
      <h3 className="text-black mx-auto uppercase tracking-[13px] md:tracking-[20px] text-2xl pb-5">
        Crew Profile
      </h3>
    <span className="text-left">Name: 
    <span className="text-black text-right">{user.name}</span>
    </span>
    <span className="text-left">Email: 
    <span className="text-black text-right">{user.email}</span>
    </span>
    <span className="text-left">Positon: 
    <span className="text-black text-right">{user.position}</span>
    </span>
    <span className="text-left">Credential: 
    <span className="text-black text-right">{user.credential}</span>
    </span>
    <span className="text-left">Country: 
    <span className="text-black text-right">{user.country}</span>
    </span>
    <span className="text-left">Phone: 
    <span className="text-black text-right">{user.phone}</span>
    </span>
    
    <Link href="/#home"><button className="text-black">Home</button></Link>
  </div>
  </div>
  )
};

export default CrewProfile;
