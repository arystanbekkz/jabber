import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users";
import "./NotFound.css";

const NotFound = () => {
    const user = useSelector(selectUser);
    return (
        <div className="notFound__page">
            <div className="notFound__content">
                <h2>404</h2>
                <h3>Page not found</h3>
                <p>The resourse requested could not be found! 
                    But you can go to the <Link to={user ? "/chats" : "/"}>
                        app page.
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound;