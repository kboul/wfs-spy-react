import { IOperations } from '../../shared/models';

interface IOperationsMetadata {}

interface IAcceptVersions {
    versions: string[];
}

interface IOperationsTable {
    operations: IOperations;
}

export type { IOperationsMetadata, IAcceptVersions, IOperationsTable };
