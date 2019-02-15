
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportResponseOptionsArgs  extends KalturaObjectBaseArgs {
    delimiter? : string;
	skipEmptyDates? : boolean;
}


export class KalturaReportResponseOptions extends KalturaObjectBase {

    delimiter : string;
	skipEmptyDates : boolean;

    constructor(data? : KalturaReportResponseOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportResponseOptions' },
				delimiter : { type : 's' },
				skipEmptyDates : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportResponseOptions'] = KalturaReportResponseOptions;