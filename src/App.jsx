import ScrollToTop from '@/components/ScrollToTop.jsx';
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <ScrollToTop />
      <Analytics />
    </>
  )
}

export default App 