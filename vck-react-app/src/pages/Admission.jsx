import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const AdmissionPage = () => {
    return (
        <><div class="body">
            <Header/>
            <div className="inner-body">
                <h1 id="adm-head">Admissions at Vivekanand College</h1>
                <p className="abt-text">Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.<br></br><br></br>

                    Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p><hr></hr>

                <h3 align="center">Eligibility Criteria for Undergraduate Programs</h3>
                <table id="Process-Table">
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


                <h1 id="apl-head">Application Process</h1>
                <ol id="ad-list">
                    <li><b>Online Application:</b> Fill out the application form available on our portal.</li>
                    <li><b>Document Submission:</b> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
                    <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.
                    </li>
                    <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>

                </ol><hr></hr>

                < p className="abt-text">For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/courses">Courses page</a> or<a href="/contact"> Contact us</a> directly.</p>



            </div>
        </div>
        <Footer/></>
    )
}
export default AdmissionPage;