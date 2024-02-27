"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Developer Portfolio Contact Form <onboarding@resend.dev>",
      to: ["kalpanakarki.ps@gmail.com"],
      subject: "Message from Portfolio Form",
      reply_to: senderEmail,
      react: ContactFormEmail({ message, senderEmail }) as React.ReactElement,
    });

    if (error) {
      return { error: getErrorMessage(error) };
    }

    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
