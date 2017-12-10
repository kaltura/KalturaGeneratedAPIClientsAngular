
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportBaseTotalArgs  extends KalturaObjectBaseArgs {
    id? : string;
	data? : string;
}


export class KalturaReportBaseTotal extends KalturaObjectBase {

    id : string;
	data : string;

    constructor(data? : KalturaReportBaseTotalArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportBaseTotal' },
				id : { type : 's' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportBaseTotal',KalturaReportBaseTotal);
