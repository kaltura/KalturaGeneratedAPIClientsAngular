
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadEntryDataArgs  extends KalturaBulkUploadObjectDataArgs {
    conversionProfileId? : number;
}


export class KalturaBulkUploadEntryData extends KalturaBulkUploadObjectData {

    conversionProfileId : number;

    constructor(data? : KalturaBulkUploadEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadEntryData' },
				conversionProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadEntryData',KalturaBulkUploadEntryData);
