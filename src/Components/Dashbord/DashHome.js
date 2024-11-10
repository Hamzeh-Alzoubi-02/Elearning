import { Link } from 'react-router-dom';
import logo from '../IMg/—Pngtree—how to e learning_6555189.png'
export default function DashHome() {
    return (
        <div className="DashHome">
            <Link to="/">
            <img src={logo} width="100px"/></Link>
            <h1> الصفحة الرئيسية</h1>
        </div>
    );
}