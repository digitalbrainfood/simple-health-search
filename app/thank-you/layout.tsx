import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Find The Plan",
  description: "Thank you for contacting Find The Plan. A licensed health insurance specialist will reach out shortly to help you find the perfect coverage.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
