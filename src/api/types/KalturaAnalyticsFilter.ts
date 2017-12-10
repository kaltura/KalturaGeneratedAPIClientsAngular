
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReportFilter } from './KalturaReportFilter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAnalyticsFilterArgs  extends KalturaObjectBaseArgs {
    from_time? : string;
	to_time? : string;
	metrics? : string;
	utcOffset? : number;
	dimensions? : string;
	filters? : KalturaReportFilter[];
	orderBy? : string;
}


export class KalturaAnalyticsFilter extends KalturaObjectBase {

    from_time : string;
	to_time : string;
	metrics : string;
	utcOffset : number;
	dimensions : string;
	filters : KalturaReportFilter[];
	orderBy : string;

    constructor(data? : KalturaAnalyticsFilterArgs)
    {
        super(data);
        if (typeof this.filters === 'undefined') this.filters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnalyticsFilter' },
				from_time : { type : 's' },
				to_time : { type : 's' },
				metrics : { type : 's' },
				utcOffset : { type : 'n' },
				dimensions : { type : 's' },
				filters : { type : 'a', subTypeConstructor : KalturaReportFilter, subType : 'KalturaReportFilter' },
				orderBy : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnalyticsFilter',KalturaAnalyticsFilter);
