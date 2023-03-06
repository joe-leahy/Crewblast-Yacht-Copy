import React from 'react'
import { getStorage, ref } from "firebase/storage";
import { storage } from '../../firebase';
function PrivacyPolicy() {
  const policyRef = ref(storage, 'gs://crewblastyacht.appspot.com/documents/CBYPrivacyPolicy.pdf');
  console.log(policyRef)

  return (
    <div>
      Privacy Policy
    </div>
  )
}

export default PrivacyPolicy
