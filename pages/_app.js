import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
//router
import { useRouter } from "next/router";
//framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        {/* Remove h-full from className beause it is causing not to load other pages
        <motion.div key={router.route} className="h-full">
         */}
        <motion.div key={router.route} className="">
          <Transition />
        </motion.div>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
