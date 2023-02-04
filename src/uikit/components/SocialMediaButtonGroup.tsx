import { SimpleGrid, Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineGoogle,
} from "react-icons/ai";
import { signInWithGoogle } from "src/modules/Auth/authService";

type SocialMediaButtonProps = {
  label: string;
  icon: IconType;
  onClick?: {
    register: () => void;
    login: () => void;
  };
};

type SocialMediaButtonGroupProps = {
  variant: "login" | "register";
};

const buttons: Array<SocialMediaButtonProps> = [
  {
    label: "Google",
    icon: AiOutlineGoogle,
    onClick: {
      login: signInWithGoogle,
      register: () => ({}),
    },
  },
  {
    label: "GitHub",
    icon: AiOutlineGithub,
  },
  {
    label: "LinkedIn",
    icon: AiFillLinkedin,
  },
];

export const SocialMediaButtonGroup = ({
  variant,
}: SocialMediaButtonGroupProps) => {
  return (
    <SimpleGrid w="100%" columns={3} spacing="1rem">
      {buttons.map((button, i) => (
        <Button
          key={i}
          leftIcon={<Icon as={button.icon} />}
          variant="outlined"
          onClick={button.onClick?.[variant]}
        >
          {button.label}
        </Button>
      ))}
    </SimpleGrid>
  );
};
