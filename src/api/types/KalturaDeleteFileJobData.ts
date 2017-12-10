
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaDeleteFileJobDataArgs  extends KalturaJobDataArgs {
    localFileSyncPath? : string;
}


export class KalturaDeleteFileJobData extends KalturaJobData {

    localFileSyncPath : string;

    constructor(data? : KalturaDeleteFileJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeleteFileJobData' },
				localFileSyncPath : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeleteFileJobData',KalturaDeleteFileJobData);
