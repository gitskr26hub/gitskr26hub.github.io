import "./portfolio.css";
import zee1 from "./ProjectImages/zee1.JPG";
import zee2 from "./ProjectImages/zee2.JPG";
import zee3 from "./ProjectImages/zee3.JPG";
import far1 from "./ProjectImages/farfetch1.JPG";
import far2 from "./ProjectImages/farfetch2.JPG";
import far3 from "./ProjectImages/farfetch3.JPG";
import { Button, Text, Box, Image, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Heading, Link } from "@chakra-ui/react";
import * as React from "react";
import rentomojo1 from "./ProjectImages/rentomojo1.JPG";
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai";
import licious1 from "./ProjectImages/licious1.PNG"
// import { Link } from "react-router-dom";
import { useColorMode } from '@chakra-ui/color-mode'



const zeeData = [zee1, zee2, zee3];
const farData = [far1, far2, far3];

export const Portfolio = () => {
  const [zee, setZee] = useState(zee1);

  const zeelen = zeeData.length;
  const farlen = farData.length;

  const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

  const Card = ({
    img,
    projectName,
    desc,
    features,
    techStacks,
    area,
    collaboration,
    gitHub,
    Live,
  }) => {
    return (
      <>
        <Box className="card" color={isDark ? "black" : "#454545"}>
          <Box className="img-box">
            <Image
              className="project-img"
              style={{ borderRadius: "2%" }}
              src={img}
              width="100%"
              height="100%"
            />
          </Box>
          <Box>
            <Text
              fontWeight="700"
              fontSize={["2xl", "3xl", "3xl"]}
              style={{ textAlign: "center" }}
            >
              {projectName}
            </Text>
          </Box>

          <Box className="details">
            <Box fontSize={["17px"]}>{desc}</Box>
            <Box>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize={["lg", "xl", "xl"]}
                  style={{ fontStyle: "italic" }}
                >
                  Features :
                </Text>
              </Box>
              <Box>
                <Text style={{ paddingLeft: "2%" }} fontSize={["17px"]}>
                  {features}
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize={["lg", "xl", "xl"]}
                  style={{ fontStyle: "italic" }}
                >
                  Tech-Stacks :
                </Text>
              </Box>
              <Box>
                <Text style={{ paddingLeft: "2%" }} fontSize={["17px"]}>
                  {techStacks}
                </Text>
              </Box>
            </Box>

            <Box>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize={["lg", "xl", "xl"]}
                  style={{ fontStyle: "italic" }}
                >
                  Areas of responsibility:
                </Text>
              </Box>
              <Box>
                <Text style={{ paddingLeft: "2%" }} fontSize={["17px"]}>
                  {area}
                </Text>
              </Box>
              <Box>
                <Text
                  style={{ fontStyle: "italic", color: "#5A5A5A" }}
                  fontSize={["17px"]}
                >
                  {collaboration}
                </Text>
              </Box>
            </Box>
            <Flex style={{ justifyContent: "space-evenly",marginTop:"2%"}}>
              <Box>
                <a href={gitHub} target="_blank">
                <button class="button-29" role="button" _hover={{transform:"scale(1.1)",transition:"1s",}}>
                <AiFillGithub />
                    GitHub
                    </button>
                  
                </a>
              </Box>
              <Box >
                <a href={Live} target="_blank">
                <button class="button-29" role="button" _hover={{transform:"scale(1.1)",transition:"1s",}}>
                    <AiOutlineDesktop />
                    Live
                  </button>
                </a>
              </Box>
            </Flex>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <Box style={{ marginBottom: "5%" }}>
      <Heading
        fontWeight="bold"
        fontSize={["30px", "40px", "70px"]}
        style={{ textAlign: "center", marginBottom: "5%" }}
      >
        Projects
      </Heading>
      <Box className="project-main">
        {/* cart start form here */}
        <Card
          img={zee1}
          projectName="ZEE5 Clone"
          desc="It is a clone of the famous OTT platform Zee5 to watch movies, TV shows and web series etc."
          features=" Login | Signup page | Subscription | Images Hover | Video Player"
          techStacks="HTML | CSS | JavaScript | Local Storage"
          area=" Developed the Login and Signup page"
          collaboration="Collaborative team project completed in 5 days by a
        team of 5 members."
          gitHub="https://github.com/SHASHANKpandey-ncr/unit2_project_web18_zee5.git"
          Live="https://zee5-clone-project.netlify.app/"
        />

        {/* cart end   here */}

        {/* cart start form here */}
        <Card
          img={far1}
          projectName="Farfetch Clone"
          desc="This is a clone of e-commerce website farfetch.com where you can shop for men, women and kids."
          features="Login | Signup page | Sorting | 
        Wishlist | Add to bag | Checkout | Payment page"
          techStacks=" HTML | CSS | JavaScript | Bootstrap"
          area="Developed the Women's section"
          collaboration="Collaborative team project completed in 5 days by a
        team of 7 members."
          gitHub="https://github.com/gitskr26hub/Farfetch-Project.git"
          Live="https://peaceful-stroopwafel-aba1de.netlify.app/"
        />
        {/* cart end here */}

        {/* cart start form here */}
        <Card
          img={rentomojo1}
          projectName="Rentomojo Clone"
          desc=" A Website that provides rental services for furniture, appliances, etc."
          features=" Home Page | Login Modal | Carousels | Product Pages | sorting by price | Add to Cart"
          techStacks=" React-Js | Redux | Chakra UI | Styled-Components | React-Bootstrap"
          area="Developed the Furniture, Appliances, Electronics and Fitness pages"
          collaboration="Collaborative team project completed in 5 days by a
        team of 4 members."
          gitHub="https://github.com/abdullahhassan19/Rentomojo--Clone.git"
          Live="https://rentomojo-clone-antara12345.vercel.app/"
        />

        {/* cart end here */}

         {/* cart start form here */}
         <Card
          img={licious1}
          projectName="D'licious Clone"
          desc=" A Website that provides Food services for non-vegetarians."
          features=" Home Page | Login | Carousels | Product Pages | Sorting | Add to Cart | Product Details | Responsive"
          techStacks=" React-Js | Redux | Chakra UI | Express | mongoDB | google-maps-api | npm-package"
          area="Developed the Navbar and Product details page"
          collaboration="Collaborative team project completed in 5 days by a
        team of 5 members."
          gitHub="https://github.com/Prathamesh61/coherent-laborer-2044.git"
          Live="https://frontend-pi-lovat.vercel.app/"
        />

        {/* cart end here */}
      </Box>
    </Box>
  );
};
