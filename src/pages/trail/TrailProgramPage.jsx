import {
  Container,
  Flex,
  Space,
  Stack,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import MountainDrawing from "../../assets/program-mountain.svg?react";
import classes from "./TrailProgramPage.module.css";
import Heading from "../../components/shared/Heading";

const ProgramDayDate = ({ day, date }) => {
  return (
    <Stack align="center" gap={0}>
      <Text>{day}</Text>
      <Title order={4} c="bluePrimary.0">
        {date}
      </Title>
    </Stack>
  );
};

const HourScheduleGroup = ({ hour, text }) => {
  const theme = useMantineTheme();
  return (
    <Stack align="center" gap={0}>
      <Text size="xl" fw={theme.other.fontWeights.semiBold}>
        {hour}
      </Text>
      <Text size="lg">{text}</Text>
    </Stack>
  );
};

const TrailProgramPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Heading subtitle="LA GARA" title="PROGRAMMA" />
      <Container fluid mt="xl">
        <Flex>
          <Container fluid>
            <Stack align="center" gap="xl">
              <ProgramDayDate day="sabato" date="11/07/2024" />
              <HourScheduleGroup
                hour="16:00 - 18:00"
                text="Distribuzione pettorali"
              />
              <Container mt={rem(160)}>
                <MountainDrawing />
              </Container>
            </Stack>
          </Container>
          <Container fluid>
            <Stack align="center" gap="xl">
              <ProgramDayDate day="domenica" date="12/07/2024" />
              <Container fluid className={classes.grid}>
                <HourScheduleGroup
                  hour="06:30"
                  text="Distribuzione pettorali"
                />
                <Space />
                <HourScheduleGroup hour="08:15" text="Briefing pre-partenza" />
                <Space />
                <HourScheduleGroup hour="08:30" text="Partenza" />
                <Space />
                <HourScheduleGroup hour="10:45" text="Arrivo primi atleti" />
                <HourScheduleGroup hour="12:30" text="Inizio pranzo" />
                <Space />
                <HourScheduleGroup hour="14:00" text="Premiazioni" />
                <Space />
                <HourScheduleGroup hour="14:15" text="Ultimi arrivi" />
                <Text size="xl" fw={theme.other.fontWeights.semiBold}>
                  ...MUSICA e BIRRA!
                </Text>
                <Space />
              </Container>
            </Stack>
          </Container>
        </Flex>
      </Container>
    </>
  );
};

export default TrailProgramPage;
