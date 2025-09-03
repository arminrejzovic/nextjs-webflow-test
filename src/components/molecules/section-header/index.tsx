import { SectionHeaderLocation } from "@/devlink/SectionHeaderLocation";

interface SectionHeaderProps {
  as?: React.ElementType;
  title?: string;
  text?: string;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant:
    | "Base"
    | "py-64"
    | "pt-64"
    | "pt-64-pb-32"
    | "H5 pt-64-pb-32"
    | "pb-64"
    | "Left align/pb-16"
    | "pb-32";
  hideTitle?: boolean;
  hideText?: boolean;
}

const SectionHeader = ({
  as = "div",
  title,
  text,
  titleTag = "h2",
  variant,
  hideTitle,
  hideText,
}: SectionHeaderProps) => {
  return (
    <SectionHeaderLocation
      as={as}
      title={title}
      text={text}
      titleTag={titleTag}
      variant={variant}
      hideTitle={hideTitle}
      hideText={hideText}
    />
  );
};

export default SectionHeader;
