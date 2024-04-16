import React from "react";
import SearchInput from "./Search/SearchInput";
const Home = () => {
  return (
    <>
      <main
        className={`flex items-center justify-center h-[900px] max-lg:px-3 w-full   dark:bg-[#f5f7ff] bg-[#141c2f]  
       
        `}
      >
        <section className="w-[600px] h-[750px] text-[#141c2f]  max-md:w-full max-xs:mt-10 ">
          <SearchInput />
        </section>
      </main>
    </>
  );
};

export default Home;
