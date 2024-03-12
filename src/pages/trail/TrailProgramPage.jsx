import { Container, Flex, Space, Stack, Text, em } from "@mantine/core";
import MountainDrawing from "../../assets/program-mountain.svg?react";
import classes from "./TrailProgramPage.module.css";
import Heading from "../../components/shared/Heading";
import { useMediaQuery } from "@mantine/hooks";
import PageContainer from "../../components/shared/PageContainer";
import BlueTitleLarge from "../../components/shared/BlueTitleLarge";

const ProgramDayDate = ({ day, date }) => {
  return (
    <Stack align="center" gap={0}>
      <Text>{day}</Text>
      <BlueTitleLarge text={date} />
    </Stack>
  );
};

const HourScheduleGroup = ({ hour, text }) => {
  return (
    <Stack align="center" gap={0}>
      <Text
        fz={{ base: "md", sm: "lg", md: "xl" }}
        fw="var(--mantine-fw-semibold)"
      >
        {hour}
      </Text>
      <Text fz={{ base: "sm", sm: "md", md: "lg" }}>{text}</Text>
    </Stack>
  );
};

const TrailProgramPage = () => {
  const isXXS = useMediaQuery(`(max-width: ${em(420)})`);
  return (
    <>
      <Heading subtitle="LA GARA" title="PROGRAMMA" />
      <PageContainer>
        <Flex className={classes.flex}>
          <Container fluid>
            <Stack className={classes.stack}>
              <ProgramDayDate day="sabato" date="06 Luglio 2024" />
              <HourScheduleGroup
                hour="16:00 - 20:00"
                text="Distribuzione pettorali"
              />
              <Container className={classes.mountain}>
                <MountainDrawing />
              </Container>
            </Stack>
          </Container>
          <Container fluid>
            <Stack className={classes.stack}>
              <ProgramDayDate day="domenica" date="07 Luglio 2024" />
              <Container fluid className={classes.grid}>
                <HourScheduleGroup
                  hour="06:30"
                  text="Distribuzione pettorali"
                />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="08:45" text="Briefing partenza" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="09:00" text="Partenza Wildrace" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="09:05" text="Partenza Wildrun" />

                <HourScheduleGroup hour="11:15" text="Arrivo primi atleti" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="13:00" text="Inizio pranzo" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="14:00" text="Premiazioni" />
                <Text
                  fz={{ base: "md", sm: "lg", md: "xl" }}
                  fw="var(--mantine-fw-semibold)"
                >
                  ...MUSICA e BIRRA!
                </Text>
                {!isXXS && <Space />}
              </Container>
            </Stack>
          </Container>
        </Flex>
      </PageContainer>
    </>
  );
};

export default TrailProgramPage;
