import { SocialIcon } from "../blocks";
import { instagram, facebook } from "./svgIcons";


const socialsData = [
  {
    icon: (
      <SocialIcon>
        { instagram }
      </SocialIcon>
    ),
    link: '/',
  },
  {
    icon: (
      <SocialIcon>
        { facebook }
      </SocialIcon>
    ),
    link: '/',
  },
]

export default socialsData;