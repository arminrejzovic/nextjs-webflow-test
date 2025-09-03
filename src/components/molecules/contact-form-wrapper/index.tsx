"use client";

import { ContactLocation } from "@/devlink/ContactLocation";

export const ContactFormWrapper = () => {
  return (
    <ContactLocation
      formProps={{
        /* If an exception is raised by this function, 
       the Error state is automatically rendered.
       Otherwise, Success state is rendered. */
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          fetch("/contact-us", {
            body: new FormData(e.target as HTMLFormElement),
            method: "POST",
          });
        },
      }}
    />
  );
};
