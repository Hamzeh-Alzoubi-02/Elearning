import { Link } from "react-router-dom";

export default function Calculater() {
    return (
        <div className="Calculater">
           <div>
             
               <h1>حساب معدلك الفصلي</h1>
               <Link to="/المعدل الفصلي">
               <span>أحسب معدلك الفصلي</span>
           </Link>
           </div>
           <div>
               <h1>حساب معدلك التراكمي</h1>
               <Link to="/المعدل التراكمي">
               <span>أحسب معدلك التراكمي</span>
               </Link>
           </div>
           <div>
               <h1>حساب معدلك الفصلي و التراكمي للطالب مستجد</h1>
               <Link to="/المعدل الفصلي و التراكمي للطالب مستجد">
               <span>أحسب معدلك الفصلي و التراكمي للطالب مستجد</span>
               </Link>
           </div>
        </div>
    );
}