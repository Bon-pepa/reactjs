import React from "react";

interface IUser {
    emp_no: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: string,
    hire_date: string
}

interface DetailProps {
    user: IUser
}

class Detail extends React.Component<DetailProps> {
    render() {
        const {user} = this.props;

        return <>
            <ul>
                <li>Номер: {user.emp_no}</li>
                <li>ФИО: {user.last_name} {user.first_name} </li>
                <li>Дата рождения: {user.birth_date}</li>
                <li>Гендер: {user.gender}</li>
                <li>Трудоустроен: {user.hire_date}</li>
            </ul>
        </>;
    }
}

export default Detail;