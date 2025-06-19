// find ./public/sponsors/big -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \)
import { Image, Paper, SimpleGrid } from "@mantine/core";
import { sponsorsBig } from "./sponsorsImagePaths";

const SponsorItemContainer = ({ children, ...props }) => {
  return (
    <Paper
      shadow="xl"
      radius="lg"
      withBorder
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.fontWhite[0],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      })}
      {...props}
    >
      {children}
    </Paper>
  );
};

function SponsorsList() {
  return (
    <>
      <SponsorItemContainer mb="xl" p="xl">
        <Image
          src={sponsorsBig[0].src}
          alt={sponsorsBig[0].alt}
          w={sponsorsBig[0].width}
          h="auto"
          loading="eager"
          m="0px"
          p="0px"
        />
      </SponsorItemContainer>
      <SimpleGrid cols={2}>
        {sponsorsBig
          .slice(1)
          .map(({ src, alt, width, backgroundColor }, idx) => (
            <SponsorItemContainer key={idx} p="md">
              <Image
                src={src}
                alt={alt}
                w={width}
                h="auto"
                loading="lazy"
                m="0px"
                p="0px"
              />
            </SponsorItemContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default SponsorsList;
