import React from "react";

const NotFoundPage = (props) => {
    const { match: { params: { userId } }, history } = this.props;

    const toHomePage = () => {
        history.push('/home');
    };
    // todo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    return <div>
        <div>
            <button onClick={toHomePage}>back to home page</button>
        </div>
        Page not found</div>
};

export default NotFoundPage;