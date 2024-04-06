import React from "react";
import SearchInput from "./Search/SearchInput";
import { useTheme } from "../Context/ToggleTheme";
const Home = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <main
        className={`flex items-center justify-center h-[900px] max-lg:px-3 w-full   
       
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
