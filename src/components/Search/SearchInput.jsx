import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { userInputSchema } from "../../Schema/SearchInputSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoSearchOutline } from "react-icons/io5";
import Content from "../Content/Content";
import { UserInput } from "../../Api/UserInput";
import { useTheme } from "../../Context/ToggleTheme";
const SearchInput = () => {
  const [inputValues, setInputValues] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const { toggleTheme, handleToggleTheme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userInputSchema),
    search: "",
  });
  const onSubmit = data => {
    setInputValues(data);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await UserInput(inputValues.search);
        setUser(response);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [inputValues.search]);

  return (
    <>
      <section
        className={`h-32 ${toggleTheme ? "text-white" : " text-black"}  `}
      >
        <section className=" flex justify-between ">
          <h1 className=" font-bold text-xl "> devfinder</h1>
          <section
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleToggleTheme}
          >
            {toggleTheme ? (
              <React.Fragment>
                <span className=" uppercase  text-[12px]">Light </span>
                <img src="/icon-sun.svg" alt="" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span className=" uppercase  text-sm">Dark </span>
                <img src="/icon-moon.svg" alt="" />
              </React.Fragment>
            )}
          </section>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className=" relative">
            <input
              type="text"
              className={`w-full h-14 px-14  ${
                toggleTheme
                  ? " bg-[#1f2a48] text-[#bfc3a5] "
                  : "bg-white shadow shadow-[#24232393] text-black "
              }  border-none rounded-xl   focus:outline-none    mt-8 `}
              placeholder="Search Github username..."
              {...register("search")}
            />
            <span className="absolute top-12 text-[#095bba] text-2xl  left-5">
              <IoSearchOutline />
            </span>

            <button
              type="submit"
              className="h-10 w-20 bg-[#0078fe] absolute right-2 text-white rounded-md top-10 text-sm font-semibold"
            >
              Search
            </button>
          </section>
        </form>
      </section>
      {errors.search && (
        <p className=" text-red-500 text-sm mb-3">{errors.search.message}</p>
      )}
      <Content user={user} loading={loading} />
    </>
  );
};

export default SearchInput;
