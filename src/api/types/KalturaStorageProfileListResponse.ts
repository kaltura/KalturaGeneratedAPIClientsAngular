
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfile } from './KalturaStorageProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaStorageProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaStorageProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaStorageProfile[];

    constructor(data? : KalturaStorageProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaStorageProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaStorageProfile, subType : 'KalturaStorageProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageProfileListResponse',KalturaStorageProfileListResponse);
