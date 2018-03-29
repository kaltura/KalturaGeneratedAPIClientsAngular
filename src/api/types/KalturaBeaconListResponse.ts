
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBeacon } from './KalturaBeacon';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBeaconListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaBeaconListResponse extends KalturaListResponse {

    readonly objects : KalturaBeacon[];

    constructor(data? : KalturaBeaconListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaBeacon, subType : 'KalturaBeacon' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconListResponse',KalturaBeaconListResponse);
