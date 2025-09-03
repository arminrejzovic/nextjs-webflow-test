import { LocationBreadcrumbs } from "@/devlink/LocationBreadcrumbs";

type BreadcrumbWrapperProps = {
  _1stBreadcrumbs?: React.ReactNode;
  breadcrumb1Link?: string;
  show2ndBreadcrumb?: boolean;
  _2ndBreadcrumbs?: React.ReactNode;
  breadcrumb2Link?: string;
  show3rdBreadcrumb?: boolean;
  _3rdBreadcrumbs?: React.ReactNode;
  breadcrumb3Link?: string;
};

const BreadcrumbWrapper = ({
  _1stBreadcrumbs,
  breadcrumb1Link,
  show2ndBreadcrumb,
  _2ndBreadcrumbs,
  breadcrumb2Link,
  show3rdBreadcrumb,
  _3rdBreadcrumbs,
  breadcrumb3Link,
}: BreadcrumbWrapperProps) => {
  return (
    <LocationBreadcrumbs
      _1stBreadcrumbs={_1stBreadcrumbs}
      breadcrumb1Link={breadcrumb1Link}
      show2ndBreadcrumb={show2ndBreadcrumb}
      _2ndBreadcrumbs={_2ndBreadcrumbs}
      breadcrumb2Link={breadcrumb2Link}
      show3rdBreadcrumb={show3rdBreadcrumb}
      _3rdBreadcrumbs={_3rdBreadcrumbs}
      breadcrumb3Link={breadcrumb3Link}
    />
  );
};

export default BreadcrumbWrapper;
