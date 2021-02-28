# WFS Spy

WFS Spy is a client application which extracts Web Feature Services' (WFS) metadata. It was developed in 2015 and was my master thesis project in the department of Geodesy & Geoinformation Science at the Techical University of Berlin (TU Berlin) using an old JS stack (jquery, es5, css, no css framework). This is an approach to rewrite the application using a modern JS stack (React, Typescript, Bootstrap, SASS, npm) and make it also mobile friendly.

WFS information extraction is achieved by querying the service itself and those queries follow Open Geospatial Consortium's (OGC) standards. It was aimed to provide a generic approach to cover as many WFS as possible and bridge gaps between existing service variations.

These variations can be further branched and be found not only in different WFS versions but within one version as well. In order to keep the effort on a reasonable level, it was decided to support versions 2.0.x, thus 2.0.0 and 2.0.2, which are the latest and currently widely used. A large number of services that support versions 2.0.x support also versions 1.x, thus 1.0.0 and 1.1.0, therefore the application can be addressed to them as well. However, there are older services which support only 1.x versions. In that case, meta information cannot currently be extracted for them.

The user will be able to derive WFS metadata regarding the supported FeatureTypes (using either GET or POST methods) via a GetCapabilities request and the attribute names via a DescribeFeatureType request. Following, a GetPropertyValue request will be provided to derive the attribute values. Last, using a GetPropertyValue filter request, it will be possible to derive a desired subset of the attribute values or else acquire further knowledge about the content and distribution of those values, which is the main objective of this thesis.

At this point, the application will not provide geometrical feature manipulation via features' geometry filter extraction. It can be included in a future extension of the application. The application aims explicitly in the extraction and filter of WFS features' values.

## WFS metadata statistics

|  #  |                        WFS Url                         | Service Id | Accept Versions | Service Provider | Operations Metadata | Filter Capabilities | typenames / FeatureTypeList | valueReferences | individual DescFeatType requests | POST |
| :-: | :----------------------------------------------------: | :--------: | :-------------: | :--------------: | :-----------------: | :-----------------: | :-------------------------: | :-------------: | :------------------------------: | ---- |
|  1  |            http://daim.lfv.se/geoserver/wfs            |     7      |        3        |        9         |          8          |       yes all       |             36              |       yes       |               yes                | yes  |
|  2  | http://data.gov.au/geoserver/ballarat-corner-shops/wfs |     7      |        3        |        9         |         11          |       yes all       |              1              |       yes       |                no                | no   |
|  3  |     http://geoserv.weichand.de:8080/geoserver/wfs      |     7      |        3        |        8         |          8          |       yes all       |              5              |       yes       |                no                | yes  |
|  4  |      http://kls.pria.ee/geoserver/pria_avalik/ows      |     7      |        3        |        3         |          8          |       yes all       |              6              |       yes       |               yes                | no   |
|  5  |               http://sdi.gdos.gov.pl/wfs               |     7      |        3        |        3         |          8          |       yes all       |             16              |       yes       |                no                | yes  |
|  6  |       http://inspire.geop.sazp.sk/geoserver/ows        |     7      |        3        |        7         |          8          |       yes all       |              3              |       yes       |               yes                | yes  |
|  7  |         https://demo.mapserver.org/cgi-bin/wfs         |     7      |        3        |        4         |          6          |    no functions     |              2              |       no        |                no                | yes  |
|  8  |      http://inspire.sthelens.gov.uk/geoserver/ows      |     7      |        3        |        6         |         11          |       yes all       |              4              |       yes       |                no                | yes  |
|  9  |      http://tips.noveltis.com/geoserver/tips/wfs       |     7      |        3        |        6         |         11          |       yes all       |              5              |       yes       |                no                | no   |
| 10  | http://inspire.dundeecity.gov.uk/geoserver/inspire/wfs |     7      |        3        |        8         |          8          |       yes all       |             21              |       yes       |                no                | yes  |
| 11  |           http://maps.gns.cri.nz/geology/ows           |     7      |        3        |        6         |          8          |       yes all       |             55              |       yes       |               yes                | yes  |
| 12  |        http://www.geo-spatial.org/geoserver/ows        |     7      |        3        |        6         |          8          |       yes all       |             15              |       yes       |               yes                | no   |
| 13  |  http://stadtplaene.ulm.de/geoserver/geoportalUlm/wfs  |     7      |        3        |        7         |         11          |       yes all       |             32              |       yes       |                no                | yes  |
| 14  |       http://kort.strandnr.dk/geoserver/nobc/wfs       |     7      |        3        |        8         |          8          |       yes all       |              9              |       yes       |                no                | yes  |
| 15  |            http://gis.epa.ie/geoserver/wfs             |     7      |        3        |        9         |          8          |       yes all       |             362             |       yes       |               yes                | no   |
| 16  |                 http://mapfog.com/ows                  |

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

### GetPropertyValue Filter GET Requests

GetPropertyValue Filter **get requests** can not be made on **Chrome** (version 87.0.4280.141 & above) and **Opera** (version:73.0.3856.284 & above) due to this known [issue](https://www.chromestatus.com/feature/5735596811091968). As a result other browsers should be used to make these requests.
It has been tested and works without any issues on **Firefox** (version 84.0.2) and **Safari** (version 14.0.2).
