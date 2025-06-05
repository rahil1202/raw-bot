import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot'


const ImageShowcaseSection = () => {

  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";
  const ROBOT_ALT_TEXT = "Advanced humanoid robot with orange and white design";

  return (
    <section className="w-full pt-12 pb-8 sm:pb-0 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center mb-10 sm:mb-4">
        <div className="flex items-center gap-4 mb-8 sm:mb-4">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Showcase</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
          <h2 className="section-title mt-12 mb-3 sm:mb-4 opacity-100 fade-in-element">
            Advanced Intelligence, <br className="hidden sm:block" />Human-Like Intuition
          </h2>
          <p className="section-subtitle mx-auto opacity-100 fade-in-element">
            Experience the future of robotics with our advanced humanoid robot, designed to 
            assist and enhance human life through cutting-edge technology and intuitive interaction.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden  shadow-elegant mx-auto max-w-5xl animate-on-scroll border border-gray-800">
          <div className="w-full ">           
            <InteractiveRobotSpline
                    scene={ROBOT_SCENE_URL}
                    className="relative inset-0 z-10 w-full h-full"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation Robotics</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with precision engineering and sophisticated AI, our robots seamlessly 
              integrate into various environments, from homes to hospitals, providing 
              assistance and enriching human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
