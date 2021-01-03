import { extractFilterCap } from '../wfsMetadata';

export default function getCompOperList(getCapResp: string): string[] {
    return extractFilterCap(getCapResp, 'ComparisonOperator');
}
