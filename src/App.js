import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, SideBar } from "./components/index";
import {
  MainPage,
  SouqOtlobha,
  GeneralSouq,
  Storage,
  Markets,
  MarketsActivity,
  MarketsTable,
  RecordingStatus,
  Packages,
  CurrentSubscriptions,
  ServicesPage,
  OtlobhaAcademy,
  TemplatePage,
  CommentsPage,
  SliderPage,
  PartitionsPage,
  Users,
} from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="flex mx-auto mt-16" style={{ maxWidth: "1440px" }}>
        <SideBar />
        <div className="p-4 flex-1">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            {/*************************** السوق ************************/}
            {/* <Route path="/السوق" element={<Souq />} /> */}
            <Route path="/سوق_اطلبها" element={<SouqOtlobha />} />
            <Route path="/السوق_العام" element={<GeneralSouq />} />
            <Route path="/المخزون" element={<Storage />} />
            {/************************* المتاجر **********************/}
            <Route path="/المتاجر" element={<Markets />} />
            <Route path="/نشاط_المتاجر" element={<MarketsActivity />} />
            <Route path="/عرض_المتاجر" element={<MarketsTable />} />
            <Route path="/حالة_التسجيل" element={<RecordingStatus />} />
            {/************************* الباقات ***********************/}
            <Route path="/الباقات" element={<Packages />} />
            <Route
              path="/الاشتراكات_الحالية"
              element={<CurrentSubscriptions />}
            />
            {/********************** الخدمات *******************/}
            <Route path="/الخدمات" element={<ServicesPage />} />
            {/* الاكاديمية  */}
            <Route path="/أكاديمية_اطلبها" element={<OtlobhaAcademy />} />
            {/* القالب */}
            <Route path="/القالب" element={<TemplatePage />} />
            <Route path="/التعليقات" element={<CommentsPage />} />
            <Route path="/السلايدر" element={<SliderPage />} />
            <Route path="/التقسيم" element={<PartitionsPage />} />

            {/* الصفحات */}
            {/* المستخدمين */}
            <Route path="/جدول_المستخدمين" element={<Users />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
