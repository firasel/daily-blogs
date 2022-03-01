import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import TimeagoReact from "timeago-react";
import ErrorToast from "../../../helper/ErrorToast";
import SuccessToast from "../../../helper/SuccessToast";
import Loading from "../Loading/Loading";

const DraftPost = () => {
  const [draftPost, setDraftPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const { data: session } = useSession({});

  // Post get from backends
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/post", {
        headers: { email: session?.user?.email, type: "draft" },
      })
      .then((res) => {
        setLoading(false);
        setDraftPost(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err?.response?.status === 404 || err?.response?.status === 400) {
        } else {
          ErrorToast("Please reload this page.");
        }
      });
  }, [reload]);

  const handlePublish = (_id) => {
    axios
      .put(
        "/api/post",
        { _id, publish: true },
        { headers: { email: session?.user?.email } }
      )
      .then((res) => {
        if (res.data.status) {
          SuccessToast("Post published successful.");
        }
        setReload(!reload);
      })
      .catch((err) => {
        setReload(!reload);
        ErrorToast("Please try again.");
      });
  };

  const handleDelete = (_id) => {
    axios
      .put(
        "/api/post",
        { _id, deleted: true },
        { headers: { email: session?.user?.email } }
      )
      .then((res) => {
        if (res.data.status) {
          SuccessToast("Post deleted successful.");
        }
        setReload(!reload);
      })
      .catch((err) => {
        setReload(!reload);
        ErrorToast("Please try again.");
      });
  };

  return (
    <div className="font-[Poppins]">
      <h4 className="font-semibold text-xl md:text-2xl mb-5">Draft Posts</h4>
      {loading && <Loading />}
      {!loading && draftPost?.length > 0 && (
        <div className="md:modifyContainer">
          <div className="w-full xl:w-5/6 mx-auto border-[1px] border-gray-400 rounded-md">
            {draftPost?.map((data, index) => (
              <div
                key={index}
                className="px-2 py-2 md:flex items-center justify-between border-b-[1px] border-gray-300"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {data.title}
                  </h2>
                  <h5 className="text-gray-500 text-sm md:text-base">
                    CreatedAt: <TimeagoReact datetime={data.createdAt} />
                  </h5>
                </div>
                <div className="flex gap-3 md:gap-4 mt-2 md:mt-0">
                  <button
                    onClick={() => handlePublish(data._id)}
                    className="px-2 py-1 md:py-2 bg-[#fe5f55] text-white md:font-semibold rounded-md tracking-wider transition-all duration-200 hover:scale-95"
                  >
                    Publish
                  </button>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="px-1 md:px-2 py-1 md:py-2 text-white bg-gray-400 hover:bg-red-400 transition-all duration-200 hover:shadow-md font-semibold rounded-md tracking-wider flex items-center gap-1 hover:scale-95"
                    title="Delete"
                  >
                    <AiTwotoneDelete className="text-xl md:text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!loading && draftPost?.length === 0 && (
        <div>
          <h2 className="mt-5 text-xl text-center">
            No draft posts available.
          </h2>
        </div>
      )}
    </div>
  );
};

export default DraftPost;
