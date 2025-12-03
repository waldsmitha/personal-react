import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { Box, Stack, Typography } from "@mui/material";
import { experienceData } from "../data";

function TimelineItemComponent({ item }) {
  console.log(item);
  const { company, roles } = item;

  return (
    <TimelineItem
      sx={{
        "&.MuiTimelineItem-root::before": {
          content: "none",
        },
      }}
    >
      <Stack>
        <TimelineOppositeContent sx={{ width: 100, fontSize: 20, mr: 2 }}>
          {company}
        </TimelineOppositeContent>
      </Stack>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <ContentComponent roles={roles} />
      </TimelineContent>
    </TimelineItem>
  );
}

function ContentComponent({ roles }) {
  console.log(roles);
  return (
    <Box component="ul" ml={2} pb={2} px={2}>
      {roles.map((item) => (
        <Box component="li">
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2">{item.dates}</Typography>
          </Stack>
          <Stack component="ul" ml={2} p={2} spacing={1}>
            {item.achievements.map((achievement) => (
              <Typography component="li" sx={{ listStyle: "disc" }}>
                {achievement}
              </Typography>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

function Experience() {
  return (
    <>
      <Box id="experience" mb={10} />
      <Stack alignItems="flex-start" px={6}>
        <Typography variant="h4">Experience:</Typography>
        <Timeline>
          {experienceData.map((item) => (
            <TimelineItemComponent item={item} />
          ))}
        </Timeline>
      </Stack>
    </>
  );
}

export default Experience;
