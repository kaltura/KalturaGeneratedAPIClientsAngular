
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStartWidgetSessionResponseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaStartWidgetSessionResponse extends KalturaObjectBase {

    readonly partnerId : number;
	readonly ks : string;
	readonly userId : string;

    constructor(data? : KalturaStartWidgetSessionResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStartWidgetSessionResponse' },
				partnerId : { type : 'n', readOnly : true },
				ks : { type : 's', readOnly : true },
				userId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStartWidgetSessionResponse',KalturaStartWidgetSessionResponse);
