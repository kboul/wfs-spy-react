import { IOperations } from '../../shared/models';

interface IOperationsMetadata {}

interface IAcceptVersions {
    versions: string[];
}

interface IOperationsDetails {
    operations: IOperations;
}

export type { IOperationsMetadata, IAcceptVersions, IOperationsDetails };
