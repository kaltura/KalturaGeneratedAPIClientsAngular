
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaStorageExportObjectTaskArgs  extends KalturaObjectTaskArgs {
    storageId? : string;
}


export class KalturaStorageExportObjectTask extends KalturaObjectTask {

    storageId : string;

    constructor(data? : KalturaStorageExportObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageExportObjectTask' },
				storageId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageExportObjectTask',KalturaStorageExportObjectTask);
