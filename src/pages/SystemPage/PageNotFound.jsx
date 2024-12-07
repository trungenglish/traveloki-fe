import {Button, Result} from 'antd';
import {useRouteError} from "react-router-dom";

export const PageNotFound = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}