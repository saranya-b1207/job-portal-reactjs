import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Jobcard from "./components/JobCard"
// import JobDummyData from "./JobDummyData"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { db } from "./firebase.config"
import { collectionGroup, query, getDocs, orderBy, where } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);


  const fetchJobs = async () => {
    const jobsRef = query(collectionGroup(db, 'jobs'));
    const fetchedJobs = [];
    const q = query(jobsRef, orderBy("postedOn", "desc"));

    const req = await getDocs(q);
    req.forEach((doc) => {
      // console.log(doc.id, ' => ', doc.data());
      fetchedJobs.push({
        id: doc.id,
        ...doc.data(),
        postedOn: doc.data().postedOn.toDate()
      });
    });
    setJobs(fetchedJobs);
  }
  const fetchJobsCustom = async (jobCriteria) => {
    const jobsRef = collectionGroup(db, 'jobs');
    const fetchedJobs = [];
    let q = query(jobsRef, orderBy("postedOn", "desc"));
      
    if (jobCriteria.title) {
      q = query(q, where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.type) {
      q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.experience) {
      q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location) {
      q = query(q, where("location", "==", jobCriteria.location));
    }
  
    const req = await getDocs(q);
        req.forEach((doc) => {
      // console.log(doc.id, ' => ', doc.data());
      fetchedJobs.push({
        id: doc.id,
        ...doc.data(),
        postedOn: doc.data().postedOn.toDate()
      });
    });
    setJobs(fetchedJobs);
  }
  useEffect(() => {
    fetchJobs();
  }, []);


  return (
    <>
      <Navbar />
      <Header />
      <SearchBar onSearch={fetchJobsCustom} />
      {jobs.map((job) => (
        <Jobcard key={job.id}{...job} />
      ))}
      <Footer />
    </>
  )
}
export default App
