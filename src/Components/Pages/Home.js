import { Link } from "react-router-dom";
import file from "../IMg/Circle-icons-document.svg.png";
import calculator from "../IMg/—Pngtree—vector calculator icon_3782871.png";
import plans from "../IMg/pngegg.png";
import email from "../IMg/15cb2123511a9cb25f66ebc4f5d3ed4d.png";
import DashHome from "../Dashbord/DashHome";

export default function Home() {
    return (
        <div className="Home">
            <DashHome />
            <div className="content">
                <div className="email">
                    <img src={email} alt="Email Icon" width={"100px"} />
                    <div dir="rtl">تواصل مع معلمك الإلكتروني</div>
                    <Link to="/contact">تواصل</Link>
                </div>
                <div className="calc">
                    <img src={calculator} alt="Calculator Icon" width={"100px"} />
                    <div dir="rtl">يمكنك حساب معدلك الفصلي والتراكمي</div>
                    <Link to="/calculate">أحسب</Link>
                </div>
                <div className="mui">
                    <img src={plans} alt="Plans Icon" width={"100px"} />
                    <div dir="rtl">يمكنك الاطلاع على الخطط الدراسية</div>
                    <Link to="/plans">أستكشف</Link>
                </div>
                <div className="study">
                    <img src={file} alt="Study Material Icon" width={"100px"} />
                    <div dir="rtl">يمكنك التعلم من هنا من خلال أسئلة السنوات</div>
                    <Link to="/resources">المزيد</Link>
                </div>
            </div>
        </div>
    );
}
