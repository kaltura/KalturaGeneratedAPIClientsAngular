
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageJobData, KalturaStorageJobDataArgs } from './KalturaStorageJobData';

export interface KalturaStorageExportJobDataArgs  extends KalturaStorageJobDataArgs {
    force? : boolean;
	createLink? : boolean;
}


export class KalturaStorageExportJobData extends KalturaStorageJobData {

    force : boolean;
	createLink : boolean;

    constructor(data? : KalturaStorageExportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageExportJobData' },
				force : { type : 'b' },
				createLink : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageExportJobData',KalturaStorageExportJobData);
