import React from "react";
import { useTheme } from "../../Context/ToggleTheme";
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
        <section className="h-[300px] flex  items-center justify-center  w-full   bg-[#1f2a48] dark:bg-[#646464] rounded-xl p-5 dark:text-white ">
          <div class="custom-loader"></div>
        </section>
      ) : (
        <a href={user?.html_url} target="_blank" rel="noreferrer">
          <section className="h-auto   flex  flex-col  w-full   bg-[#1f2a48] text-white    dark:bg-white shadow shadow-[#24232393] dark:text-black  rounded-xl p-5 max-sm:p-3 max-sm:pb-5 ">
            <section className="flex gap-5 ">
              <img
                src={user?.avatar_url || "/default.png"}
                alt=""
                className="h-[100px] mt-5 rounded-full w max-lg:w-[100px] max-lg:h-[100px] max-lg:mx-auto"
              />
              <section className="w-full vh-full  py-5 max-lg:px-0">
                <section className="flex max-md:flex-col items-center max-md:items-start justify-between">
                  <h1 className="font-bold text-xl">
                    {user?.login || "The Octocat"}
                    <span className="text-[#0663cc]">
                      {" "}
                      <br /> @{user?.name || "concat"}
                    </span>{" "}
                  </h1>
                  <span className="text-sm ">Joined {formattedJoinedDate}</span>
                </section>

                <p className="mt-5 text-sm  ">
                  {user?.bio || " This profile has no bio "}
                </p>
              </section>
            </section>
            <section className="flex flex-col ml-28  max-lg:mx-0 ">
              <section className="w-full h-[80px] flex  justify-between px-5 py-3 text-[12px] mt-6 rounded-xl    bg-[#141c2f] text-white   dark:bg-[#f5f8ff] dark:text-black ">
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
              <section className="flex  max-sm:flex-col text-[12px] gap-10 mt-7 w-full  max-sm:gap-3 max-sm:ml-4    dark:text-black ">
                <section className="w-full  max-sm:flex max-sm:flex-col  ">
                  <section className="flex  items-center gap-3">
                    <img
                      src={
                        toggleTheme
                          ? "/icon-location-dark.svg"
                          : "/icon-location.svg"
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
                          ? "/icon-website-dark.svg"
                          : "/icon-website.svg"
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
                <section className="w-full  max-sm:flex max-sm:flex-col  ">
                  <section className="flex items-center gap-3">
                    <img
                      src={
                        toggleTheme
                          ? "icon-twitter-dark.svg"
                          : "/icon-twitter.svg"
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
                          ? "/icon-company-dark.svg"
                          : "/icon-company.svg"
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
        </a>
      )}
    </>
  );
};

export default Content;
