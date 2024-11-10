import React, { useState } from 'react';

export default function CPP() {
    // حالة لتحديد ما إذا كان كل مربع مرئيًا أو لا
    const [isVisible, setIsVisible] = useState({
        questions: false,
        notes: false,
        tests: false,
        files: false,
    });

   
    const toggleVisibility = (section) => {
        setIsVisible((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div style={styles.container}>
            <div style={styles.section}>
                <h1 style={styles.heading} onClick={() => toggleVisibility('questions')}>
                    أسئلة سنوات
                </h1>
                {isVisible.questions && (
                    <div style={styles.contentBox}>
                        <p style={styles.description}>
                            هنا تجد أسئلة من سنوات سابقة للتمرين عليها. قم بتحميل الأسئلة أو الاطلاع عليها عبر الرابط التالي.
                        </p>
                        <a
                    href="https://drive.google.com/file/d/1l0wJXwY5q5nY9l9wCQG8zjJnYJHcUd2O/view"  // المسار إلى الملف
                    download="اسئلة سنوات سابقة للتمرين عليها.pdf"  // اسم الملف عند التحميل
                    style={styles.downloadLink}
                >
                    تحميل
                </a>                     </div>
                )}
            </div>

            <div style={styles.section}>
                <h1 style={styles.heading} onClick={() => toggleVisibility('notes')}>
                    دوسيات ودفاتر
                </h1>
                {isVisible.notes && (
                    <div style={styles.contentBox}>
                        <p style={styles.description}>
                            تحميل الدوسيات والدفاتر لمراجعة المواضيع التي تم دراستها. اضغط على الرابط أدناه لتحميل الملفات.
                        </p>
                        <a href="#!" style={styles.link}>تحميل دوسيات ودفاتر</a>
                    </div>
                )}
            </div>

            <div style={styles.section}>
                <h1 style={styles.heading} onClick={() => toggleVisibility('tests')}>
                    أختبارات محوسبة
                </h1>
                {isVisible.tests && (
                    <div style={styles.contentBox}>
                        <p style={styles.description}>
                            اختبارات محوسبة للمراجعة عبر الإنترنت. يمكنك البدء في الاختبار المحوسب من خلال الرابط أدناه.
                        </p>
                        <a href="#!" style={styles.link}>ابدأ الاختبار المحوسب</a>
                    </div>
                )}
            </div>

            <div style={styles.section}>
                <h1 style={styles.heading} onClick={() => toggleVisibility('files')}>
                    ملفات اخرى
                </h1>
                {isVisible.files && (
                    <div style={styles.contentBox}>
                        <p style={styles.description}>
                            ملفات متنوعة قد تكون مفيدة للدراسة. يمكنك تحميل الملفات من الروابط التالية.
                        </p>
                        <ul style={styles.fileList}>
                            <li><a href="#!" style={styles.link}>ملف مراجع عام</a></li>
                            <li><a href="#!" style={styles.link}>ملف دراسي متقدم</a></li>
                            <li><a href="#!" style={styles.link}>ملف تدريبي</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        fontFamily: 'Tajawal, Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        maxWidth: '1100px',
        margin: '0 auto',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    section: {
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer', // لإظهار أن العنصر قابل للنقر
    },
    heading: {
        color: '#2c3e50',
        fontSize: '26px',
        marginBottom: '12px',
        fontWeight: '700',
    },
    description: {
        color: '#7f8c8d',
        fontSize: '16px',
        lineHeight: '1.8',
        marginBottom: '20px',
    },
    link: {
        color: '#2980b9',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '500',
        display: 'inline-block',
        marginTop: '10px',
        transition: 'color 0.3s ease, transform 0.3s ease',
    },
    fileList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    contentBox: {
        padding: '15px',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
        marginTop: '15px',
        transition: 'max-height 0.3s ease-out',   
    },
};
