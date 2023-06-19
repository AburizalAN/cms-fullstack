"use client";

import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import * as React from "react";
import { Button } from "@/components/reusable";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import useSWRHandler from "@/hooks/useSWR";

type Inputs = {
  username: string
  password: string
}

const Dashboard = () => {
  const passRef = React.useRef<HTMLInputElement>(null);
  const [passVisible, setPassVisible] = React.useState<boolean>(false);
  // const { data } = useSWRHandler();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const togglePassword = () => {
    const passElement: any = passRef.current;
    const type: string = passElement.type;
    if (type === "password") {
      passElement.type = "text";
      setPassVisible(true);
    } else {
      passElement.type = "password";
      setPassVisible(false);
    }
  }

  return (
    <div className="h-full grid place-items-center">
      <div className="border rounded-xl p-4 w-[500px] shadow-lg shadow-indigo-50">
        <h4 className="font-semibold text-center mb-3">Login</h4>
        <form>
          <div className="mb-3">
            <Controller
              name="username"
              control={control}
              rules={{
                required: { value: true, message: "Email harus diisi" },
              }}
              render={({ field }) => (
                <input
                  placeholder="Username"
                  type="text"
                  className="input shadow-none"
                  {...field}
                />
              )}
            />
            {errors?.username ? (
              <div className="text-xs leading-relaxed text-red-500">{errors.username.message}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <Controller
              name="password"
              control={control}
              rules={{
                required: { value: true, message: "Password harus diisi" }
              }}
              render={({ field }) => (
                <div className="input shadow-none flex items-center">
                  <input
                    placeholder="Password"
                    type="password"
                    className="outline-none w-full flex-1"
                    {...field}
                  />
                  <button onClick={togglePassword}>
                    {!passVisible ? (
                      <MdOutlineVisibility size={16} className="text-gray-500" />
                    ) : (
                      <MdOutlineVisibilityOff size={16} className="text-gray-500" />
                    )}
                  </button>
                </div>
              )}
            />
            {errors?.password ? (
              <div className="text-xs leading-relaxed text-red-500">{errors.password.message}</div>
            ) : null}
          </div>
          <Button onClick={handleSubmit(onSubmit)} type="submit" className="mt-5" block>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;