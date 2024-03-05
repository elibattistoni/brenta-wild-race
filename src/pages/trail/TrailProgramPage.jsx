import { Container, Flex, Space, Stack, Text, em } from "@mantine/core";
import MountainDrawing from "../../assets/program-mountain.svg?react";
import classes from "./TrailProgramPage.module.css";
import Heading from "../../components/shared/Heading";
import { useMediaQuery } from "@mantine/hooks";
import PageContainer from "../../components/shared/PageContainer";
import BlueTitle from "../../components/shared/BlueTitle";

const ProgramDayDate = ({ day, date }) => {
  return (
    <Stack align="center" gap={0}>
      <Text>{day}</Text>
      <BlueTitle text={date} />
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
              <ProgramDayDate day="sabato" date="11/07/2024" />
              <HourScheduleGroup
                hour="16:00 - 18:00"
                text="Distribuzione pettorali"
              />
              <Container className={classes.mountain}>
                <MountainDrawing />
              </Container>
            </Stack>
          </Container>
          <Container fluid>
            <Stack className={classes.stack}>
              <ProgramDayDate day="domenica" date="12/07/2024" />
              <Container fluid className={classes.grid}>
                <HourScheduleGroup
                  hour="06:30"
                  text="Distribuzione pettorali"
                />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="08:15" text="Briefing pre-partenza" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="08:30" text="Partenza" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="10:45" text="Arrivo primi atleti" />
                <HourScheduleGroup hour="12:30" text="Inizio pranzo" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="14:00" text="Premiazioni" />
                {!isXXS && <Space />}
                <HourScheduleGroup hour="14:15" text="Ultimi arrivi" />
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
