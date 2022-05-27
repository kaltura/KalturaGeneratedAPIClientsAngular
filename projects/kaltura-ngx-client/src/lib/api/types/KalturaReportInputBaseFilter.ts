
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportInputBaseFilterArgs  extends KalturaObjectBaseArgs {
    fromDate? : Date;
	toDate? : Date;
	fromDay? : string;
	toDay? : string;
}


export class KalturaReportInputBaseFilter extends KalturaObjectBase {

    fromDate : Date;
	toDate : Date;
	fromDay : string;
	toDay : string;

    constructor(data? : KalturaReportInputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportInputBaseFilter' },
				fromDate : { type : 'd' },
				toDate : { type : 'd' },
				fromDay : { type : 's' },
				toDay : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportInputBaseFilter'] = KalturaReportInputBaseFilter;