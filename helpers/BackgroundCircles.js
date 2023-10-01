import { motion } from 'framer-motion';
import { circleAnim } from '../animations/animations';

const BackgroundCircles = () => {
  return (
    <motion.div
      variants={circleAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative flex justify-center items-center  "
    >
      <div className="border border-accent1 rounded-full h-[350px] w-[350px] absolute animate-ping opacity-25 mt-52" />
      <div className="border-2 border-accent1 rounded-full h-[500px] w-[500px] absolute opacity-25 animate-spin mt-52" />

      <div className="border-4 border-main1 rounded-full h-[650px] w-[650px]  absolute opacity-25 mt-52" />
      <div className="border border-accent1 rounded-full h-[800px] w-[800px] absolute opacity-25 mt-52" />
    </motion.div>
  );
};
export default BackgroundCircles;
