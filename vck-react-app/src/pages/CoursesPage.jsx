import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CoursesPage = () => {
  return (
    <><div className="body">
      <Header />
      <div className="inner-body">
        <h1 id="course-head">Our Academic Programs</h1>
        <p id="academic-text">Vivekanand College offers a comprehensive range of undergraduate and postgraduate
          programs designed to equip students with the knowledge and skills demanded by today's
          dynamic global landscape. Our curriculum
          is regularly updated to reflect industry trends and academic advancements.</p>
        <h2 id="capmpus-title">Discover Campus Life</h2>
        <div id="course-video">
          <video controls width="100%" height="auto">
            <source src="/public/vck-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p id="video-text">Get a glimpse of the vibrant academic and social life at Vivekanand College</p>
        </div>
        <h1 id="ug-headline">Undergraduate Programs (UG)</h1>
        
        <hr />
        <ul id="ug-list">
          <li id="bsc"><b>Bachelor of Science (B.Sc.)</b>
            <ul>
              <li id="bsc-cs">Computer Science (3 years)</li>
              <li id="bsc-it">Information Technology (3 years)</li>
              <li id="bsc-bio">Biotechnology (3 years)</li>
            </ul>
          </li>

          <li id="bcom"><b>Bachelor of Commerce (B.Com)</b>
            <ul>
              <li id="bcom-af">Accounting &amp; Finance (3 years)</li>
              <li id="bcom-bi">Banking &amp; Insurance (3 years)</li>
            </ul>
          </li>

          <li id="ba"><b>Bachelor of Arts (B.A.)</b>
            <ul>
              <li id="ba-eng">English Literature (3 years)</li>
              <li id="ba-psy">Psychology (3 years)</li>
            </ul>
          </li>
        </ul>

        <h2 id="pg-programs">Postgraduate Programs (PG)</h2>
        <hr />
        <ul id="pg-list">
          <li id="msc"><b>Master of Science (M.Sc.)</b>
            <ul>
              <li id="msc-cs">Computer Science (2 years)</li>
              <li id="msc-it">Information Technology (2 years)</li>
            </ul>
          </li>

          <li id="mcom"><b>Master of Commerce (M.Com)</b> (2 years)</li>
        </ul>

        <h2 id="fee-structure">Program Details & Fee Structure (Annual)</h2>
        <hr />

        <table id="fee-table">
          <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting &amp; Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>

        <h2 id="vocational-courses">Specialized & Vocational Courses</h2>
        <hr />
        <p id="abt-course">
          In addition to traditional degree programs, we offer various certificate and diploma courses in areas like
          Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized
          training for career enhancement.
        </p>
        <p id="qus-text">Have questions about a specific course?</p>
        <button id="inquire-btn2"><Link to="/contact">Contact</Link></button>



      </div>

    </div>
      <Footer /></>
  );

}

export default CoursesPage;