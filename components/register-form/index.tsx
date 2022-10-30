import { useState } from "react";
import * as yup from "yup";
import {
    UseFormRegisterReturn,
    FieldError,
    useForm,
    SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { errorFormatter } from "../../utils/error-formatter";
import { registerAPI } from "../../api/auth.api";

type InputProps = {
    type?: "text" | "password" | "phone";
    placeholder: string;
    autoComplete: string;
    register: UseFormRegisterReturn<string>;
    error: FieldError | undefined;
    labelName: string;
};

type RegisterState = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
    retype: string;
};

const registerSchema = yup.object().shape({
    firstname: yup.string().required("firstname is required"),
    lastname: yup.string().required("lastname is required"),
    phone: yup
        .string()
        .max(13, "Number cannot be more than 13 characters")
        .required("phone number is required"),
    email: yup.string().required().email("invalid email"),
    password: yup
        .string()
        .required()
        .min(8)
        .max(32)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g,
            "Use at least 8 characters, 1 number, 1 upper case letter and a special character"
        ),
    retype: yup
        .string()
        .required("password required")
        .oneOf([yup.ref("password"), null], "passwords must match"),
});

const CustomInput = ({
    autoComplete,
    error,
    placeholder,
    register,
    type,
    labelName,
}: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className='w-full'>
            <label className='text-[#828282] text-sm block mb-1'>
                {labelName}
            </label>
            <div className=' relative   flex justify-between items-center'>
                <input
                    type={isPasswordVisible ? "text" : type}
                    placeholder={placeholder}
                    {...register}
                    autoComplete='off'
                    className={`w-full outline-none  bg-transparent py-1 px-2 text-sm  border border-[#BDBDBD] rounded-xl h-[2.6rem] pr-5`}
                />
                {type === "password" && (
                    <button
                        type='button'
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                        className='absolute z-30  right-4 top-[25%] text-sm text-[#BDBDBD] capitalize'>
                        {isPasswordVisible ? "Hide" : "Show"}
                    </button>
                )}
            </div>
            <span className=' mt-1 h-2 block lowercase text-xs text-red-500'>
                {error && error.message}
            </span>
        </div>
    );
};

export const RegisterForm = () => {
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RegisterState>({
        resolver: yupResolver(registerSchema),
    });

    const submitHandler: SubmitHandler<RegisterState> = async (data) => {
        try {
            setLoadingSubmit(true);
            const { data: axiosResponse } = await registerAPI(data);
            toast.success("Registration Successful");

            setTimeout(() => {
                toast.success(
                    axiosResponse?.message || `OTP sent to ${data.phone}`
                );
            }, 1500);
        } catch (error) {
            const message = errorFormatter(error);
            console.log(message);
            toast.error(message);
        } finally {
            setLoadingSubmit(false);
        }
    };

    return (
        <form
            className='flex flex-col gap-y-6'
            onSubmit={handleSubmit(submitHandler)}
            autoComplete='off'>
            <div className='flex flex-col md:flex-row gap-y-6 md:gap-y-0 justify-between'>
                <div className='md:flex-[0.48]'>
                    <CustomInput
                        autoComplete='firstname'
                        error={errors.firstname}
                        placeholder='First Name'
                        register={register("firstname")}
                        labelName='First Name'
                    />
                </div>
                <div className='md:flex-[0.48]'>
                    <CustomInput
                        autoComplete='lastname'
                        error={errors.lastname}
                        placeholder='Last Name'
                        register={register("lastname")}
                        labelName='Last Name'
                    />
                </div>
            </div>

            <CustomInput
                error={errors.email}
                labelName='Email Address'
                autoComplete='current-user'
                placeholder='Email Address'
                register={register("email")}
            />

            <CustomInput
                error={errors.phone}
                autoComplete='phone number'
                labelName='Phone Number'
                placeholder='Phone Number'
                register={register("phone")}
                type='phone'
            />

            <CustomInput
                error={errors.password}
                autoComplete='password'
                labelName='Password'
                placeholder='Password'
                register={register("password")}
                type='password'
            />

            <CustomInput
                error={errors.retype}
                autoComplete='confirm Password'
                labelName='Confirm Password'
                placeholder='Confirm Password'
                register={register("retype")}
                type='password'
            />

            <div className='mt-2'>
                <button className='h-[2.6rem] bg-[#8661FF]  text-sm text-center rounded-xl  w-full text-white'>
                    {loadingSubmit ? "Loading..." : "Open my account"}
                </button>
            </div>
        </form>
    );
};

CustomInput.defaultProps = {
    type: "text",
};
