import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const ButtonLocalCSF3: Story = {
  render: () => (
    <div>
      <Button
        primary
        label="Button in CSF 3 with render() and in local file (main stories file)"
      />
      <p>"Show code" is enabled</p>
    </div>
  ),
  args: {
    label:
      "BTW: is args should be mandatory (TS warning) if render function is provided?",
  },
};

export { ButtonExternalCSF3 } from "./Button.externalcsf3.story";

export const ButtonLocalCSF2 = () => (
  <div>
    <Button
      primary
      label="Button in CSF 2 and in local file (main stories file)"
    />
    <p>"Show code" is enabled</p>
  </div>
);

export { ButtonExternalCSF2 } from "./Button.externalcsf2.story";
