## API Report File for "@azure/eventhubs-checkpointstore-blob"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Checkpoint } from '@azure/event-hubs';
import { ContainerClient } from '@azure/storage-blob';
import { PartitionManager } from '@azure/event-hubs';
import { PartitionOwnership } from '@azure/event-hubs';

// @public
export class BlobPartitionManager implements PartitionManager {
    constructor(containerClient: ContainerClient);
    claimOwnership(partitionOwnership: PartitionOwnership[]): Promise<PartitionOwnership[]>;
    listOwnership(eventHubName: string, consumerGroupName: string): Promise<PartitionOwnership[]>;
    updateCheckpoint(checkpoint: Checkpoint): Promise<string>;
}


// (No @packageDocumentation comment for this package)

```
