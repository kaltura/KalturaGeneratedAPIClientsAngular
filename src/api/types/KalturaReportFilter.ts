
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportFilterArgs  extends KalturaObjectBaseArgs {
    dimension? : string;
	values? : string;
}


export class KalturaReportFilter extends KalturaObjectBase {

    dimension : string;
	values : string;

    constructor(data? : KalturaReportFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportFilter' },
				dimension : { type : 's' },
				values : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportFilter',KalturaReportFilter);
