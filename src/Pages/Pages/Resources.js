import { useState } from "react";
import { Link } from "react-router-dom";

export default function Resources() {
 
  const resources = [
    {
      Name: "Data 2",
      text: " Data Structures 2",
    } ,{
      Name: "C++",
      text: "Computer Programming in C++",
    },{
      Name: "Discrete Math",
      text: "Discrete Mathematics",
    },{
      Name: "Data 1",
      text: "Data Structures 1",
    },{
      Name: "Web",
      text: "Web Application Development",
    },{
      Name: "Data Base",
      text: "Database Management System",
    },{
      Name: "Document",
      text: "Document",
    },{
      Name: "Linear ",
      text: "Linear Algebra",
    },{
      Name: "Calculus",
      text: "Calculus 1", 
    },{
      Name: "Fundamentals",
      text: "Fundamentals of Information Technology",
    },{
      Name: "Network",
      text: "Computer Networks",
    },{
      Name: "Graph",
      text: "Computer Graphics",

    },{

      Name: "Algorithms",
      text: "theory of Algorithms",
    },{
      Name: "AI",
      text: "Artificial Intelligence",
    },{
      Name: "OOP",
      text: "Object Oriented Programming",
    },{
      Name: "Security",
      text: "Information Security and Privacy",
    },{
      Name: "Cloud Computing",
      text: "Cloud Computing",
    },{
      Name: "Machine Learning",
      text: "Machine Learning Neural Networks",
    },{
      Name: "Web Adv",
      text: "Advanced Web Development",
    },{
      Name: "Software",
      text: "Software Engineering",
    },{
      Name: "Statistics",
      text: "Statistics",
    },{
      Name: "Data Engineering",
      text: "Data Engineering",
    },{
      Name: "Data Mining",
      text: "Data Mining",
    },{
      Name: "Theory",
      text: "Theory of Computation",
    },{
      Name: "Math",
      text: "Mathematics",
    },{
      Name: "Image",
      text: "Digital Image Processing",
    },{
      Name: "HCI",
      text: "Human Computer Interaction",
    },{
      Name: "Data 2 lab",
      text: "Data Structures 2 lab",
    },{
      Name: "OS",
      text: "Operating System",
    },{
      Name: "Innovation",
      text: "Innovation and Entrepreneurship",
    },{
      Name: "Applied Statistics",
      text: "Applied Statistics",
    },{
      Name: "NLP",
      text: "Natural Language Processing",
    },{
      Name: "Web Security",
      text: "Web Security",
    },{
      Name: "Linear 1",
      text: "Linear Algebra 1",
    },{
      Name: "Multimedia",
      text: "Multimedia",
    },{
      Name: "Network Programming",
      text: "Network Programming",
    },{
      Name: "System",
      text: "System Analysis and Design",
    },{
      Name: "Risk Management",
      text: "Risk Management and Ethics",
    },{
      Name: "Data Visualization",
      text: "Data Visualization",
    },{
      Name: "Embedded Systems",
      text: "Embedded Systems",
    },{
      Name: "Model Deployment",
      text: "Model Deployment Frameworks",
    },{
      Name: "Pattern Recognition",
      text: "Pattern Recognition",
    },{
      Name: "Operating Resarch",
      text: "Operating Research",
    },{
      Name: "Cryptography",
      text: "Cryptography",
    },{
      Name: "AI Programming",
      text: "Artificial Intelligence Programming",
    },{
      Name: "AI Ethics",
      text: "Artificial Intelligence Ethics",
    },{
      Name: "Statistical Packages",
      text: "Statistical Packages",
    },{
      Name: "NO SQL",
      text: "NoSQL Databases",
    },{
      Name: "Network Security",
      text: "Network Security",
    },{
      Name: "Distributed Computing",
      text: "Distributed Computing",
    },{
      Name: "Programming For Cyber Security",
      text: "Programming For Cyber Security",
    },{
      Name: "Web server",
      text: "Web Server Programming",
    },{
      Name: "Problem Solving lab",
      text: "Problem Solving lab",
    },{
      Name: "Assembly",
      text: "Computer Architecture and Assembly Language",
    },{
      Name: "Security of policies and laws",
      text: " Security of policies and laws",
    },{
      Name: "Authentication",
      text: "Authentication and security Models",
    },{
      Name: "Document Analysis",
      text: "Document Analysis and Retrieval",
    },{
      Name: "KRR",
      text: "Knowledge  Representation and Reasoning",
    },{
      Name: "ORG",
      text: "Computer Organization",
    },{
      Name: "Bioinformatics",
      text: "Bioinformatics",
    },{
      Name: "Logic",
      text: "Logic Design",
    },{
      Name: "ISPM",
      text: "Project Management",
    },{
      Name: "SP and Compiler",
      text: "System Programming and Compiler Construction",
    },{
      Name: "Parallel ",
      text: "Parallel and Distributed Systems",
    },{
      Name: "Phyiscs CS",
      text: "Physics for Computer Science",
    },{
      Name: "Numerical Analysis",
      text: "Numerical Analysis",
    },{
      Name: "Distributed DB",
      text: "Distributed Database",
    },{
      Name: "Calculus 2",
      text: "Calculus 2",
    },{
      Name: "Simulation",
      text: "Modelling and Simulation ",
    },{
      Name: "JAVA 2",
      text: "Java 2",
    },{
      Name: "Graph Theory",
      text: "Graph Theory",
    },{
      Name: "CAL",
      text: "Computer Associated Learning",
    },{
      Name: "Computer Ethics",
      text: "Computer Ethics",
    },{
      Name: "ERP",
      text: "Enterprise Resource Planning",
    },{
      Name: "Secure Software",
      text: "Secure Software",
    },{
      Name: "DATA 1 Lab",
      text: "Data Structures 1 Lab",
    },{
      Name: "Accunting 1",
      text: "Accounting 1",
    },{
      Name: "Intro to AI",
      text: "Introduction to Artificial Intelligence",
    },{
      Name: "IT Quiz",
      text: "IT Quiz",
    },{
      Name: "Adv Algo", 
      text: "Advanced Algorithms",
    },{
      Name: "Adv DB",
      text: "Advanced Database",
    },{
      Name: "Programming Tecnichques",
      text: "Programming Techniques in Special  Languages",
    },{
      Name: "Principles of Security",  
      text: "Principles of Security", 
    },{
      Name: "MIS",
      text: "Management Information Systems",
    },{
      Name: "Adv MultiMedia",
      text: "Advanced Multimedia",
    },{
      Name: "GIS",
      text: "Geographic Information Systems",
    },{
      Name: "physics CS Lab",
      text: "Physics for Computer Science Lab",
    },{
      Name: "BI",
      text: "Business Intelligence",
    },{
      Name: "PODS",
      text: "Principles of Database Systems",
    },{
      Name: "CS",
      text: "Cognitive Science",
    },{
      Name: "Security Management and Auditing",
      text: "Security Management and Auditing",
    }
  ];

  const [searchQuery, setSearchQuery] = useState("");

  
  const filteredResources = resources.filter((resource) => {
    return (
      resource.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);  
  };

  
  const showResources = filteredResources.map((resource, index) => (
    <div key={resource.Name} className="resource">
      <h1>{resource.Name}</h1>
      <p>{resource.text}</p>
      <Link to={`/resource/${index}`}>
        <button>عرض المزيد</button>
      </Link>
    </div>
  ));

  return (
    <div className="Resources">
    
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن مصدر..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      
      {showResources}
    </div>
  );
}
