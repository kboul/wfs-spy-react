import { FC, lazy } from "react";

import WfsRequests from "../features/WFSRequests";

const AttrNamesTypes = lazy(
  () => import("../features/DescribeFeatureType/AttrNamesTypes")
);
const FeatureTypeList = lazy(
  () => import("../features/GetCapabilities/FeatureTypeList")
);
const FilterCapabilities = lazy(
  () => import("../features/GetCapabilities/FilterCapabilities")
);
const OperationsMetadata = lazy(
  () => import("../features/GetCapabilities/OperationsMetadata")
);
const ServiceIdentification = lazy(
  () => import("../features/GetCapabilities/ServiceIdentification")
);
const ServiceProvider = lazy(
  () => import("../features/GetCapabilities/ServiceProvider")
);
const Statistics = lazy(() => import("../features/Statistics"));

const getCapRoute = "/get-capabilities";

export interface Routes {
  Component: FC;
  name: string;
  path: string;
}

const getCapRoutes: Routes[] = [
  {
    Component: ServiceIdentification,
    name: "Service Identification",
    path: `${getCapRoute}/service-identification`
  },
  {
    Component: ServiceProvider,
    name: "Service Provider",
    path: `${getCapRoute}/service-provider`
  },
  {
    Component: OperationsMetadata,
    name: "Operations Metadata",
    path: `${getCapRoute}/operations-metadata`
  },
  {
    Component: FeatureTypeList,
    name: "FeatureTypeList",
    path: `${getCapRoute}/feature-type-list`
  },
  {
    Component: FilterCapabilities,
    name: "Filter Capabilities",
    path: `${getCapRoute}/filter-capabilities`
  }
];

const descrFeatTypeRoutes: Routes[] = [
  {
    Component: AttrNamesTypes,
    name: "Attribute Names & Types",
    path: "/describe-feature-type/attribute-names-types"
  }
];

const mainRoutes: Routes[] = [
  {
    Component: WfsRequests,
    name: "",
    path: "/wfs-requests"
  },
  {
    Component: Statistics,
    name: "Statistics",
    path: "/statistics"
  }
];

export { getCapRoutes, descrFeatTypeRoutes, mainRoutes };
