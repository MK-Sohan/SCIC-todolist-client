import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "react-query";
const EditTodo = () => {
  const navigate = useNavigate();
  const { todoid } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const info = {
      name: data.name,
      description: data.description,
    };
    fetch(`https://infinite-spire-80356.herokuapp.com/updatetodo/${todoid}`, {
      method: "PUT",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        toast("Your To-Do List Updted");
        navigate("/todo");
      });
  };

  const { data: singlevalue } = useQuery("singaldata", () =>
    fetch(
      `https://infinite-spire-80356.herokuapp.com/singleTodo/${todoid}`
    ).then((res) => res.json())
  );
  console.log(singlevalue);

  return (
    <div className="h-screen">
      <div className="h-full  w-full  px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
              role="heading"
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
            >
              Edit your To-Do
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  To-Do Name
                </lable>

                <input
                  aria-label="enter email adress"
                  defaultValue={singlevalue?.name}
                  role="input"
                  type="text"
                  className="bg-gray-200 text-xl border rounded focus:outline-none  font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Description
                </lable>
                <textarea
                  aria-label="enter email adress"
                  role="input"
                  defaultValue={singlevalue?.description}
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "description is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.cidescriptionyty?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.descriptiony.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="mt-8">
                <button
                  role="button"
                  aria-label="create my account"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
