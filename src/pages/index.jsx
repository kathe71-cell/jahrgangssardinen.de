import Layout from "./Layout.jsx";

import Home from "./Home";

import FAQ from "./FAQ";

import Impressum from "./Impressum";

import Datenschutz from "./Datenschutz";

import AGB from "./AGB";

import Cookie from "./Cookie";
import RechnerEmbed from "./RechnerEmbed";

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

const PAGES = {
    Home: Home,
    FAQ: FAQ,
    Impressum: Impressum,
    Datenschutz: Datenschutz,
    AGB: AGB,
    Cookie: Cookie,
    RechnerEmbed: RechnerEmbed,
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);

    if (location.pathname.toLowerCase().includes('rechner-embed') || currentPage === 'RechnerEmbed') {
        return <RechnerEmbed />;
    }
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/home" element={<Home />} />
                
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/faq" element={<FAQ />} />
                
                <Route path="/Impressum" element={<Impressum />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/zimpressum" element={<Impressum />} />
                
                <Route path="/Datenschutz" element={<Datenschutz />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/zdatenschutz" element={<Datenschutz />} />
                
                <Route path="/AGB" element={<AGB />} />
                <Route path="/agb" element={<AGB />} />
                
                <Route path="/Cookie" element={<Cookie />} />
                <Route path="/cookie" element={<Cookie />} />

                <Route path="/rechner-embed" element={<RechnerEmbed />} />
                <Route path="/RechnerEmbed" element={<RechnerEmbed />} />
                
                {/* Fallbacks & Language Redirects */}
                <Route path="/en" element={<Navigate to="/" replace />} />
                <Route path="/en/*" element={<Navigate to="/" replace />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>
    );
}

import VercelAnalytics from "@/components/VercelAnalytics";

export default function Pages() {
    return (
        <Router>
            <VercelAnalytics />
            <PagesContent />
        </Router>
    );
}