import React, { Suspense } from 'react'
import ResetPawword from "./ResetPassword";
import Loading from '@/app/loadingComp';

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ResetPawword />
      </Suspense>
  </>
  )
}

export default page