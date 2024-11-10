import { useState } from "react";

export default function AvgF() {
  const [courses, setCourses] = useState([]);
  const [avg, setAvg] = useState(0);
  const [total, setTotal] = useState(0);

  // مقياس الدرجات
  const gradePoints = {
    A: 4,
    "A-": 3.7,
    "B+": 3.3,
    B: 3,
    "B-": 2.7,
    "C+": 2.3,
    C: 2,
    "C-": 1.7,
    "D+": 1.3,
    D: 1,
    "D-": 0.7,
    F: 0
  };

  // إضافة مادة جديدة مع درجة افتراضية وعدد ساعات
  const addCourse = () => {
    setCourses([...courses, { grade: "A", hours: 3 }]);
  };

  // تغيير درجة مادة
  const handleGradeChange = (index, newGrade) => {
    const updatedCourses = [...courses];
    updatedCourses[index].grade = newGrade;
    setCourses(updatedCourses);
  };

  // تغيير عدد ساعات مادة
  const handleHoursChange = (index, newHours) => {
    const updatedCourses = [...courses];
    updatedCourses[index].hours = parseInt(newHours, 10);
    setCourses(updatedCourses);
  };

  // حذف مادة
  const removeCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  // حساب المعدل الفصلي
  const calculateGPA = () => {
    let totalPoints = 0;
    let totalHours = 0;

    courses.forEach(course => {
      totalPoints += gradePoints[course.grade] * course.hours;
      totalHours += course.hours;
    });

    const gpa = totalHours > 0 ? totalPoints / totalHours : 0;
    setTotal(totalPoints);
    setAvg(gpa);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>احسب معدلك الفصلي</h1>
      <button style={styles.addButton} onClick={addCourse}>أضافة مادة</button>

      {/* قائمة المواد */}
      {courses.map((course, index) => (
        <div key={index} style={styles.courseContainer}>
          <div style={styles.formGroup}>
            <label style={styles.label}>الدرجة للمادة {index + 1}:</label>
            <select
              value={course.grade}
              onChange={(e) => handleGradeChange(index, e.target.value)}
              style={styles.select}
            >
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="D-">D-</option>
              <option value="F">F</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>عدد الساعات المعتمدة للمادة {index + 1}:</label>
            <input
              type="number"
              value={course.hours}
              onChange={(e) => handleHoursChange(index, e.target.value)}
              min="1"
              style={styles.input}
            />
          </div>

          {/* زر حذف المادة */}
          <button
            onClick={() => removeCourse(index)}
            style={styles.removeButton}
          >
            حذف المادة
          </button>
        </div>
      ))}

      <button style={styles.calculateButton} onClick={calculateGPA}>أحسب المعدل الفصلي</button>

      {/* عرض إجمالي النقاط والساعات */}
      <div style={styles.resultContainer}>
        <h3>إجمالي النقاط: <span style={styles.result}>{total}</span></h3>
        <h3>إجمالي الساعات: <span style={styles.result}>{courses.reduce((acc, course) => acc + course.hours, 0)}</span></h3>
        <h3>المعدل الفصلي: <span style={styles.result}>{avg.toFixed(2)}</span></h3>
      </div>
    </div>
  );
}

// الأنماط (CSS in JS)
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px"
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
    display: "block",
    width: "100%",
    fontSize: "16px"
  },
  courseContainer: {
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  },
  formGroup: {
    marginBottom: "10px"
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    display: "block",
    color: "#333"
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
  },
  calculateButton: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
    marginTop: "20px"
  },
  resultContainer: {
    textAlign: "center",
    marginTop: "20px"
  },
  result: {
    color: "#333",
    fontWeight: "bold"
  },
  removeButton: {
    backgroundColor: "#FF4C4C",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }
};