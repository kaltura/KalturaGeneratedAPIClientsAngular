
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadFilterJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    filter? : KalturaFilter;
	templateObject? : KalturaObjectBase;
}


export class KalturaBulkUploadFilterJobData extends KalturaBulkUploadJobData {

    filter : KalturaFilter;
	templateObject : KalturaObjectBase;

    constructor(data? : KalturaBulkUploadFilterJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadFilterJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaFilter, subType : 'KalturaFilter' },
				templateObject : { type : 'o', subTypeConstructor : KalturaObjectBase, subType : 'KalturaObjectBase' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadFilterJobData',KalturaBulkUploadFilterJobData);
