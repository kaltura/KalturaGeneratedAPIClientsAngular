
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryVendorTaskBaseFilter, KalturaEntryVendorTaskBaseFilterArgs } from './KalturaEntryVendorTaskBaseFilter';

export interface KalturaEntryVendorTaskFilterArgs  extends KalturaEntryVendorTaskBaseFilterArgs {
    freeText? : string;
	expectedFinishTimeGreaterThanOrEqual? : Date;
	expectedFinishTimeLessThanOrEqual? : Date;
}


export class KalturaEntryVendorTaskFilter extends KalturaEntryVendorTaskBaseFilter {

    freeText : string;
	expectedFinishTimeGreaterThanOrEqual : Date;
	expectedFinishTimeLessThanOrEqual : Date;

    constructor(data? : KalturaEntryVendorTaskFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTaskFilter' },
				freeText : { type : 's' },
				expectedFinishTimeGreaterThanOrEqual : { type : 'd' },
				expectedFinishTimeLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryVendorTaskFilter'] = KalturaEntryVendorTaskFilter;