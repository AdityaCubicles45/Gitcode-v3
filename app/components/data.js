import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits for developers",
  desc: "Get rewarded for your open-source contributions, even if your PR isn't merged. Showcase your skills and build your portfolio by solving real-world problems. Our AI-powered system ensures fair competition and eliminates AI-generated solutions.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Fair Rewards: ",
      desc: "Earn rewards for your open-source contributions, regardless of PR acceptance.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Showcase Skills: ",
      desc: "Build your portfolio and gain recognition by contributing to real-world projects.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Transparent Competition: ",
      desc: "Focus on your coding skills, not competing with AI-generated solutions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Benefits for project owners, startups and enterprises",
  desc: "Find top developers and crowdsource solutions cost-effectively. Our AI filtering ensures genuine contributions, protecting your project from AI-generated code. Accelerate your development and achieve your goals with Git-Code",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Find Talented Developers: ",
      desc: "Access a pool of skilled developers and find the perfect fit for your project.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Crowdsource Solutions Cost-Effectively",
      desc: "Save time and money by crowdsourcing solutions to your coding challenges.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Ensure Genuine Contributions with AI Filtering: ",
      desc: "Protect your project from AI-generated code and ensure quality contributions.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
