
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDeliveryProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDeliveryProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaDeliveryProfile[];

    constructor(data? : KalturaDeliveryProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDeliveryProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDeliveryProfile, subType : 'KalturaDeliveryProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileListResponse',KalturaDeliveryProfileListResponse);
