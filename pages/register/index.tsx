import Button from "@b2list/components/Button";
import { styled } from "@b2list/config/stitches.config";
import { FormattedMessage } from "react-intl";

const Box = styled("div", {
  margin: "20px 30px",
});

const Form = styled("form", {});

const FormControl = styled("div", {
  marginBottom: 10,
});

const Input = styled("input", {
  display: "block",
  width: 300,
  height: 34,
  padding: "6px 12px",
  fontSize: 14,
  lineHeight: "1.42857143",
  color: "#555",
  backgroundColor: "#fff",
  backgroundImage: "none",
  border: "1px solid #ccc",
  borderRadius: 4,
});

const Label = styled("label", {
  fontSize: 16,
  display: "inline-block",
  maxWidth: "100%",
  marginBottom: 5,
  fontWeight: 700,
});

const ButtonBox = styled("div", {
  marginTop: 20,
});

const Register = () => {
  return (
    <Box>
      <Form>
        <FormControl>
          <Label>
            <FormattedMessage id="firstName" />
          </Label>
          <Input />
        </FormControl>
        <FormControl>
          <Label>
            <FormattedMessage id="middleName" />
          </Label>
          <Input />
        </FormControl>
        <FormControl>
          <Label>
            <FormattedMessage id="lastName" />
          </Label>
          <Input />
        </FormControl>
        <ButtonBox>
          <Button color="primary">
            <FormattedMessage id="register" />
          </Button>
        </ButtonBox>
      </Form>
    </Box>
  );
};

export default Register;
