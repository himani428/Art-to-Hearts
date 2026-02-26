import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* ---------- LAZY LOAD HEAVY SECTIONS ---------- */

// Homepage Sections
const Hero = lazy(() => import("./components/sections/Hero"));
const LogoStrip = lazy(() => import("./components/sections/LogoStrip"));
const NewReleases = lazy(() => import("./components/sections/NewReleases"));
const Submissions = lazy(() => import("./components/sections/Submissions"));
const DividerCTA = lazy(() => import("./components/sections/DividerCTA"));
const TemplatesSection = lazy(() => import("./components/sections/TemplatesSection"));
const PodcastSection = lazy(() => import("./components/sections/PodcastSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const EditorPicks = lazy(() => import("./components/sections/EditorPicks"));
const ArtToHeartsGallery = lazy(() => import("./components/sections/ArtToHeartsGallery"));
const ArtStarSection = lazy(() => import("./components/sections/ArtStarSection"));
const ArtToHeartsClub = lazy(() => import("./components/sections/ArtToHeartsClub"));
const LearnThisWeekSection = lazy(() => import("./components/sections/LearnThisWeekSection"));
const PodcastArticlesSection = lazy(() => import("./components/sections/PodcastArticlesSection"));

// Detail Pages
const SubmissionDetail = lazy(() => import("./components/sections/SubmissionDetail"));
const BlogDetail = lazy(() => import("./components/pages/BlogDetail"));
const ClubDetail = lazy(() => import("./components/pages/ClubDetail"));
const PodcastPage = lazy(() => import("./components/pages/PodcastPage"));
const PodcastArticleDetail = lazy(() => import("./components/pages/PodcastArticleDetail"));
const GalleryArticleDetail = lazy(() => import("./components/pages/GalleryArticleDetail"));
const EditorPickDetail = lazy(() => import("./components/pages/EditorPickDetail"));
const EditorPicksPage = lazy(() => import("./components/pages/EditorPicksPage"));
import ScrollToTop from "./components/utils/ScrollToTop";

/* ---------- LOADING COMPONENT ---------- */

const Loader = () => (
  <div className="h-screen flex items-center justify-center text-sm tracking-widest">
    Loading...
  </div>
);

function HomePage() {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <LogoStrip />
      <NewReleases />
      <Submissions />
      <DividerCTA />
      <ArtStarSection />
      <ArtToHeartsClub />
      <TemplatesSection />
      <LearnThisWeekSection />
      <PodcastSection />
      <PodcastArticlesSection />
      <ArtToHeartsGallery />
      <AboutSection />
      <EditorPicks />
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submission/:id" element={<SubmissionDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/club/:id" element={<ClubDetail />} />
          <Route path="/club" element={<LearnThisWeekSection />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/podcast-article/:id" element={<PodcastArticleDetail />} />
          <Route path="/gallery/:id" element={<GalleryArticleDetail />} />
          <Route path="/editor" element={<EditorPicksPage />} />
          <Route path="/editor/:id" element={<EditorPickDetail />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;