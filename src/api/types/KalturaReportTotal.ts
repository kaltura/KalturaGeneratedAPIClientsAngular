
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportTotalArgs  extends KalturaObjectBaseArgs {
    header? : string;
	data? : string;
}


export class KalturaReportTotal extends KalturaObjectBase {

    header : string;
	data : string;

    constructor(data? : KalturaReportTotalArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportTotal' },
				header : { type : 's' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportTotal',KalturaReportTotal);
