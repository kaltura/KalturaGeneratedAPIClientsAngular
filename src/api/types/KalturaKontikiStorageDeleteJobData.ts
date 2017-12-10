
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageDeleteJobData, KalturaStorageDeleteJobDataArgs } from './KalturaStorageDeleteJobData';

export interface KalturaKontikiStorageDeleteJobDataArgs  extends KalturaStorageDeleteJobDataArgs {
    contentMoid? : string;
	serviceToken? : string;
}


export class KalturaKontikiStorageDeleteJobData extends KalturaStorageDeleteJobData {

    contentMoid : string;
	serviceToken : string;

    constructor(data? : KalturaKontikiStorageDeleteJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKontikiStorageDeleteJobData' },
				contentMoid : { type : 's' },
				serviceToken : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKontikiStorageDeleteJobData',KalturaKontikiStorageDeleteJobData);
