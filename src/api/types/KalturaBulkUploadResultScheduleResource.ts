
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultScheduleResourceArgs  extends KalturaBulkUploadResultArgs {
    resourceId? : string;
	name? : string;
	type? : string;
	systemName? : string;
	description? : string;
	tags? : string;
	parentType? : string;
	parentSystemName? : string;
}


export class KalturaBulkUploadResultScheduleResource extends KalturaBulkUploadResult {

    resourceId : string;
	name : string;
	type : string;
	systemName : string;
	description : string;
	tags : string;
	parentType : string;
	parentSystemName : string;

    constructor(data? : KalturaBulkUploadResultScheduleResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultScheduleResource' },
				resourceId : { type : 's' },
				name : { type : 's' },
				type : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				parentType : { type : 's' },
				parentSystemName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultScheduleResource',KalturaBulkUploadResultScheduleResource);
