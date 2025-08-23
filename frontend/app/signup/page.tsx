import React, { Suspense } from "react";
import Signup from "./Signup";
import Loading from '@/app/loadingComp';

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Signup />
      </Suspense>
    </>
  );
};

export default page;
