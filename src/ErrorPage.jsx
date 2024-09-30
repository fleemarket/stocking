import { useRouteError } from "react-router-dom";

import ErrorIcon from "@mui/icons-material/Error";
import { red } from "@mui/material/colors";

export default function ErrorPage() {
    const errorInfo = useRouteError();
    return (
        <div className="p-4">
            <div className="flex flex-row text-4xl">
                {" "}
                <ErrorIcon
                    fontSize="large"
                    className="mt-1 mr-1"
                    sx={{ color: red[500] }}
                />
                ERROR OCCURED !
            </div>
            <div className="text-2xl">
                {errorInfo.status} - {errorInfo.statusText}
                {errorInfo}
            </div>
            <div className="text-2xl">{errorInfo.data}</div>
        </div>
    );
}
