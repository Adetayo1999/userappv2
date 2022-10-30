import { AxiosError } from "axios";

export const errorFormatter = (error: unknown) => {
    let message = "Unknown Error";

    if (error instanceof AxiosError) {
        if (error?.response?.data?.error) {
            message = "";
            Object.values(error?.response?.data?.error).map((error) => {
                message += `\n - ${error}`;
            });
        }
    } else if (error instanceof Error) message = error.message;

    return message;
};
