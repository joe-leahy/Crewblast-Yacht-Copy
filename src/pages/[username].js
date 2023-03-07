import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { db, auth } from "../../firebase";

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
    <div>
    <p>Name: {user.name}</p>
    <p>Phone: {user.phone}</p>
    <p>Position: {user.position}</p>
    <p>Email: {user.email}</p>
    <p>Credential: {user.credential}</p>
    <p>Country: {user.country}</p>
  </div>
  )
};

export default CrewProfile;