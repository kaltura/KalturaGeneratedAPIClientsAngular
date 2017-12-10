
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObject } from './KalturaObject';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaObjectListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaObjectListResponse extends KalturaListResponse {

    readonly objects : KalturaObject[];

    constructor(data? : KalturaObjectListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaObjectListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaObject, subType : 'KalturaObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectListResponse',KalturaObjectListResponse);
