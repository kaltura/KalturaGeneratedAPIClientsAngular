
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSystemPartnerUsageFilterArgs  extends KalturaFilterArgs {
    fromDate? : number;
	toDate? : number;
	timezoneOffset? : number;
}


export class KalturaSystemPartnerUsageFilter extends KalturaFilter {

    fromDate : number;
	toDate : number;
	timezoneOffset : number;

    constructor(data? : KalturaSystemPartnerUsageFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSystemPartnerUsageFilter' },
				fromDate : { type : 'n' },
				toDate : { type : 'n' },
				timezoneOffset : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSystemPartnerUsageFilter'] = KalturaSystemPartnerUsageFilter;