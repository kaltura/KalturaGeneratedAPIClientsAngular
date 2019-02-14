
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportResponseOptionsArgs  extends KalturaObjectBaseArgs {
    delimiter? : string;
}


export class KalturaReportResponseOptions extends KalturaObjectBase {

    delimiter : string;

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
				delimiter : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportResponseOptions'] = KalturaReportResponseOptions;