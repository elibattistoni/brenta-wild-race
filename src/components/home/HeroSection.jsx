import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useMediaQuery } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { paths } from "../../utils/paths";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
import { Text, Title, em, rem } from "@mantine/core";
import classes from "./HeroSection.module.css";

// const getParallaxPosition = (yScroll) => {
//   return {
//     transform: `translateY(${yScroll * 100})`,
//     animation: `transform 0.5s ease-in-out`,
//   };
// };

const HeroSection = () => {
  //! check media query
  const isSmall = useMediaQuery(
    `(min-width: ${em(200)}) and (max-width: ${em(576)})`
  );
  const isMedium = useMediaQuery(
    `(min-width: ${em(576)}) and (max-width: ${em(992)})`
  );

  // const [scroll, scrollTo] = useWindowScroll();
  // console.log("Scroll Position y ", scroll.y);
  // const parallaxStyle = getParallaxPosition(scroll.y);

  //! TODO ELISA scroll based animation parallax effect with css
  // const isLayoutColumn = useMediaQuery(
  //   `(min-width: ${em(200)}) and (max-width: ${em(764)})`
  // );

  //! load image based on media query
  let imgUrl = "/brenta-wild-race/hero-img-1600px.png";
  if (isSmall) {
    imgUrl = "/brenta-wild-race/hero-img-800px.png";
  } else if (isMedium) {
    imgUrl = "/brenta-wild-race/hero-img-1200px.png";
  }

  return (
    <div className={classes.hero}>
      <div className={classes.imgContainer}>
        <div className={classes.imgContainerInner}>
          <LazyLoadImage
            alt="Hero Image of Runner"
            effect="opacity"
            placeholderSrc="/brenta-wild-race/hero-img-30px.png"
            src={imgUrl}
            className={`${classes.imgLoaded} hero-img`}
            wrapperProps={{
              style: { transitionDuration: "2s" },
            }}
            width="100%"
          />
        </div>
      </div>
      <div className={classes.titleContainer}>
        <Text
          fz={{ base: "md", sm: "lg", md: "xl" }}
          fw="var(--mantine-fw-medium)"
          ml={rem(6)}
        >
          Nuova Edizione
        </Text>
        <Title
          order={1}
          c="orangeBrenta.0"
          pt={rem(0)}
          pb={rem(0)}
          className={classes.heroTitle}
        >
          BRENTA WILD RACE
        </Title>
      </div>
      <div className={classes.where}>
        <div className={classes.whereInner}>
          <Text
            fz={{ base: "xl", md: rem(24) }}
            size={rem(24)}
            fw="var(--mantine-fw-medium)"
          >
            Campodenno
          </Text>
          <Text
            fz={{ base: rem(24), sm: rem(28), md: rem(32) }}
            size={rem(24)}
            fw="var(--mantine-fw-medium)"
            c="bluePrimary.0"
          >
            07 Luglio 2024
          </Text>
        </div>
      </div>
      <div className={classes.cta}>
        <NavLink to={paths.gara.children.percorsoVarianti.link}>
          <ButtonSecondary text="La Gara" />
        </NavLink>
        <NavLink to={paths.gara.children.iscrizione.link}>
          <ButtonPrimary text="Iscriviti" />
        </NavLink>
      </div>
      <div className={classes.trailSpecs}>
        <div className={classes.trailSpecsWrapper}>
          <Text
            fz={{ base: "sm", sm: "md", md: "lg" }}
            fw="var(--mantine-fw-medium)"
          >
            23km 2000m D+ /
          </Text>
          <Text
            fz={{ base: "sm", sm: "md", md: "lg" }}
            fw="var(--mantine-fw-medium)"
          >
            14km 1200m D+
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// const [opacity, setOpacity] = useState(0);

// useEffect(() => {
//   const imgRef = document.querySelector("#imgBig");

//   const handleLoaded = () => {
//     if (imgRef.complete) {
//       setOpacity(1);
//     }
//   };

//   imgRef.addEventListener("load", handleLoaded);
//   return () => imgRef.removeEventListener("load", handleLoaded);
// }, []);

/* <img
  src={urlHeroImgSmall}
  alt="Hero Image"
  loading="eager"
  className={classes.imgLoading}
  style={{ opacity: 1 - opacity }}
/>
<img
  id="imgBig"
  src={urlHeroImgBig}
  alt="Hero Image"
  loading="lazy"
  className={classes.imgLoaded}
  style={{ opacity: opacity }}
/>
*/

/*

//! refs for gsap
  const containerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const whereRef = useRef(null);
  const ctaRef = useRef(null);
  const specsRef = useRef(null);

useGSAP(
    () => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power1.out" }
      );

      gsap.from(titleRef.current, {
        x: -1000,
        duration: 2,
        ease: "power1.out",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // when the top of the item hits the top of the viewport
          end: "bottom center", // when the bottom of the item hits the center of the viewport
          scrub: 0.5,
          // markers: true,
          // id: "TL",
        },
      });

      tl.fromTo(imgRef.current, { yPercent: 0 }, { yPercent: 10 }, 0)
        .fromTo(
          titleContainerRef.current,
          { yPercent: 0 },
          { yPercent: -10 },
          0
        )
        .fromTo(whereRef.current, { yPercent: 0 }, { yPercent: -10 }, 0)
        .fromTo(ctaRef.current, { yPercent: 0 }, { yPercent: -10 }, 0)
        .fromTo(specsRef.current, { yPercent: 0 }, { yPercent: -10 }, 0);
    },
    { scope: containerRef }
  );
*/
