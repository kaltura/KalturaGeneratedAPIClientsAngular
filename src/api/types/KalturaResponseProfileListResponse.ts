
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaResponseProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaResponseProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaResponseProfile[];

    constructor(data? : KalturaResponseProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaResponseProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaResponseProfile, subType : 'KalturaResponseProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileListResponse',KalturaResponseProfileListResponse);
