import { Icon } from "@chakra-ui/react";
import React, { ComponentProps } from "react";

export function Logo(props: ComponentProps<typeof Icon>) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="139"
      height="64"
      fill="#8d4c89"
      viewBox="0 0 139 64"
      {...props}
    >
      <path d="M13.85 50.8c-2.233 0-4.283-.5-6.15-1.5s-3.367-2.45-4.5-4.35c-1.1-1.9-1.65-4.2-1.65-6.9 0-1.9.317-3.683.95-5.35.633-1.667 1.517-3.133 2.65-4.4a13.03 13.03 0 014.1-3c1.6-.733 3.367-1.1 5.3-1.1 2.133 0 3.9.333 5.3 1 1.433.633 2.5 1.483 3.2 2.55.733 1.033 1.1 2.133 1.1 3.3 0 .967-.3 1.833-.9 2.6-.567.733-1.383 1.117-2.45 1.15-1.267.033-2.15-.317-2.65-1.05-.5-.767-.75-1.5-.75-2.2 0-.3.05-.65.15-1.05.1-.433.25-.817.45-1.15a2.25 2.25 0 00-1.05-1.1 4.578 4.578 0 00-1.45-.45c-.467-.1-.85-.133-1.15-.1-1.6.1-2.917.9-3.95 2.4-1.033 1.5-1.55 3.667-1.55 6.5 0 1.667.2 3.233.6 4.7.433 1.433 1.133 2.617 2.1 3.55.967.933 2.267 1.433 3.9 1.5 1.4.033 2.767-.3 4.1-1 1.333-.7 2.467-1.65 3.4-2.85l2.3 2.25c-1.2 1.667-2.45 2.933-3.75 3.8-1.3.867-2.6 1.45-3.9 1.75-1.267.333-2.517.5-3.75.5zm27.979-.8c-.067-.467-.117-.85-.15-1.15 0-.333-.017-.717-.05-1.15-1.133 1.133-2.333 1.933-3.6 2.4-1.267.467-2.55.7-3.85.7-2.133 0-3.8-.633-5-1.9-1.2-1.267-1.8-2.85-1.8-4.75 0-1.6.4-2.967 1.2-4.1.833-1.133 1.917-2.05 3.25-2.75 1.367-.733 2.867-1.283 4.5-1.65 1.667-.4 3.333-.633 5-.7v-2.6c0-.867-.117-1.65-.35-2.35-.2-.7-.567-1.25-1.1-1.65-.5-.4-1.217-.583-2.15-.55a5.934 5.934 0 00-1.85.4c-.6.233-1.117.567-1.55 1 .267.3.433.633.5 1 .067.333.1.633.1.9 0 .667-.267 1.367-.8 2.1-.533.7-1.383 1.033-2.55 1-1-.033-1.767-.383-2.3-1.05-.533-.667-.8-1.45-.8-2.35 0-1.333.467-2.483 1.4-3.45.967-1 2.25-1.767 3.85-2.3 1.6-.567 3.367-.85 5.3-.85 2.933 0 5.2.767 6.8 2.3 1.633 1.5 2.45 3.917 2.45 7.25v2.9c0 .8-.017 1.6-.05 2.4v2.9c0 .467-.017 1.133-.05 2a51.4 51.4 0 01-.15 2.4c.567-.067 1.167-.1 1.8-.1a29.85 29.85 0 011.45-.05V50h-9.45zm-.55-11.5c-.933.1-1.817.267-2.65.5-.833.233-1.567.55-2.2.95-.6.4-1.083.883-1.45 1.45-.333.567-.5 1.2-.5 1.9.033.933.333 1.6.9 2 .567.4 1.217.6 1.95.6.767 0 1.483-.167 2.15-.5a6.885 6.885 0 001.8-1.3v-.95-1-1.8-1.85zm12.07 8.25c.934 0 1.6-.183 2-.55.434-.367.7-.883.8-1.55.1-.7.15-1.483.15-2.35V21.75c0-.6.017-1.283.05-2.05.034-.8.084-1.567.15-2.3-.533.033-1.166.067-1.9.1-.7 0-1.233.017-1.6.05v-3.8c1.567 0 2.867-.083 3.9-.25 1.067-.167 1.9-.367 2.5-.6.634-.233 1.067-.45 1.3-.65h2.7v29.7c0 .467-.016 1.133-.05 2a51.4 51.4 0 01-.15 2.4c.567-.067 1.167-.1 1.8-.1a29.85 29.85 0 011.45-.05V50h-13.1v-3.25zM69.727 50v-3.25c.933 0 1.6-.183 2-.55.4-.367.65-.883.75-1.55.133-.7.2-1.483.2-2.35v-8.4c0-.6.016-1.267.05-2 .033-.767.083-1.517.15-2.25-.534.033-1.167.067-1.9.1-.7 0-1.234.017-1.6.05V26c1.533 0 2.833-.083 3.9-.25 1.066-.167 1.9-.367 2.5-.6.633-.233 1.066-.45 1.3-.65h2.45c.066.333.1.75.1 1.25.033.5.066.917.1 1.25a14.63 14.63 0 013.65-2.05c1.333-.5 2.583-.75 3.75-.75 1.533 0 2.8.283 3.8.85 1 .533 1.8 1.35 2.4 2.45 1.2-1 2.516-1.8 3.95-2.4 1.466-.6 2.866-.9 4.2-.9 2.7 0 4.733.783 6.1 2.35 1.4 1.533 2.1 4.217 2.1 8.05v7.35c0 .467-.017 1.133-.05 2a53.39 53.39 0 01-.15 2.4c.533-.067 1.116-.1 1.75-.1.666-.033 1.166-.05 1.5-.05V50h-12.65v-3.25c.766 0 1.316-.183 1.65-.55.366-.367.6-.883.7-1.55.1-.7.15-1.483.15-2.35v-7.65c-.034-2.167-.4-3.667-1.1-4.5-.667-.833-1.567-1.267-2.7-1.3a5.533 5.533 0 00-2.45.45 9.94 9.94 0 00-2 1.2c.167.667.283 1.4.35 2.2.067.8.1 1.65.1 2.55v6.7c0 .467-.017 1.133-.05 2a51.676 51.676 0 01-.15 2.4c.533-.067 1.116-.1 1.75-.1.633-.033 1.133-.05 1.5-.05V50h-12.9v-3.25c.866 0 1.483-.183 1.85-.55.4-.367.65-.883.75-1.55.1-.7.15-1.483.15-2.35l-.05-7.8c0-2.167-.317-3.65-.95-4.45-.634-.8-1.517-1.217-2.65-1.25-.834 0-1.617.183-2.35.55-.7.367-1.334.8-1.9 1.3v11.3c0 .467-.017 1.133-.05 2a51.676 51.676 0 01-.15 2.4c.533-.067 1.083-.1 1.65-.1a24.27 24.27 0 011.35-.05V50h-12.85zm45.996-3.25c.933 0 1.6-.183 2-.55.4-.367.65-.883.75-1.55.133-.7.2-1.483.2-2.35v-8.4c0-.6.017-1.267.05-2 .033-.767.083-1.517.15-2.25-.533.033-1.167.067-1.9.1-.7 0-1.233.017-1.6.05V26h2c1.3 0 2.483-.167 3.55-.5 1.1-.333 1.817-.667 2.15-1h2.45c.067.333.117.967.15 1.9.033.9.05 1.7.05 2.4.9-1.1 1.75-1.983 2.55-2.65.8-.667 1.583-1.15 2.35-1.45.8-.333 1.6-.5 2.4-.5 1.167 0 2.183.333 3.05 1 .867.633 1.3 1.683 1.3 3.15 0 .5-.117 1.033-.35 1.6-.233.533-.6.983-1.1 1.35-.5.367-1.183.55-2.05.55-.667 0-1.35-.2-2.05-.6-.7-.4-1.1-1.167-1.2-2.3-.667 0-1.333.283-2 .85a9.186 9.186 0 00-1.8 1.95c-.5.733-.85 1.417-1.05 2.05v8.15c0 .467-.017 1.133-.05 2a50.593 50.593 0 01-.15 2.4c.533-.067 1.117-.1 1.75-.1.667-.033 1.167-.05 1.5-.05V50h-13.1v-3.25z"></path>
    </Icon>
  );
}
