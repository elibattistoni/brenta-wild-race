import { Image, Paper, SimpleGrid } from "@mantine/core";
import { sponsorsBig, sponsorsSmall } from "./sponsorsImagePaths";

function getFilenameWithoutExtension(path) {
  const filename = path.split("/").pop();
  return filename.replace(/\.[^/.]+$/, "");
}

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
      <SponsorItemContainer mb="xl" p="xl" h="300px">
        <Image
          src={sponsorsBig[0].src}
          alt={getFilenameWithoutExtension(sponsorsBig[0].src)}
          w={sponsorsBig[0].width}
          h="auto"
          loading="eager"
          m="0px"
          p="0px"
        />
      </SponsorItemContainer>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        {sponsorsBig.slice(1).map(({ src, width }, idx) => (
          <SponsorItemContainer key={idx} p="md">
            <Image
              src={src}
              alt={getFilenameWithoutExtension(src)}
              w={width}
              h="auto"
              loading="lazy"
              m="0px"
              p="0px"
            />
          </SponsorItemContainer>
        ))}
      </SimpleGrid>
      <SimpleGrid cols={{ base: 2, sm: 4 }} mt="md">
        {sponsorsSmall.map(({ src, width }, idx) => (
          <SponsorItemContainer key={idx} p="md">
            <Image
              src={src}
              alt={getFilenameWithoutExtension(src)}
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
