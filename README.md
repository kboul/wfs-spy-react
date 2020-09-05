# WFS Spy

WFS Spy is a client application which extracts Web Feature Services' (WFS) metadata. It was developed in 2015 and was my master thesis project in the department of Geodesy & Geoinformation Science at the Techical University of Berlin (TU Berlin) using an old JS stack (jquery, es5, css, no css framework). This is an approach to rewrite the application using a modern JS stack (React, Typescript, Bootstrap, SASS, npm) and make it also mobile friendly.

WFS information extraction is achieved by querying the service itself and those queries follow Open Geospatial Consortium's (OGC) standards. It was aimed to provide a generic approach to cover as many WFS as possible and bridge gaps between existing service variations.

These variations can be further branched and be found not only in different WFS versions but within one version as well. In order to keep the effort on a reasonable level, it was decided to support versions 2.0.x, thus 2.0.0 and 2.0.2, which are the latest and currently widely used. A large number of services that support versions 2.0.x support also versions 1.x, thus 1.0.0 and 1.1.0, therefore the application can be addressed to them as well. However, there are older services which support only 1.x versions. In that case, meta information cannot currently be extracted for them.

The user will be able to derive WFS metadata regarding the supported FeatureTypes (using either GET or POST methods) via a GetCapabilities request and the attribute names via a DescribeFeatureType request. Following, a GetPropertyValue request will be provided to derive the attribute values. Last, using a GetPropertyValue filter request, it will be possible to derive a desired subset of the attribute values or else acquire further knowledge about the content and distribution of those values, which is the main objective of this thesis.

At this point, the application will not provide geometrical feature manipulation via features' geometry filter extraction. It can be included in a future extension of the application. The application aims explicitly in the extraction and filter of WFS features' values.

## WFS metadata statistics

|                        WFS Url                         | Service Id | Accept Versions | Service Provider | Operations Metadata | typenames / FeatureTypeList | Filter Capabilities |              valueReferences              |
| :----------------------------------------------------: | :--------: | :-------------: | :--------------: | :-----------------: | :-------------------------: | :-----------------: | :---------------------------------------: |
|            http://daim.lfv.se/geoserver/wfs            |     7      |        3        |        9         |          8          |             36              |       yes all       | requires individual DescFeatType requests |
| http://data.gov.au/geoserver/ballarat-corner-shops/wfs |     7      |        3        |        9         |         11          |              1              |       yes all       |                     -                     |

## Run the project

clone the project

select master branch

Navigate to the root folder:

```
npm install
```

```
npm start
```

browser listens to [http://localhost:3000](http://localhost:3000) as default port
