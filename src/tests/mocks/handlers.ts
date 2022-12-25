/* eslint-disable @typescript-eslint/no-unused-vars */
import { rest } from "msw";

import { adjustProxyToUrl } from "../../features/WFSRequests/utils";
import getGetCapResponse from "../data/getGetCapResponse";

const wfsUrl = "http://kort.strandnr.dk/geoserver/nobc/wfs";

export default [
  rest.get(adjustProxyToUrl(wfsUrl), (req, res, ctx) => {
    // const query = req.url.searchParams;
    // const version = query.get("version");
    // const request = query.get("request");
    // const service = query.get("service");
    return res(ctx.xml(getGetCapResponse));
  })
];
