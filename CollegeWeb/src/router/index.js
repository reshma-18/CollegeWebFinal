import HomePage from "../components/pages/HomePage";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import FeeStructure from "../components/pages/FeeStructure";
import Faculty from "../components/pages/Faculty";
import Admin from "../components/pages/Admin";
import Attendence from "../components/pages/Attendence";
import InfrastructureFacility from "../components/pages/InfrastructureFacility";
import AcademicActivity from "../components/pages/AcademicActivity";
import OthersPage from "../components/pages/OthersPage";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/fee",
    name: "FeeStructure",
    component: FeeStructure,
  },
  {
    path: "/faculty",
    name: "Faculty",
    component: Faculty,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/attendence",
    name: "Attendence",
    component: Attendence,
  },
  {
    path: "/infrastructure",
    name: "InfrastructureFacility",
    component: InfrastructureFacility,
  },
  {
    path: "/activity",
    name: "AcademicActivity",
    component: AcademicActivity,
  },
  {
    path: "/other",
    name: OthersPage,
    component: OthersPage,
  },
];

export default routes;
