import { IOperations } from '../shared/models';

interface IOperationsMetadata {}

interface IOperationsTable {
    operations: IOperations;
}

export type { IOperationsMetadata, IOperationsTable };
