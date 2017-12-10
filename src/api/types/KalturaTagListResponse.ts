
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTag } from './KalturaTag';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTagListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaTagListResponse extends KalturaListResponse {

    readonly objects : KalturaTag[];

    constructor(data? : KalturaTagListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaTagListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaTag, subType : 'KalturaTag' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTagListResponse',KalturaTagListResponse);
