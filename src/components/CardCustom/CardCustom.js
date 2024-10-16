import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function CardCustom(props) {
  return (
    <Stack spacing="4">
      <Card maxW="sm">
        <CardBody>
          <iframe
            src={props.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.title}</Heading>
            <Text>{props.desc}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}
export default CardCustom;
