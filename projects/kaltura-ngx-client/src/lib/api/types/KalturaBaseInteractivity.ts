
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseInteractivityArgs  extends KalturaObjectBaseArgs {
    data? : string;
}


export class KalturaBaseInteractivity extends KalturaObjectBase {

    data : string;
	readonly version : number;
	readonly entryId : string;
	readonly updatedAt : Date;

    constructor(data? : KalturaBaseInteractivityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseInteractivity' },
				data : { type : 's' },
				version : { type : 'n', readOnly : true },
				entryId : { type : 's', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseInteractivity'] = KalturaBaseInteractivity;