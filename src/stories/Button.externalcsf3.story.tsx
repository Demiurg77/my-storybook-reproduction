import type { StoryObj } from "@storybook/react";
import meta from "./Button.stories";
import { Button } from "./Button";

type Story = StoryObj<typeof meta>;

export const ButtonExternalCSF3: Story = {
  render: () => (
    <div>
      <Button
        primary
        label="Button in CSF 3 with render() and in external file"
      />
      <p style={{ color: "red" }}>"Show code" is disabled.</p>
    </div>
  ),
  args: {
    label:
      "BTW: is args should be mandatory (TS warning) if render function is provided?",
  },
};
