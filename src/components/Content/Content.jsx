import React from "react";
import { useTheme } from "../Context/ToggleTheme";
const Content = ({ user, loading }) => {
  const { toggleTheme } = useTheme();
  const formattedJoinedDate = user?.created_at ? (
    new Date(user.created_at).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  ) : (
    <span>25 Jan 2011</span>
  );

  return (
    <>
      {loading ? (
        <section
          className={`h-[300px] flex  items-center justify-center  w-full ${
            toggleTheme ? " bg-[#1f2a48]" : "bg-[#646464]"
          }  rounded-xl p-5 text-white`}
        >
          <div class="custom-loader"></div>
        </section>
      ) : (
        <section
          className={`h-auto   flex  flex-col  w-full ${
            toggleTheme
              ? "bg-[#1f2a48] text-white "
              : " bg-white shadow shadow-[#24232393] text-black"
          } rounded-xl p-5 max-sm:p-3 `}
        >
          <section className="flex max-lg:flex-col ">
            <img
              src={user?.avatar_url || "/default.png"}
              alt=""
              className="h-[100px] mt-5 rounded-full  max-lg:w-[100px] max-lg:h-[100px] max-lg:mx-auto"
            />
            <section className="w-full vh-full  p-5 max-lg:px-0">
              <section className="flex items-center justify-between">
                <h1 className="font-bold text-xl">
                  {user?.login || "The Octocat"}
                </h1>
                <span className="text-sm ">Joined {formattedJoinedDate}</span>
              </section>
              <span className="text-[#0663cc]"> @{user?.name || "concat"}</span>
              <p className="mt-5 text-sm  ">
                {user?.bio || " This profile has no bio "}
              </p>
            </section>
          </section>
          <section className="flex flex-col ml-28  max-lg:mx-0 w-full">
            <section
              className={`w-full h-[80px] flex  justify-between px-5 py-3 text-[12px] mt-6 rounded-xl  ${
                toggleTheme
                  ? "bg-[#141c2f] text-white"
                  : "bg-[#f5f8ff] text-black"
              }`}
            >
              <section>
                <span className="text-[#9fa3a9]">Repos</span> <br />
                <span className="text-xl font-bold">
                  {user?.public_repos || 0}
                </span>
              </section>
              <section>
                <span className="text-[#9fa3a9]"> Followers</span>
                <br />
                <span className="text-xl font-bold">
                  {user?.followers || 0}
                </span>
              </section>
              <section>
                <span className="text-[#9fa3a9]">Following</span>
                <br />
                <span className="text-xl font-bold">
                  {user?.following || 0}
                </span>
              </section>
            </section>
            <section
              className={`flex text-[12px] gap-10 mt-7 w-full flex-wrap max-sm:gap-3  ${
                toggleTheme ? "text-white" : "text-black"
              }`}
            >
              <section className="w-full flex flex-wrap   ">
                <section className="flex  fitems-center gap-3">
                  <img
                    src={
                      toggleTheme
                        ? "/icon-location.svg"
                        : "/icon-location-dark.svg"
                    }
                    alt=""
                  />

                  <span className=" ">
                    {user?.location || (
                      <span className="text-[#848a9c] "> Not available</span>
                    )}
                  </span>
                </section>
                <section className="flex items-center gap-3 mt-3">
                  <img
                    src={
                      toggleTheme
                        ? "/icon-website.svg"
                        : "/icon-website-dark.svg"
                    }
                    alt=""
                    className="h-5"
                  />
                  <span>
                    {user?.blog || (
                      <span className="text-[#848a9c]"> Not available</span>
                    )}
                  </span>
                </section>
              </section>
              <section className="w-full">
                <section className="flex items-center gap-3">
                  <img
                    src={
                      toggleTheme
                        ? "/icon-twitter.svg"
                        : "icon-twitter-dark.svg"
                    }
                    alt=""
                    className="h-5"
                  />
                  <span>
                    {user?.twitter || (
                      <span className="text-[#848a9c]"> Not available</span>
                    )}
                  </span>
                </section>
                <section className="flex  items-center gap-3 mt-3">
                  <img
                    src={
                      toggleTheme
                        ? "/icon-company.svg"
                        : "/icon-company-dark.svg"
                    }
                    alt=""
                    className="h-5"
                  />
                  <span>
                    {user?.company || (
                      <span className="text-[#848a9c]"> Not available</span>
                    )}
                  </span>
                </section>
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Content;
