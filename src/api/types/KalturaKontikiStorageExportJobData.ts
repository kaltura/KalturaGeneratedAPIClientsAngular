
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageExportJobData, KalturaStorageExportJobDataArgs } from './KalturaStorageExportJobData';

export interface KalturaKontikiStorageExportJobDataArgs  extends KalturaStorageExportJobDataArgs {
    flavorAssetId? : string;
	contentMoid? : string;
	serviceToken? : string;
}


export class KalturaKontikiStorageExportJobData extends KalturaStorageExportJobData {

    flavorAssetId : string;
	contentMoid : string;
	serviceToken : string;

    constructor(data? : KalturaKontikiStorageExportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKontikiStorageExportJobData' },
				flavorAssetId : { type : 's' },
				contentMoid : { type : 's' },
				serviceToken : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKontikiStorageExportJobData',KalturaKontikiStorageExportJobData);
